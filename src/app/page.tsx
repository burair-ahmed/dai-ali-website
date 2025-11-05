import About from "@/components/About";
import AlAshrafGroup from "@/components/AlAshrafGroup";
import EducationJourney from "@/components/EducationJourney";
import Hero from "@/components/Hero";
import LeadershipVision from "@/components/LeadershipVision";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <LeadershipVision/>
    <AlAshrafGroup/>
    <EducationJourney/>
    </>
  );
}
