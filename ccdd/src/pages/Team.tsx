import avatar from '../assets/images/avatar.png';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image?: string;
  bio?: string; 
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Nandini Mundkur',
    role: 'Founder & CEO',
    image: `${avatar}`,
    bio: 'MD DEVELOPMENTAL PEDIATRICIAN / Director - Medical & Administration',
  },
  {
    id: 2,
    name: 'Mrs. Savita B.S.',
    role: 'Director Intervention Services',
    image: `${avatar}`,
    bio: 'MSc CHILD PSYCHOLOGY, DSE (AUTISM), C/LD, MRCI / Special Educator',
  },
  {
    id: 3,
    name: 'Dr. Kirtika Rajaraman',
    role: 'Assistant Director',
    image: `${avatar}`,
    bio: 'DCH, DNB (Pediatrics) FIAP (Development & Behaviour Pediatrics)',
  },
  /*{
    id: 4,
    name: 'teamMem4',
    role: 'Occupational Therapist',
    image: `${avatar}`,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },*/
];

const Team = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float w-24 h-24 bg-blue-800 rounded-full absolute top-20 left-20"></div>
        <div className="animate-float w-32 h-32 bg-purple-800 rounded-full absolute bottom-20 right-56"></div>
        <div className="animate-float w-20 h-20 bg-pink-800 rounded-full absolute top-32 right-20"></div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who are committed to helping children
              reach their full potential.
            </p>
          </div>

          {/* Centered Team Members */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl"
                >
                  <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                    {member.bio && (
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;