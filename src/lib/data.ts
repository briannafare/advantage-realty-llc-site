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
    bio: 'Sharp negotiator. Deep Clackamas County expertise. Treats every deal like his own.',
    phone: '(503) 793-7520', email: 'huluka@advantageor.com', languages: ['English','Oromo','Amharic'], image: '/images/team/huluka-headshot.jpg' },
  { name: 'Hunde Abebe', role: 'Broker', exp: '16+ years',
    bio: 'Has a talent for matching people to properties. Detail-oriented. Clients come back deal after deal.',
    phone: '(503) 449-4362', email: 'hunde@advantageor.com', languages: ['English','Oromo','Amharic'], image: '/images/team/hunde-headshot.jpg' },
  { name: 'Jenni Anderson', role: 'Broker · 1031 Specialist', exp: '10+ years',
    bio: 'Native Oregonian. 1031 exchange expert. PM background means nothing slips through the cracks.',
    phone: '(503) 508-8779', email: 'jenni@advantageor.com', languages: ['English'], image: '/images/team/jenni-headshot.png' },
];

export const testimonials = [
  { text: "Huluka and his team are very organized and have a good understanding of what a buyer's needs are in the home buying process. The process went efficiently and effectively with inspections, appraisal, and escrow. I'm 100% satisfied with the home I purchased, and the fantastic deal Huluka helped me get.", name: 'Tilahun S.', ctx: 'Home Buyer' },
  { text: "Hunde assisted me in finding the perfect home, and I couldn't be happier with my experience dealing with him. Look no farther than Hunde if you want a real estate professional that will go above and beyond to achieve your goals.", name: 'Guteta', ctx: 'Home Buyer' },
  { text: 'You will be well served with Hunde and Huluka with your real estate needs, especially in the adult care business.', name: 'Timothy & Tsehay S.', ctx: 'Care Home Investors' },
  { text: "Hunde knows exactly what you want once you consult him what kind of home and what price range you want to invest. I am satisfied on the property I bought. People have been surprised and like the home I bought \u2014 2,500 sqft with a 0.3-acre corner lot. I was advantageous working with him.", name: 'Tadesse H.', ctx: 'Buyer & Investor' },
];

export const services = [
  { title: 'Buy a Home', desc: 'First-time or move-up buyers. We find the right property at the right price in Clackamas County.', href: '/buy' },
  { title: 'Sell Your Home', desc: 'Accurate pricing, strategic marketing, vendor team for prep. We handle listing to close.', href: '/sell' },
  { title: 'Real Estate Investment', desc: 'Rentals, multi-family, 1031 exchanges. Deals that actually cash flow from day one.', href: '/invest' },
  { title: 'Care Home Consulting', desc: 'ADA-compliant properties for adult care facilities. The only team in Portland doing this.', href: '/care-homes' },
];

export const serviceAreas = ['Clackamas','Happy Valley','Milwaukie','Oregon City','Gladstone','SE Portland','West Linn'];

export const homeFaqs = [
  { q: 'What areas do you serve?', a: 'We are based in Clackamas, OR and primarily serve Clackamas County — Happy Valley, Milwaukie, Oregon City, Gladstone, West Linn — plus SE Portland and the broader metro.' },
  { q: 'How are you different from a franchise brokerage?', a: 'Three agents, not fifty. Same person from day one to closing. Plus we specialize in care home investment and speak English, Oromo, and Amharic.' },
  { q: 'Do you help with investment properties?', a: 'Rental properties, multi-family, 1031 exchanges, and adult care home facility acquisitions.' },
  { q: 'What does a consultation cost?', a: 'Nothing. Free. No obligation. We talk about your goals and figure out a plan.' },
  { q: 'Best Clackamas neighborhoods for first-time buyers in 2026?', a: 'Happy Valley for newer builds, Milwaukie for walkability and light rail, Oregon City for value and larger lots.' },
  { q: 'Do you work in other languages?', a: 'Yes. Huluka and Hunde speak Oromo and Amharic in addition to English.' },
];
