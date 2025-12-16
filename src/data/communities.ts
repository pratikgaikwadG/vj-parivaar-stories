export interface Community {
  id: number;
  name: string;
  location: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  residentQuote?: {
    text: string;
    author: string;
  };
}

export const communities: Community[] = [
  {
    id: 1,
    name: "VJ Greenwood",
    location: "Baner, Pune",
    tagline: "Where Nature Meets Neighbourhood",
    description: "Nestled among mature trees, VJ Greenwood is a sanctuary for families who believe in sustainable living. Morning bird songs and evening community walks define life here.",
    image: "/placeholder.svg",
    features: ["Community Garden", "Nature Trails", "Weekend Farmer's Market", "Children's Discovery Zone"],
    residentQuote: {
      text: "My children learned more about nature here in one month than they did in years of city living.",
      author: "Meera Patil, Resident since 2020"
    }
  },
  {
    id: 2,
    name: "VJ Heights",
    location: "Kothrud, Pune",
    tagline: "Elevated Living, Grounded Values",
    description: "VJ Heights combines panoramic city views with the warmth of close-knit community living. It's where skylines meet storylines.",
    image: "/placeholder.svg",
    features: ["Rooftop Community Lounge", "Cultural Events Space", "Multi-generational Zones", "Art Gallery"],
    residentQuote: {
      text: "The rooftop gatherings have given us friendships we'll cherish forever.",
      author: "Suresh & Kavita Nair, Residents since 2018"
    }
  },
  {
    id: 3,
    name: "VJ Harmony",
    location: "Wakad, Pune",
    tagline: "Life in Perfect Balance",
    description: "Designed for modern families seeking balance, VJ Harmony offers spaces that adapt to your lifestyle—from work-from-home needs to weekend celebrations.",
    image: "/placeholder.svg",
    features: ["Co-working Spaces", "Wellness Centre", "Community Kitchen", "Festival Pavilion"],
    residentQuote: {
      text: "The community kitchen concept changed how we celebrate festivals—now the whole building cooks together.",
      author: "The Kulkarni Family, Residents since 2021"
    }
  },
  {
    id: 4,
    name: "VJ Serenity",
    location: "Hinjewadi, Pune",
    tagline: "Your Peaceful Retreat",
    description: "After the hustle of IT corridors, come home to tranquility. VJ Serenity is designed as an oasis of calm for the modern professional.",
    image: "/placeholder.svg",
    features: ["Meditation Gardens", "Sound-proof Studios", "Infinity Pool", "Stargazing Deck"],
    residentQuote: {
      text: "I never thought I'd find peace so close to work. This place proved me wrong.",
      author: "Amit Sharma, Resident since 2022"
    }
  }
];

export const featuredCommunities = communities.slice(0, 3);
