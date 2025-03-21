import banner from '../assets/images/banner.png';
import doctor from '../assets/images/doctor.png';

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[500px] md:h-[1000px]">
        <img
          src={banner}
          alt="Children playing and learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Nurturing Every Child's Potential
            </h1>
            <p className="text-base sm:text-lg md:text-2xl max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
              Specialized care and support for children with developmental needs
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* About Title with Line Below */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-left">
            About
          </h2>
          <hr className="border-t-2 border-gray-400 mb-6" /> {/* Line below About */}

          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* WHO ARE WE? - Left Side */}
<div className="bg-gradient-to-r from-white to-blue-50 text-gray-800 p-8 rounded-lg shadow-md border border-gray-300 h-full flex flex-col border-l-4 border-blue-300">
  <h3 className="text-3xl font-bold mb-4 text-blue-400">WHO ARE WE?</h3>
  <p className="text-lg leading-relaxed font-serif text-gray-500">
    CCDD has more than 10 years of experience in providing quality services
    in a very friendly environment to help special needs children reach their full potential.
    The multidisciplinary team at CCDD includes Developmental Pediatricians, Neuroscientists,
    Child Psychologists, Physiotherapists, Special Educators, and Language Therapists.
  </p>
  <p className="text-lg leading-relaxed mt-4 font-serif text-gray-500">
    CCDD is NABH accredited and offers an IAP Fellowship in Developmental Pediatrics.
    The CCDD Research Cell is actively involved in clinical research, data analysis,
    and publishing its findings.
  </p>
  <p className="text-lg leading-relaxed mt-4 font-serif text-gray-500">
    Our sister website <span className="font-bold italic text-blue-400">TotsGuide.com</span> provides
    developmental programs such as "Track and Act," "SCOPE," and "DOLPHIN" for young children.
  </p>
</div>

{/* WE TREAT - Right Side */}
<div className="bg-gradient-to-r from-white to-gray-50 text-black p-8 rounded-lg shadow-md border border-gray-300 h-full flex flex-col border-l-4 border-red-300">
  <h3 className="text-3xl font-bold mb-4 text-red-300">WE TREAT</h3>
  <ul className="text-lg space-y-3 font-serif text-gray-500">
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Children and their families with special needs
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Autism Spectrum Disorder
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Cerebral Palsy
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Genetic disorders affecting development
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Childhood neuromotor disorders
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Learning Disabilities ADHD
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Global Developmental Delay
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Childhood Behavioural disorders / challenges
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Cortical Visual impairment
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Developmental Co-ordination Disorder
    </li>
    <li className="flex items-center">
      <span className="text-red-300 mr-2">✔</span> Sensory Processing Disorder
    </li>
  </ul>
</div>
          </div>
        </div>
      </section>

      {/* Lead Doctor Section - Image on Left, Bio on Right */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image on Left */}
            <div className="flex justify-center">
              <img
                src={doctor}
                alt="Dr. Nandini Mundkur"
                className="rounded-lg shadow-lg w-72 h-auto object-contain"
              />
            </div>

            {/* Doctor's Bio on Right */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet Dr. Nandini Mundkur</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dr. Nandini Mundkur is a renowned developmental pediatrician with nearly
                four decades of experience. She specializes in early detection and intervention
                for children with developmental disorders.
                <br /><br />
                She has launched multiple initiatives to ensure children with developmental disabilities
                receive the best care possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Creating a better future for children with developmental disabilities through
              personalized care, inclusion, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to diagnose, intervene, and provide end-to-end solutions
                for children with developmental disabilities in India.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to create a society where children with developmental disabilities
                are valued and included in all aspects of life.
                Through early diagnosis and intervention, we provide personalized and
                holistic solutions tailored to each child's needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
