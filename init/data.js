const sampleListng = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "Stay in the heart of the city with this sleek modern apartment featuring skyline views and high-end amenities.",
    image:
      "https://images.unsplash.com/photo-1560448075-bb4a6f94ff81?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York",
    country: "United States",
  },
  {
    title: "Rustic Mountain Cabin",
    description:
      "Unplug and unwind in this rustic mountain cabin surrounded by breathtaking forest landscapes.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Luxury Villa with Pool",
    description:
      "Indulge in a luxurious stay at this spacious villa with a private pool, perfect for family vacations.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Charming Countryside Farmhouse",
    description:
      "Relax in this cozy farmhouse with scenic views of the countryside and fresh air all around.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Beachside Bungalow",
    description:
      "Wake up to the sound of waves in this tropical beachside bungalow with a hammock on the porch.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Glass Treehouse Retreat",
    description:
      "Experience nature up close in this modern glass treehouse nestled in the forest.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "British Columbia",
    country: "Canada",
  },
  {
    title: "Desert Dome Escape",
    description:
      "Stay under the stars in this unique desert dome with panoramic sky views.",
    image:
      "https://images.unsplash.com/photo-1590490359683-66a5cd8288e3?auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Joshua Tree",
    country: "United States",
  },
  {
    title: "Secluded Jungle Villa",
    description:
      "Immerse yourself in nature at this private villa surrounded by lush jungle landscapes.",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in this restored castle with antique interiors and scenic grounds.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Oceanfront Modern Loft",
    description:
      "A chic loft with floor-to-ceiling windows offering uninterrupted views of the ocean.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Cliffside Cave House",
    description:
      "Stay in this unique cave home built into the cliffs with mesmerizing sea views.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Lakeside Wooden Cabin",
    description:
      "Enjoy peaceful mornings by the lake in this charming wooden cabin retreat.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Ski Chalet Retreat",
    description:
      "Perfect for winter getaways, this cozy chalet offers ski-in/ski-out access.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Minimalist Zen House",
    description:
      "Find peace in this minimalist Zen-inspired home with serene garden views.",
    image:
      "https://images.unsplash.com/photo-1600585154207-46b1a1a8d8b0?auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Private Island Villa",
    description:
      "An ultra-exclusive villa located on a private island with pristine beaches.",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Countryside Stone Cottage",
    description:
      "A quaint stone-built cottage surrounded by rolling hills and farms.",
    image:
      "https://images.unsplash.com/photo-1600607687797-6d1b8f97fbd4?auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Cotswolds",
    country: "England",
  },
  {
    title: "Arctic Glass Igloo",
    description:
      "Watch the northern lights from your warm bed in this unique glass igloo.",
    image:
      "https://images.unsplash.com/photo-1519821172141-b5d8f1f0a6a5?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Safari Lodge",
    description:
      "Stay close to wildlife in this luxurious safari lodge with guided tours.",
    image:
      "https://images.unsplash.com/photo-1560448075-bb4a6f94ff81?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Romantic Paris Loft",
    description:
      "Fall in love with this romantic loft apartment offering views of the Eiffel Tower.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Paris",
    country: "France",
  },
  // 👉 30 more objects can be generated in the same structure
];

module.exports = { data: sampleListng };
