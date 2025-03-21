import { useState } from 'react';

type Vlog = {
  id: number;
  title: string;
  youtubeLink: string;
};

const vlogs: Vlog[] = [
  {
    id: 1,
    title: 'In doubt checkout with Dr. Nandini Mundkur - DEMYSTIFYING AUTISM',
    youtubeLink: 'https://www.youtube.com/watch?v=OcpTKU46oqk&list=TLGG_4Z20z5THU8yODAxMjAyNQ',
  },
  {
    id: 2,
    title: 'In doubt Check out with Dr. Nandini Mundkur-Diagnosis and Management- PART 2',
    youtubeLink: 'https://www.youtube.com/watch?v=UhBuAQjMNAI&list=TLGGPKbk0G-1EPoyODAxMjAyNQ&t=1s',
  },
  {
    id: 3,
    title: 'Four areas of brain development',
    youtubeLink: 'https://www.youtube.com/watch?v=mkXPgNMaA_E&list=TLGGbsGOm_8nXhUyODAxMjAyNQ',
  },
  {
    id: 4,
    title: 'Milestones hold the key',
    youtubeLink: 'https://www.youtube.com/watch?v=kWClgEDyTAg&list=TLGGG02_F1VoaAUyODAxMjAyNQ',
  },
  {
    id: 5,
    title: 'Why the first 5 years of a child life are so important',
    youtubeLink: 'https://www.youtube.com/watch?v=3kzOZuW60jg&list=TLGGI_kBZxsbPvUyODAxMjAyNQ',
  },
];

// Helper function to extract YouTube video ID from the link
const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Helper function to generate YouTube thumbnail URL
const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

const Vlogs = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ youtubeLink: string; title: string } | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleVideoClick = (youtubeLink: string, title: string) => {
    setSelectedVideo({ youtubeLink, title });
    setShowModal(true);
  };

  // const handlePlayHere = () => {
  //   setShowModal(true);
  // };

  const handlePlayOnYouTube = () => {
    if (selectedVideo) {
      window.open(selectedVideo.youtubeLink, '_blank');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float w-24 h-24 bg-blue-800 rounded-full absolute top-10 left-20"></div>
        <div className="animate-float w-32 h-32 bg-purple-800 rounded-full absolute bottom-20 right-32"></div>
        <div className="animate-float w-20 h-20 bg-pink-800 rounded-full absolute top-32 right-20"></div>
      </div>
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Vlogs</h1>
          <p className="text-xl text-gray-600">
            Explore our latest videos on child development, therapy techniques, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogs.map((vlog) => {
            const videoId = getYouTubeVideoId(vlog.youtubeLink);
            const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : '';

            return (
              <div
                key={vlog.id}
                onClick={() => handleVideoClick(vlog.youtubeLink, vlog.title)}
                className="block bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  {thumbnailUrl && (
                    <img
                      src={thumbnailUrl}
                      alt={vlog.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{vlog.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal/Popup */}
        {showModal && selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
              <h2 className="text-xl font-semibold mb-4">{selectedVideo.title}</h2>
              <div className="flex flex-col space-y-4">
                {/* <button
                  onClick={handlePlayHere}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Play Here
                </button> */}
                <button
                  onClick={handlePlayOnYouTube}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Play on YouTube
                </button>
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Video Player (Visible when Play Here is clicked) */}
              {showModal && selectedVideo && (
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedVideo.youtubeLink)}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Vlogs;