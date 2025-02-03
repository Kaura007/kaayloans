import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo: string;
}

interface TeamCategory {
  category: string;
  members: TeamMember[];
}

const teamData: TeamCategory[] = [
  {
    category: "Leadership",
    members: [
      {
        name: "Kaay Crabtee",
        title: "CO-FOUNDER & PARTNER",
        bio: "With over 15 years of experience in strategic financial leadership, Kaay has guided numerous organizations through successful growth phases and market expansions. Her expertise in risk management and investment strategy has been instrumental in establishing our firm's reputation for excellence.",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Sarah J. Mitchell",
        title: "MANAGING DIRECTOR",
        bio: "Sarah brings 12+ years of investment banking experience to the team. Her track record includes managing over $2B in client assets and developing innovative financial solutions that have become industry standards.",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Michael R. Chen",
        title: "CHIEF RISK OFFICER",
        bio: "A veteran in risk assessment and compliance, Michael has spent two decades developing robust risk management frameworks for leading financial institutions. His analytical approach ensures our clients' investments are protected through strategic diversification.",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Elena Rodriguez",
        title: "HEAD OF OPERATIONS",
        bio: "Elena's expertise in operational efficiency and process optimization has transformed our service delivery model. With an MBA from Harvard Business School, she brings both academic excellence and practical experience to our operations.",
        photo: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?auto=format&fit=crop&w=400&h=400"
      }
    ]
  },
  {
    category: "Senior Associates",
    members: [
      {
        name: "David Thompson",
        title: "SENIOR FINANCIAL ADVISOR",
        bio: "David specializes in retirement planning and wealth management, helping clients build secure financial futures through strategic investment planning and risk-adjusted portfolio management.",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Jessica Wu",
        title: "INVESTMENT STRATEGIST",
        bio: "With a background in quantitative analysis and market research, Jessica develops data-driven investment strategies that have consistently outperformed market benchmarks.",
        photo: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Marcus Johnson",
        title: "COMPLIANCE MANAGER",
        bio: "Marcus ensures our operations maintain the highest standards of regulatory compliance while facilitating smooth client service delivery through innovative compliance frameworks.",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
      },
      {
        name: "Laura Martinez",
        title: "CLIENT RELATIONS DIRECTOR",
        bio: "Laura's dedication to exceptional client service has helped build lasting relationships with our key accounts. Her approach combines personal attention with strategic financial guidance.",
        photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&h=400"
      }
    ]
  },
  {
    category: "Accountants",
    members: [
      {
        name: "Anthony Wayne",
        title: "SENIOR ACCOUNTANT",
        bio: "Anthony brings over a decade of expertise in financial accounting and tax planning. His meticulous attention to detail and deep understanding of tax regulations ensures our clients receive optimal financial guidance and compliance support.",
        photo: "/images/anthony-wayne.jpg"
      }
    ]
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <img
            src={member.photo}
            alt={member.name}
            className="rounded-full object-cover w-full h-full shadow-md"
            loading="lazy"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{member.name}</h3>
        <p className="text-sm font-semibold text-blue-600 tracking-wider text-center mb-4">
          {member.title}
        </p>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-48' : 'max-h-0'
          }`}
        >
          <p className="text-gray-600 text-center mb-4">{member.bio}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          aria-expanded={isExpanded}
          aria-controls={`bio-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <span className="underline mr-1">
            {isExpanded ? 'Show Less' : 'Read More'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Meet Our Expert Team
        </h2>
        {teamData.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.members.map((member, memberIndex) => (
                <TeamMemberCard key={memberIndex} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;