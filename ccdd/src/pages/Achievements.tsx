import { useState } from "react";

const documents = {
  "Annual Report 2022": "/documents/2021-2022.pdf#toolbar=0&navpanes=0&scrollbar=0",
  "Annual Report 2023": "/documents/2023-2024.pdf#toolbar=0&navpanes=0&scrollbar=0",
  "Workshops": "/documents/workshops.pdf#toolbar=0&navpanes=0&scrollbar=0",
  "Others": "/documents/others.pdf#toolbar=0&navpanes=0&scrollbar=0",
} as const;

type DocumentKey = keyof typeof documents;

export default function AchievementsPage() {
  const [selectedTab, setSelectedTab] = useState<DocumentKey>("Annual Report 2022");

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-10 relative overflow-hidden">
      <div className="container mx-auto p-6 flex gap-6 min-h-screen">
        {/* Sidebar Buttons */}
        <div className="w-1/4 flex flex-col space-y-4">
          {Object.keys(documents).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 text-left w-full shadow-md ${
                selectedTab === tab
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedTab(tab as DocumentKey)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Embedded Document with Clean UI */}
        <div className="w-3/4 h-[80vh] border rounded-lg shadow-lg overflow-hidden bg-white flex items-center justify-center">
          <iframe
            src={documents[selectedTab]}
            className="w-full h-full rounded-md"
            title="Embedded Document"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
