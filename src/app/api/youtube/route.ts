import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY!;
  const CHANNEL_ID = "UC26pO3ywgYaKinTwiwFTdGg";
  const MAX_RESULTS = 200;

  try {
    // 1. SEARCH videos from channel
    const searchUrl =
      `https://www.googleapis.com/youtube/v3/search?` +
      new URLSearchParams({
        key: API_KEY,
        channelId: CHANNEL_ID,
        part: "snippet",
        order: "date",
        maxResults: MAX_RESULTS.toString(),
        type: "video",
      });

    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    if (!searchData.items)
      return NextResponse.json({ videos: [] });

    const videoIds = searchData.items.map((item: any) => item.id.videoId);

    if (videoIds.length === 0)
      return NextResponse.json({ videos: [] });

    // 2. GET full details (snippet + contentDetails)
    const detailsUrl =
      `https://www.googleapis.com/youtube/v3/videos?` +
      new URLSearchParams({
        key: API_KEY,
        id: videoIds.join(","),
        part: "snippet,contentDetails",
      });

    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    const videos = (detailsData.items || []).map((v: any) => {
      const thumbs = v.snippet.thumbnails;
      const best =
        thumbs.maxres ||
        thumbs.standard ||
        thumbs.high ||
        thumbs.medium ||
        thumbs.default;

      return {
        id: v.id,
        title: v.snippet.title,
        description: v.snippet.description,
        publishedAt: v.snippet.publishedAt,
        duration: v.contentDetails.duration,
        url: `https://www.youtube.com/watch?v=${v.id}`,
        thumbnail: best?.url || "",
        width: best?.width || 0,
        height: best?.height || 0,
      };
    });

    return NextResponse.json({ videos });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to load videos", details: e },
      { status: 500 }
    );
  }
}
