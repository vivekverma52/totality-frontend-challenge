// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'A cozy, modern home featuring an open-concept layout, sunlit rooms, and sleek finishes. The kitchen boasts stainless steel appliances, while the serene backyard offers a perfect escape. Ideal for comfort and style, blending warmth with contemporary design.',
    image: House1,
    imageLg: House1Lg,
    country: 'Gurugram',
    address: 'Sector 5, Old City',
    bedrooms: '6',
    bathrooms: '3',
    surface: '2500 sq ft',
    year: '2016',
    price: 110000,
    agent: {
      image: Agent1,
      name: 'Prachi',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'A cozy, modern home featuring an open-concept layout, sunlit rooms, and sleek finishes. The kitchen boasts stainless steel appliances, while the serene backyard offers a perfect escape. Ideal for comfort and style, blending warmth with contemporary design.',
    image: House2,
    imageLg: House2Lg,
    country: 'Gurugram',
    address: 'Sector 15, Old City',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: 140000,
    agent: {
      image: Agent2,
      name: 'Tarun P',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'A cozy, modern home featuring an open-concept layout, sunlit rooms, and sleek finishes. The kitchen boasts stainless steel appliances, while the serene backyard offers a perfect escape. Ideal for comfort and style, blending warmth with contemporary design.',
    image: House3,
    imageLg: House3Lg,
    country: 'Delhi',
    address: 'Sector 115, Old City',
    bedrooms: '6',
    bathrooms: '3',
    surface: '3300 sq ft',
    year: '2016',
    price: 170000,
    agent: {
      image: Agent3,
      name: 'Riyaz S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'A cozy, modern home featuring an open-concept layout, sunlit rooms, and sleek finishes. The kitchen boasts stainless steel appliances, while the serene backyard offers a perfect escape. Ideal for comfort and style, blending warmth with contemporary design.',
    image: House4,
    imageLg: House4Lg,
    country: 'Bangalore',
    address: 'Sector 11, Raj Nagar',
    bedrooms: '6',
    bathrooms: '3',
    surface: '2300 sq ft',
    year: '2016',
    price: 200000,
    agent: {
      image: Agent4,
      name: 'Karina G',
      phone: '0123 456 78910', 
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'A cozy, modern home featuring an open-concept layout, sunlit rooms, and sleek finishes. The kitchen boasts stainless steel appliances, while the serene backyard offers a perfect escape. Ideal for comfort and style, blending warmth with contemporary design.',
    image: House5,
    imageLg: House5Lg,
    country: 'Delhi',
    address: 'Sector 1, Vijay Nagar',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4000 sq ft',
    year: '2015',
    price: 2100,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'A cozy, modern home featuring an open-concept layout, sunlit rooms, and sleek finishes. The kitchen boasts stainless steel appliances, while the serene backyard offers a perfect escape. Ideal for comfort and style, blending warmth with contemporary design.',
    image: House6,
    imageLg: House6Lg,
    country: 'Bangalore',
    address: 'New Road, Sector 12',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: 15000,
    agent: {
      image: Agent6,
      name: 'Karina S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Bangalore',
    address: 'New Road, Sector 12',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: 20000,
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'A cozy, modern home featuring an open-concept layout, sunlit rooms, and sleek finishes. The kitchen boasts stainless steel appliances, while the serene backyard offers a perfect escape. Ideal for comfort and style, blending warmth with contemporary design.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Gurugram',
    address: 'Sector 1, Vijay Nagar',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: 30000,
    agent: {
      image: Agent8,
      name: 'Riya Sharma',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Delhi',
    address: 'Sector 11, Raj Nagar',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: 40000,
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House7,
    imageLg: House7Lg,
    country: 'Bangalore',
    address: 'Sector 5, Old City',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: 117000,
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House8,
    imageLg: House8Lg,
    country: 'Gurugram',
    address: 'Sector 15, Old City',
    bedrooms: '2',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price:145000,
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House9,
    imageLg: House9Lg,
    country: 'Delhi',
    address: 'Sector 115, Old City',
    bedrooms: '3',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: 39000,
    agent: {
      image: Agent12,
      name: 'Harsh Sd',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House10,
    imageLg: House10Lg,
    country: 'Bangalore',
    address: 'Sector 11, Raj Nagar',
    bedrooms: '4',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: 80000,
    agent: {
      image: Agent1,
      name: 'Prachi',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House11,
    imageLg: House11Lg,
    country: 'Delhi',
    address: 'Sector 1, Vijay Nagar',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: 213000,
    agent: {
      image: Agent2,
      name: 'Tarun P',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House12,
    imageLg: House12Lg,
    country: 'Bangalore',
    address: 'New Road, Sector 12',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: 221000,
    agent: {
      image: Agent3,
      name: 'Riyaz S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Bangalore',
    address: 'New Road, Sector 12',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: 21000,
    agent: {
      image: Agent4,
      name: 'Karina G',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Delhi',
    address: 'Sector 1, Vijay Nagar',
    bedrooms: '1',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: 32000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Delhi',
    address: 'Sector 1, Vijay Nagar',
    bedrooms: '2',
    bathrooms: '1',
    surface: '2700 sq ft',
    year: '2012',
    price: 32000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 19,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Bangalore',
    address: 'Sector 11, Raj Nagar',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1900 sq ft',
    year: '2010',
    price: 3800,
    agent: {
      image: Agent6,
      name: 'Karina S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 20,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Gurugram',
    address: ' Shashi Nagar',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1890 sq ft',
    year: '2010',
    price: 3800,
    agent: {
      image: Agent6,
      name: 'Karina S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 21,
    type: 'House',
    name: 'House 5',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House7,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: 'Sector 1, Vijay Nagar',
    bedrooms: '1',
    bathrooms: '3',
    surface: '1800 sq ft',
    year: '2015',
    price: 2100,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 22,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House9,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '3',
    bathrooms: '3',
    surface: '1200 sq ft',
    year: '2015',
    price: 2100,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 23,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House3,
    imageLg: House9Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '2',
    bathrooms: '3',
    surface: '3500 sq ft',
    year: '2015',
    price: 21200,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 24,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House5,
    imageLg: House4Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '3',
    bathrooms: '3',
    surface: '2430 sq ft',
    year: '2015',
    price: 21000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 25,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House5,
    imageLg: House2Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '1',
    bathrooms: '2',
    surface: '4300 sq ft',
    year: '2015',
    price: 8000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 26,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House1,
    imageLg: House2Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '4',
    bathrooms: '4',
    surface: '1500 sq ft',
    year: '2015',
    price: 32200,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 27,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House4,
    imageLg: House1Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '2',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: 9000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 28,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House5,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '2',
    bathrooms: '3',
    surface: '2200 sq ft',
    year: '2015',
    price: 71020,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 29,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House8,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '3',
    bathrooms: '3',
    surface: '600 sq ft',
    year: '2015',
    price: 10000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 30,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House2,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: 'Ishi Nagar',
    bedrooms: '3',
    bathrooms: '3',
    surface: '2200 sq ft',
    year: '2015',
    price: 27000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 31,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House1,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: 'Hari Nagar',
    bedrooms: '2',
    bathrooms: '3',
    surface: '1200 sq ft',
    year: '2015',
    price: 210000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 32,
    type: 'House',
    name: 'House ',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House8,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: 'New City',
    bedrooms: '3',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: 50000,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 33,
    type: 'House',
    name: 'House',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House5,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: '784',
    bedrooms: '3',
    bathrooms: '3',
    surface: '400 sq ft',
    year: '2015',
    price: 21030,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
  {
    id: 34,
    type: 'House',
    name: 'House',
    description:
      'A cozy, modern home with an open floor plan, abundant natural light, and sleek finishes. Features include a gourmet kitchen, spacious bedrooms, and a serene backyard. Perfect for relaxed living, blending comfort with style in a welcoming atmosphere.',
    image: House9,
    imageLg: House5Lg,
    country: 'Gurugram',
    address: ' Sector 12, Subhash Nagar',
    bedrooms: '3',
    bathrooms: '3',
    surface: '420 sq ft',
    year: '2015',
    price: 11100,
    agent: {
      image: Agent5,
      name: 'Sachin S',
      phone: '0123 456 78910',
    },
  },
];
