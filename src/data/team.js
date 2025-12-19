export const teamMembers = [
  {
    id: 1,
    name: "Vijay Javdekar",
    role: "Managing Director",
    tenure: "30+ years",
    quote: "Every brick we lay carries the weight of someone's dreams. We never forget that.",
    image: "/placeholder.svg",
    category: "leadership"
  },
  {
    id: 2,
    name: "Anita Javdekar",
    role: "Director, Customer Relations",
    tenure: "25+ years",
    quote: "Our homeowners aren't customers—they're family. We treat every concern as our own.",
    image: "/placeholder.svg",
    category: "leadership"
  },
  {
    id: 3,
    name: "Rajesh Mhatre",
    role: "Head of Construction",
    tenure: "18 years",
    quote: "Quality isn't just a standard here—it's a promise we make to every family.",
    image: "/placeholder.svg",
    category: "team"
  },
  {
    id: 4,
    name: "Sneha Gokhale",
    role: "Community Manager",
    tenure: "6 years",
    quote: "I wake up excited because I get to help build communities, not just buildings.",
    image: "/placeholder.svg",
    category: "team"
  },
  {
    id: 5,
    name: "Prakash Joshi",
    role: "Senior Architect",
    tenure: "12 years",
    quote: "Design should serve life. Every space we create has a purpose rooted in how people actually live.",
    image: "/placeholder.svg",
    category: "team"
  },
  {
    id: 6,
    name: "Neha Sharma",
    role: "Marketing Lead",
    tenure: "4 years",
    quote: "We don't sell homes—we share stories. The rest takes care of itself.",
    image: "/placeholder.svg",
    category: "team"
  },
  {
    id: 7,
    name: "The Patel Family",
    role: "Homeowners",
    tenure: "VJ Heights, 2019",
    quote: "Three generations of our family live here. VJ understood what we needed before we did.",
    image: "/placeholder.svg",
    category: "homeowner"
  },
  {
    id: 8,
    name: "Sunita & Mohan Rao",
    role: "Homeowners",
    tenure: "VJ Greenwood, 2020",
    quote: "We didn't just buy a home; we joined a family of 200 wonderful neighbours.",
    image: "/placeholder.svg",
    category: "homeowner"
  },
  {
    id: 9,
    name: "BuildRight Materials",
    role: "Partner",
    tenure: "15 years",
    quote: "VJ's commitment to quality pushed us to be better. They accept nothing less than the best.",
    image: "/placeholder.svg",
    category: "partner"
  },
  {
    id: 10,
    name: "GreenScape Landscaping",
    role: "Partner",
    tenure: "8 years",
    quote: "Working with VJ taught us that green spaces aren't amenities—they're essential to community life.",
    image: "/placeholder.svg",
    category: "partner"
  }
];

export const leadership = teamMembers.filter(m => m.category === 'leadership');
export const team = teamMembers.filter(m => m.category === 'team');
export const homeowners = teamMembers.filter(m => m.category === 'homeowner');
export const partners = teamMembers.filter(m => m.category === 'partner');
