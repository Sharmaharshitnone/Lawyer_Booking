import { Search, MapPin, Briefcase, Trophy, DollarSign, Clock, BookOpen, X } from 'lucide-react';
import { DualRangeSlider } from './DualRangeSlider';

const locations = [
  'Bilaspur, HP',
  'Shimla, HP',
  'Mandi, HP',
  'Kangra, HP',
  'Dharamshala, HP',
  'Kullu, HP',
  'Solan, HP',
  'Hamirpur, HP'
];

const specialties = [
  'Criminal Lawyer',
  'Family Lawyer',
  'Corporate Lawyer',
  'Property Lawyer',
  'Cyber Lawyer',
  'Civil Lawyer',
  'Immigration Law',
  'Human Rights',
  'Real Estate Law',
  'Tax Law'
];

const availabilityOptions = ['Available', 'Limited', 'Busy'];

export function FilterSidebar({ filters, setFilters, totalResults }) {
  const handleCheckboxChange = (category, value) => {
    setFilters({
      ...filters,
      [category]: filters[category].includes(value)
        ? filters[category].filter((item) => item !== value)
        : [...filters[category], value]
    });
  };

  const clearAllFilters = () => {
    setFilters({
      search: '',
      locations: [],
      experienceRange: [0, 25],
      casesWonRange: [0, 350],
      specialties: [],
      costRange: [0, 25000],
      availability: []
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.locations.length > 0 ||
    filters.specialties.length > 0 ||
    filters.availability.length > 0 ||
    filters.experienceRange[0] > 0 ||
    filters.experienceRange[1] < 25 ||
    filters.casesWonRange[0] > 0 ||
    filters.casesWonRange[1] < 350 ||
    filters.costRange[0] > 0 ||
    filters.costRange[1] < 25000;

  return (
    <aside className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto sticky top-0">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear all
            </button>
          )}
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Search className="w-4 h-4" />
            Search
          </label>
          <input
            type="text"
            placeholder="Search by name, location, specialty..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <MapPin className="w-4 h-4" />
            Location
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {locations.map(location => (
              <label key={location} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.locations.includes(location)}
                  onChange={() => handleCheckboxChange('locations', location)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <Briefcase className="w-4 h-4" />
            Experience (years)
          </label>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="25"
                value={filters.experienceRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  experienceRange: [Number(e.target.value), filters.experienceRange[1]]
                })}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                min="0"
                max="25"
                value={filters.experienceRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  experienceRange: [filters.experienceRange[0], Number(e.target.value)]
                })}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <DualRangeSlider
              min={0}
              max={25}
              value={filters.experienceRange}
              onChange={(value) => setFilters({ ...filters, experienceRange: value })}
            />
          </div>
        </div>

        {/* Cases Won */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <Trophy className="w-4 h-4" />
            Cases Won
          </label>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="350"
                value={filters.casesWonRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  casesWonRange: [Number(e.target.value), filters.casesWonRange[1]]
                })}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                min="0"
                max="350"
                value={filters.casesWonRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  casesWonRange: [filters.casesWonRange[0], Number(e.target.value)]
                })}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <DualRangeSlider
              min={0}
              max={350}
              value={filters.casesWonRange}
              onChange={(value) => setFilters({ ...filters, casesWonRange: value })}
            />
          </div>
        </div>

        {/* Specialty */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <BookOpen className="w-4 h-4" />
            Specialty
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {specialties.map(specialty => (
              <label key={specialty} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.specialties.includes(specialty)}
                  onChange={() => handleCheckboxChange('specialties', specialty)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{specialty}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Average Cost */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <DollarSign className="w-4 h-4" />
            Avg Cost Per Case (₹)
          </label>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="25000"
                step="1000"
                value={filters.costRange[0]}
                onChange={(e) => setFilters({
                  ...filters,
                  costRange: [Number(e.target.value), filters.costRange[1]]
                })}
                className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                min="0"
                max="25000"
                step="1000"
                value={filters.costRange[1]}
                onChange={(e) => setFilters({
                  ...filters,
                  costRange: [filters.costRange[0], Number(e.target.value)]
                })}
                className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <DualRangeSlider
              min={0}
              max={25000}
              step={1000}
              value={filters.costRange}
              onChange={(value) => setFilters({ ...filters, costRange: value })}
            />
            <p className="text-xs text-gray-500">
              ₹{filters.costRange[0].toLocaleString('en-IN')} - ₹{filters.costRange[1].toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
            <Clock className="w-4 h-4" />
            Availability
          </label>
          <div className="space-y-2">
            {availabilityOptions.map(option => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.availability.includes(option)}
                  onChange={() => handleCheckboxChange('availability', option)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">{totalResults}</span> lawyers found
          </p>
        </div>
      </div>
    </aside>
  );
}
