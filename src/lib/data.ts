export const siteConfig = {
  name: 'Advantage Realty',
  phone: '(503) 793-7520',
  email: 'huluka@advantageor.com',
  address: '13100 SE Sunnyside Rd, Suite B, Clackamas, OR 97015',
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
  { name: 'Huluka Abebe', role: 'Principal Broker', exp: '16+ years',
    bio: 'Huluka leads Advantage Realty with sharp negotiation instincts and deep Clackamas County expertise. Clients trust him because he treats every deal like his own.',
    phone: '(503) 793-7520', email: 'huluka@advantageor.com', languages: ['English','Oromo','Amharic'], image: '/images/team/huluka-headshot.jpg' },
  { name: 'Hunde Abebe', role: 'Broker', exp: '16+ years',
    bio: 'Hunde has a talent for matching people with the right property. His attention to detail and follow-through keep clients coming back for their second and third deals.',
    phone: '(503) 449-4362', email: 'hunde@advantageor.com', languages: ['English','Oromo','Amharic'], image: '/images/team/hunde-headshot.jpg' },
  { name: 'Jenni Anderson', role: 'Broker · 1031 Exchange Specialist', exp: '10+ years',
    bio: 'A native Oregonian with global perspective, Jenni specializes in 1031 exchanges and investor transactions. Her project management background means nothing slips through the cracks.',
    phone: '(503) 508-8779', email: 'jenni@advantageor.com', languages: ['English'], image: '/images/team/jenni-headshot.png' },
];

export const testimonials = [
  { text: "Huluka and his team are very organized and have a good understanding of what a buyer's needs are in the home buying process. The process went efficiently and effectively with inspections, appraisal, and escrow. I'm 100% satisfied with the home I purchased, and the fantastic deal Huluka helped me get.", name: 'Tilahun S.', context: 'Home Buyer' },
  { text: "Hunde assisted me in finding the perfect home, and I couldn't be happier with my experience dealing with him. Look no farther than Hunde if you want a real estate professional that will go above and beyond to achieve your goals.", name: 'Guteta', context: 'Home Buyer' },
  { text: 'You will be well served with Hunde and Huluka with your real estate needs, especially in the adult care business.', name: 'Timothy & Tsehay S.', context: 'Care Home Investors' },
  { text: "Hunde knows exactly what you want once you consult him what kind of home and what price range you want to invest. I am satisfied on the property I bought. People have been surprised and like the home I bought \u2014 2,500 sqft with a 0.3-acre corner lot. I was advantageous working with him.", name: 'Tadesse H.', context: 'Home Buyer & Investor' },
];

export const services = [
  { title: 'Buy a Home', desc: 'First-time or move-up \u2014 we find the right property at the right price.', href: '/buy' },
  { title: 'Sell Your Home', desc: 'Accurate pricing, strategic marketing, a vendor team that gets it done.', href: '/sell' },
  { title: 'Invest', desc: 'Rentals, multi-family, and 1031 exchanges that actually cash flow.', href: '/invest' },
  { title: 'Care Homes', desc: 'ADA-compliant properties for adult care facilities. A niche we own.', href: '/care-homes' },
];

export const serviceAreas = ['Clackamas','Happy Valley','Milwaukie','Oregon City','Gladstone','SE Portland','West Linn'];

export const homeFaqs = [
  { q: 'What areas do you serve?', a: 'We are based in Clackamas, OR and serve Clackamas County including Happy Valley, Milwaukie, Oregon City, Gladstone, and West Linn, plus SE Portland and the broader metro.' },
  { q: 'How are you different from a big franchise?', a: 'Three agents, not fifty. You work with the same person from first call to closing. Plus we offer care home investment consulting and multilingual service (English, Oromo, Amharic) that no franchise provides.' },
  { q: 'Do you help with investment properties?', a: 'Yes \u2014 rental properties, multi-family, 1031 exchanges, and adult care home facility acquisitions.' },
  { q: 'What does a consultation cost?', a: 'Nothing. Free, no-obligation. We discuss your goals, answer questions, and help you understand your options.' },
  { q: 'Best neighborhoods for first-time buyers in 2026?', a: 'Happy Valley (newer construction, family-oriented), Milwaukie (walkable downtown, light rail), and Oregon City (historic charm, larger lots, best value). We will match you to the right fit.' },
  { q: 'Do you offer services in other languages?', a: 'Yes. Huluka and Hunde speak fluent Oromo and Amharic in addition to English.' },
];
