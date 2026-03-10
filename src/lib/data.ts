export const siteConfig = {
  name: 'Advantage Realty LLC',
  tagline: 'Clackamas County Real Estate — Done Right.',
  phone: '(503) 793-7520',
  email: 'huluka@advantageor.com',
  address: '13100 SE Sunnyside Rd, Suite B, Clackamas, OR 97015',
  googleRating: '5.0',
  yearsExperience: '16+',
  languages: ['English', 'Oromo', 'Amharic'],
};

export const navLinks = [
  { label: 'Buy', href: '/buy' },
  { label: 'Sell', href: '/sell' },
  { label: 'Invest', href: '/invest', children: [
    { label: 'Investment Properties', href: '/invest' },
    { label: 'Care Home Consulting', href: '/care-homes' },
  ]},
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const team = [
  {
    name: 'Huluka Abebe', role: 'Principal Broker', experience: '16+ years',
    bio: 'Huluka leads Advantage Realty with sharp negotiation instincts and a deep knowledge of Clackamas County. His clients trust him because he treats every transaction like it is his own.',
    phone: '(503) 793-7520', email: 'huluka@advantageor.com',
    languages: ['English', 'Oromo', 'Amharic'], image: '/images/team/huluka-headshot.jpg',
  },
  {
    name: 'Hunde Abebe', role: 'Broker', experience: '16+ years',
    bio: 'Hunde has a talent for matching people with the right property — whether it is a starter home or a multi-unit investment. His attention to detail and follow-through keep clients coming back.',
    phone: '(503) 449-4362', email: 'hunde@advantageor.com',
    languages: ['English', 'Oromo', 'Amharic'], image: '/images/team/hunde-headshot.jpg',
  },
  {
    name: 'Jenni Anderson', role: 'Broker · 1031 Exchange Specialist', experience: '10+ years',
    bio: 'A native Oregonian with global perspective, Jenni specializes in 1031 exchanges and investor transactions. Her project management background means nothing slips through the cracks.',
    phone: '(503) 508-8779', email: 'jenni@advantageor.com',
    languages: ['English'], image: '/images/team/jenni-headshot.png',
  },
];

export const testimonials = [
  { text: "Huluka and his team are very organized and have a good understanding of what a buyer's needs are in the home buying process. The process went efficiently and effectively with inspections, appraisal, and escrow. I'm 100% satisfied with the home I purchased, and the fantastic deal Huluka helped me get.", name: 'Tilahun S.', context: 'Home Buyer' },
  { text: "Hunde assisted me in finding the perfect home, and I couldn't be happier with my experience dealing with him. Look no farther than Hunde if you want a real estate professional that will go above and beyond to achieve your goals.", name: 'Guteta', context: 'Home Buyer' },
  { text: 'You will be well served with Hunde and Huluka with your real estate needs, especially in the adult care business.', name: 'Timothy & Tsehay S.', context: 'Care Home Investors' },
  { text: "Hunde knows exactly what you want once you consult him what kind of home and what price range you want to invest. I am satisfied on the property I bought. People have been surprised and like the home I bought \u2014 2,500 sqft with a 0.3-acre corner lot. I was advantageous working with him.", name: 'Tadesse H.', context: 'Home Buyer & Investor' },
];

export const services = [
  { title: 'Buy a Home', desc: 'First-time or move-up \u2014 we find the right property at the right price in Clackamas County.', href: '/buy', icon: 'home' },
  { title: 'Sell Your Home', desc: 'Accurate pricing, strategic marketing, and a vendor team that gets it market-ready.', href: '/sell', icon: 'trending' },
  { title: 'Invest', desc: 'Rentals, multi-family, and 1031 exchanges. We find deals that cash flow.', href: '/invest', icon: 'chart' },
  { title: 'Care Homes', desc: 'ADA-compliant properties for adult care facilities. A niche we own.', href: '/care-homes', icon: 'shield' },
];

export const serviceAreas = ['Clackamas', 'Happy Valley', 'Milwaukie', 'Oregon City', 'Gladstone', 'SE Portland', 'West Linn'];

export const processSteps = [
  { n: '01', title: 'Free Consultation', desc: 'Tell us your goals. We listen, ask the right questions, and map out a plan built around your timeline.' },
  { n: '02', title: 'Custom Strategy', desc: 'No templates. We build a search, marketing, or investment strategy specific to your situation and the current market.' },
  { n: '03', title: 'We Handle the Details', desc: 'Inspections, appraisals, negotiations, paperwork \u2014 we manage it all. You stay informed without the stress.' },
];

export const homeFaqs = [
  { q: 'What areas of Portland do you serve?', a: 'Advantage Realty is based in Clackamas, Oregon. We primarily serve Clackamas County \u2014 including Happy Valley, Milwaukie, Oregon City, Gladstone, and West Linn \u2014 as well as SE Portland and the broader metro area.' },
  { q: 'What makes Advantage different from a big franchise brokerage?', a: "We are a team of three experienced agents \u2014 not a franchise with fifty. When you work with us, you get personal attention from the same agent, start to finish. Plus, we offer specialized care home investment consulting and multilingual service in English, Oromo, and Amharic that no franchise provides." },
  { q: 'Do you help with investment properties and care homes?', a: "Yes. We work with investors on rental properties, multi-family units, and 1031 exchanges. We also specialize in finding ADA-compliant properties for adult care home facilities \u2014 a niche no other Portland-area brokerage focuses on." },
  { q: 'How much does a consultation cost?', a: 'Nothing. Our initial consultation is completely free. We will discuss your goals, answer your questions, and help you understand your options \u2014 with zero pressure or obligation.' },
  { q: 'What neighborhoods in Clackamas County are best for first-time buyers in 2026?', a: 'Happy Valley, Milwaukie, and Oregon City offer strong value for first-time buyers. They provide more space than Portland proper while keeping you close to the city. Schedule a consultation and we will match you with neighborhoods that fit your budget and lifestyle.' },
  { q: 'Do you offer services in languages other than English?', a: 'Yes. Huluka and Hunde are fluent in Oromo and Amharic in addition to English.' },
];

export const whyAdvantage = [
  { title: 'Care Home Expertise', body: "We are the only brokerage in the Portland metro dedicated to helping investors find ADA-compliant properties for adult care facilities. We know Oregon's requirements inside and out.", icon: 'shield' },
  { title: 'A Team, Not a Machine', body: 'Three agents. One shared mission. When you work with Advantage, you work with the same person from first meeting to closing day. No handoffs.', icon: 'users' },
  { title: 'Investment DNA', body: 'Rentals, multi-family, 1031 exchanges, care homes. We do not just help you buy houses \u2014 we help you build wealth through real estate.', icon: 'chart' },
  { title: '16+ Years Local', body: 'We know every neighborhood, every micro-market, and every trend in Clackamas County. That knowledge is the difference between a good deal and a great one.', icon: 'map' },
];
