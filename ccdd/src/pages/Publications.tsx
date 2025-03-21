import EventsImage from "../assets/images/images.png"
import picture1 from "../assets/images/Picture1.png"
import picture2 from "../assets/images/Picture2.png"
import picture3 from "../assets/images/Picture3.png"
import picture4 from "../assets/images/Picture4.png"
const publications = [
  {
    title: "Aberrant neuroplasticity in autism spectrum disorder",
    description:
      "Jayaraman A, Mundkur N. Aberrant neuroplasticity in autism spectrum disorder. International Journal of Scientific Research. 2016; 5(11): 3-5.",
  },
  {
    title: "Pharmacobiological treatments in autism spectrum disorder",
    description:
      "Jayaraman A, Mundkur N -  Pharmacobiological treatments in autism spectrum disorder. Int J Curr Res Rev. 2017. 9(18): 36-39",
  },
  {
    title: "PEDICON 2017",
    description:
      "Deshpande A, Ramamoorthy N, Manju Bhargavi B.R., Jayaraman A, Mundkur N - Parent-based intervention therapy for autism spectrum disorder. PEDICON 2017, Bengaluru, India. David A, Sunil P, Murnal D, Kumar S, Jayaraman A, Mundkur N. Tots Guide - Track and Act an online early developmental screening tool for parents. PEDICON 2017, Bengaluru, India",
  },
  {
    title: "IMFAR 2017",
    description:
      "David A, Sunil P, Murnal D, Kumar S, Jayaraman A, Mundkur N. Tots Guide - Track and Act, an online early developmental screening tool for parents. IMFAR 2017, San Francisco, CA, USA Deshpande A, Ramamoorthy N, Manju Bhargavi B.R., Jayaraman A, Mundkur N - Parent-based intervention therapy for autism spectrum disorder. IMFAR 2017, San Francisco, CA, USA",
  },
  {
    title: "NCDP 2017",
    description:
      "Deshpande A, Ramamoorthy N, Manju Bhargavi B.R., Jayaraman A, Mundkur N - Parent-based intervention therapy for autism spectrum disorder. NCDP 2017, New Delhi.",
  },
  {
    title: "IDPAC 2017",
    description:
      "Deshpande A, Ramamoorthy N, Manju Bhargavi B.R., Jayaraman A, Mundkur N - Parent-based intervention therapy for autism spectrum disorder. IDPAC 2017, Mumbai.",
  },
  {
    title: "IDPAC 2017",
    description:
      "David A, Sunil P, Murnal D, Kumar S, Jayaraman A, Mundkur N. Tots Guide Track and Act, An online early developmental screening tool for parents. IDPAC 2017, Mumbai.",
  },
  {
    title: "INSAR Annual Meeting 2018",
    description:
      "Deshpande A, Sunil P, Manju Bhargavi BR, Murnal D, Mundkur N, Jayaraman A* - Evaluating depression and quality of life in mothers of children with autism spectrum disorder. INSAR Annual Meeting 2018, Rotterdam, Netherlands. Rajaraman K, Jayaraman A*, Mundkur N – Educating parents of children with autism spectrum disorder on direct and interactive  teaching techniques. INSAR Annual Meeting 2018, Rotterdam, Netherlands.",
  },
  {
    title: "Evaluation of Track and Act, a novel online developmental screening tool",
    description:
      "David A, Murnal D, Sunil P, Mundkur N, Jayaraman A* - Evaluation of “Tract and Act”, a novel online developmental screening tool. Eur J Biomed Pharm Sci. 2018. 5(7): 419-423.",
  },
  {
    title: "29th International Conference on Psychiatry and Mental Health 2018",
    description:
      "Deshpande A, Sunil P, Manju Bhargavi BR, Murnal D, Mundkur N, Jayaraman A* - Evaluating depression and quality of life in mothers of children with autism spectrum disorder. 29th International Conference on Psychiatry and Mental Health 2018, Singapore.",
  },

];

const PublicationsPage = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float w-24 h-24 bg-blue-800 rounded-full absolute top-10 left-20"></div>
        <div className="animate-float w-32 h-32 bg-purple-800 rounded-full absolute bottom-20 right-32"></div>
        <div className="animate-float w-20 h-20 bg-pink-800 rounded-full absolute top-32 right-20"></div>
      </div>
      <div className="container mx-auto px-4 pt-6 pb-10">
        <h2 className="text-4xl text-center md:text-5xl font-bold text-gray-900 mb-4">
          Our Publications
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
          Explore our latest publications.
        </p>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="break-inside-avoid p-6 border rounded-lg shadow-lg bg-white">
              <h4 className="text-lg font-medium text-gray-700 mt-2">{pub.title}</h4>
              <p className="text-gray-600 mt-3">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>

       {/* Books Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="border-b border-gray-300 pb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Books
          </h2>
        </div>

        {/* 4 Images Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 ">
          <img
            src={EventsImage}
            alt="Book 1"
            className="w-full h-78 object-cover rounded-lg shadow-lg"
          />
          <img
            src={picture1}
            alt="Book 2"
            className="w-full h-68 object-cover rounded-lg shadow-lg"
          />
          <img
            src={picture2}
            alt="Book 3"
            className="w-full h-68 object-cover rounded-lg shadow-lg"
          />
          <img
            src={picture3}
            alt="Book 4"
            className="w-full h-68 object-cover rounded-lg shadow-lg"
          />
          <img
            src={picture4}
            alt="Book 5"
            className="w-full h-58 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;