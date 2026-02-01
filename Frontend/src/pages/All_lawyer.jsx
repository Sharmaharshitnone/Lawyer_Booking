import { useState, useEffect } from "react";
import { LawyerCard } from "../components/LawyerCard";
import { FilterSidebar } from "../components/FilterSidebar";
import { useLocation } from "react-router-dom";

// Mock lawyer data matching the To_implement design
const mockLawyers = [
  {
    id: '1',
    name: 'Adv. Rahul Sharma',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    location: 'Shimla, HP',
    experience: 12,
    casesWon: 145,
    specialty: ['Criminal Lawyer', 'Civil Lawyer'],
    avgCostPerCase: 15000,
    availability: 'Available',
    rating: 4.7,
    description: 'Specializing in criminal defense with extensive experience in high-profile cases across Himachal.'
  },
  {
    id: '2',
    name: 'Adv. Neha Verma',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    location: 'Dharamshala, HP',
    experience: 8,
    casesWon: 132,
    specialty: ['Family Lawyer', 'Property Lawyer'],
    avgCostPerCase: 8500,
    availability: 'Available',
    rating: 4.8,
    description: 'Dedicated family law attorney with a compassionate approach to sensitive domestic matters.'
  },
  {
    id: '3',
    name: 'Adv. Aman Gupta',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    location: 'Mandi, HP',
    experience: 15,
    casesWon: 178,
    specialty: ['Corporate Lawyer', 'Tax Law'],
    avgCostPerCase: 20000,
    availability: 'Busy',
    rating: 4.9,
    description: 'Leading expert in corporate law and business regulations in Mandi district.'
  },
  {
    id: '4',
    name: 'Adv. Riya Malhotra',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    location: 'Kangra, HP',
    experience: 10,
    casesWon: 121,
    specialty: ['Property Lawyer', 'Real Estate Law'],
    avgCostPerCase: 12000,
    availability: 'Available',
    rating: 4.6,
    description: 'Expert in property disputes and real estate transactions in Kangra valley.'
  },
  {
    id: '5',
    name: 'Adv. Kunal Mehta',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    location: 'Bilaspur, HP',
    experience: 6,
    casesWon: 156,
    specialty: ['Cyber Lawyer', 'Corporate Lawyer'],
    avgCostPerCase: 6500,
    availability: 'Available',
    rating: 4.8,
    description: 'Specialized in cyber crime and digital law with expertise in data protection cases.'
  },
  {
    id: '6',
    name: 'Adv. Tanya Kashyap',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    location: 'Solan, HP',
    experience: 20,
    casesWon: 138,
    specialty: ['Civil Lawyer', 'Human Rights'],
    avgCostPerCase: 18000,
    availability: 'Limited',
    rating: 4.7,
    description: 'Veteran civil rights attorney with decades of experience in landmark cases.'
  },
  {
    id: '7',
    name: 'Adv. Vikram Singh',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    location: 'Kullu, HP',
    experience: 9,
    casesWon: 192,
    specialty: ['Criminal Lawyer', 'Civil Lawyer'],
    avgCostPerCase: 9500,
    availability: 'Available',
    rating: 4.9,
    description: 'Known for meticulous case preparation and exceptional courtroom presence in Kullu.'
  },
  {
    id: '8',
    name: 'Adv. Priya Desai',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    location: 'Hamirpur, HP',
    experience: 14,
    casesWon: 167,
    specialty: ['Family Lawyer', 'Immigration Law'],
    avgCostPerCase: 16500,
    availability: 'Limited',
    rating: 4.8,
    description: 'Expert in family law and immigration cases with a client-first approach.'
  },
  {
    id: '13',
    name: 'Adv. Suresh Thakur',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop',
    location: 'Bilaspur, HP',
    experience: 5,
    casesWon: 45,
    specialty: ['Civil Lawyer', 'Property Lawyer'],
    avgCostPerCase: 5000,
    availability: 'Available',
    rating: 4.5,
    description: 'Experienced in local civil disputes and property matters in Bilaspur district.'
  }
];

const All_lawyer = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({
    search: '',
    locations: [],
    experienceRange: [0, 25],
    casesWonRange: [0, 350],
    specialties: [],
    costRange: [0, 25000],
    availability: []
  });

  useEffect(() => {
    if (location.state?.specialty) {
      const spec = location.state.specialty;
      if (spec === 'All') {
        setFilters(prev => ({ ...prev, specialties: [] }));
      } else {
        setFilters(prev => ({ ...prev, specialties: [spec] }));
      }
    }
  }, [location.state]);

  const filteredLawyers = mockLawyers.filter(lawyer => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        lawyer.name.toLowerCase().includes(searchLower) ||
        lawyer.location.toLowerCase().includes(searchLower) ||
        lawyer.specialty.some(s => s.toLowerCase().includes(searchLower)) ||
        lawyer.description.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;
    }

    // Location filter
    if (filters.locations.length > 0) {
      if (!filters.locations.includes(lawyer.location)) return false;
    }

    // Experience filter
    if (lawyer.experience < filters.experienceRange[0] || lawyer.experience > filters.experienceRange[1]) {
      return false;
    }

    // Cases won filter
    if (lawyer.casesWon < filters.casesWonRange[0] || lawyer.casesWon > filters.casesWonRange[1]) {
      return false;
    }

    // Specialty filter
    if (filters.specialties.length > 0) {
      const hasMatchingSpecialty = lawyer.specialty.some(s => filters.specialties.includes(s));
      if (!hasMatchingSpecialty) return false;
    }

    // Cost filter
    if (lawyer.avgCostPerCase < filters.costRange[0] || lawyer.avgCostPerCase > filters.costRange[1]) {
      return false;
    }

    // Availability filter
    if (filters.availability.length > 0) {
      if (!filters.availability.includes(lawyer.availability)) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          totalResults={filteredLawyers.length}
        />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Lawyer</h1>
              <p className="text-gray-600">
                Showing {filteredLawyers.length} of {mockLawyers.length} lawyers
              </p>
            </div>

            {filteredLawyers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No lawyers match your current filters.</p>
                <button
                  onClick={() => setFilters({
                    search: '',
                    locations: [],
                    experienceRange: [0, 25],
                    casesWonRange: [0, 350],
                    specialties: [],
                    costRange: [0, 25000],
                    availability: []
                  })}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLawyers.map(lawyer => (
                  <LawyerCard key={lawyer.id} lawyer={lawyer} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default All_lawyer;
