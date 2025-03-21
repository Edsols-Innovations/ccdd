import { Link } from "react-router-dom";
import child from "../assets/images/services/assessments.png"
import adhdd from "../assets/images/services/adhdd.jpg"
import sensory from "../assets/images/services/sensory integration.jpeg"
import learning from "../assets/images/services/learning.jpg"
import autism from "../assets/images/services/autism.jpg"
import high from "../assets/images/services/high riskk.jpg"
import cerebral from "../assets/images/services/cerebral.jpg"
import behavioral from "../assets/images/services/Behavioral.jpg"
import counseling from "../assets/images/services/counseling.jpeg"
const services = [
  {
    title: "Child Assessment Program",
    description: "The assessment process gathers information using observation sessions, interviews with the family, checklists, informal tests and multiple standardized formal test measures using the following tools and metrics. The information obtained through assessment procedures will aid in diagnosis and identifying the child as eligible for developmental intervention. This program is open to all children, ages 1 month to 16 years.",
    image: child,
  },
  {
    title: "ADHD Intervention Program",
    description: "CCDD offers a comprehensive diagnostic and management program for children with Attention Deficit Hyperactivity Disorder (ADHD). The management is based on 3 approaches, namely, environmental accommodation, behavior modification and drug therapy. Parental education programs are also provided to develop coping strategies and monitor drug therapy.",
    image: adhdd,
  },
  {
    title: "Sensory Integration Program",
    description: "Children with Sensory Processing Disorder are carefully evaluated using standard sensory based measurement tools. Equipped with an SI room and specialized herapists, a unique treatment (activities, behavioral reinforcements, diet, etc.) is developed based on the evaluation, and modified according to progress displayed in treatment sessions.",
    image: sensory,
  },
  {
    title: "Learning Disability Clinic",
    description: "This program focuses on children with learning disabilities, a neurological condition that can affect speech, comprehension, arithmetic, writing and other kills. An assessment report is provided and allocates remedial action and monthly reviews are set to track the child’s progress. This program focuses on children with earning disabilities, ages 5 to 12 years.",
    image: learning,
  },
  {
    title: "Autism Intervention Program",
    description: "This program intervenes for children with Autism Spectrum Disorder (ASD) A detailed assessment of the child and interview with the caregivers is carried out to properly diagnose the child’s condition, followed by monthly routine reviews and regular meetings with the center specialists.",
    image: autism,
  },
  {
    title: "High Risk Follow-Up Clinic",
    description: "As the infancy period displays the most cognitive and emotional development, it is a crucial period for early diagnosis and intervention. This program follows the recommended sensory, motor and cognitive check ups every 4 months in the first year, every six months in the second year and annually in the third year.",
    image: high,
  },
  {
    title: "Intervention Program for Cerebral Palsy",
    description: "This program supports the caregiver’s knowledge on their child’s condition and full support through consultations and treatments, including regular assessments and physical therapy. This program follows the WHO ICF protocol.",
    image: cerebral,
  },
  {
    title: "Behavioral Assessment Program",
    description: "This program provides comprehensive behavioral assessments based on evidence based positive behavioral support.",
    image: behavioral,
  },
  {
    title: "Counseling Services",
    description: "CCDD provides counseling services with highly trained child psychiatrists and psychotherapists for children with psychiatric disorders such as anxiety, PTSD, ADHD, Panic disorders and other psychiatric conditions.",
    image: counseling,
  },
];

const Services = () => {
  return (
    <div>
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float w-24 h-24 bg-blue-800 rounded-full absolute top-10 left-20"></div>
        <div className="animate-float w-32 h-32 bg-purple-800 rounded-full absolute bottom-20 right-32"></div>
        <div className="animate-float w-20 h-20 bg-pink-800 rounded-full absolute top-32 right-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Center for Child Development and Disabilities (CCDD)
          </h2>
          <p className="text-lg text-blue-600 font-medium mt-2">
            A Unit of Sackhumvit Trust
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform hover:-translate-y-2 transition-transform duration-300">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The <span className="font-semibold text-blue-600">Center for Child Development and Disabilities (CCDD)</span> is NABH-accredited, offering out-patient services for children with special needs. With a multidisciplinary team of experts, CCDD provides exceptional therapy and expert solutions to children and their families with special needs. The center sees approximately <span className="font-semibold text-purple-600">1500 children annually</span> and offers services both in consultation and therapy in India and abroad.
          </p>
        </div>
      </div>
    </section>
        
    <div className="py-10 px-4 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float w-24 h-24 bg-blue-800 rounded-full absolute top-10 left-20"></div>
        <div className="animate-float w-32 h-32 bg-purple-800 rounded-full absolute bottom-20 right-32"></div>
        <div className="animate-float w-20 h-20 bg-pink-800 rounded-full absolute top-32 right-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care and support services designed to help every child reach their full potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                {/* Optional: Add a badge or icon */}
                {/* <div className="mt-4 flex items-center text-blue-600">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Available Now</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Contact Us to Learn More
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;