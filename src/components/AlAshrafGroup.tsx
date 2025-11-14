'use client';
import { FC } from "react";
import { Building2, DraftingCompass, Landmark, Wallet } from "lucide-react";

const AlAshrafGroup: FC = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 font-inter">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Al-Ashraf Group</h1>
      <p className="text-gray-600 mb-10">
        A constellation of ventures advancing design, development, and culture
      </p>

      <div className="w-full bg-[#9b7753] text-white rounded-xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-lg font-medium">
          <Building2 size={26} />
          Al-Ashraf Group of Companies
        </div>

        <a
          href="#"
          className="bg-white text-[#9b7753] rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium hover:opacity-80"
        >
          <span>Visit Group</span>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ArmArch */}
        <div className="border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#9b7753]/15 text-[#9b7753] p-3 rounded-lg">
              <DraftingCompass size={24} />
            </div>
            <div className="text-lg font-semibold">ArmArch</div>
          </div>

          <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            Architecture
          </span>

          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            A studio dedicated to elevated residential and civic architecture, blending craft with advanced engineering.
          </p>

          <a href="#" className="mt-6 inline-flex items-center gap-2 bg-[#9b7753] text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium">
            Learn More →
          </a>
        </div>

        {/* Ashraf Developments */}
        <div className="border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#9b7753]/15 text-[#9b7753] p-3 rounded-lg">
              <Landmark size={24} />
            </div>
            <div className="text-lg font-semibold">Ashraf Developments</div>
          </div>

          <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            Development
          </span>

          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Integrated development arm delivering premium mixed-use communities with sustainable infrastructure.
          </p>

          <a href="#" className="mt-6 inline-flex items-center gap-2 bg-[#9b7753] text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium">
            Learn More →
          </a>
        </div>

        {/* Ashraf Capital */}
        <div className="border rounded-xl p-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#9b7753]/15 text-[#9b7753] p-3 rounded-lg">
              <Wallet size={24} />
            </div>
            <div className="text-lg font-semibold">Ashraf Capital</div>
          </div>

          <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            Investments
          </span>

          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Strategic capital investments across real estate, hospitality, and technology to accelerate innovation.
          </p>

          <a href="#" className="mt-6 inline-flex items-center gap-2 bg-[#9b7753] text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlAshrafGroup;

