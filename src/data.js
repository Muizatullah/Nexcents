import market1 from "./assets/market1.png";
import market2 from "./assets/market2.png";
import market3 from "./assets/market3.png";

export const navBarData = [
  {
    id: 1,
    pathName: "Home",
    pathUrl: "/",
  },
  {
    id: 2,
    pathName: "Services",
    pathUrl: "/services",
  },
  {
    id: 3,
    pathName: "Features",
    pathUrl: "/features",
  },
  {
    id: 4,
    pathName: "Products",
    pathUrl: "/products",
  },
  {
    id: 5,
    pathName: "Testimonials",
    pathUrl: "/testimonials",
  },
  {
    id: 6,
    pathName: "FAQ",
    pathUrl: "/fAQ",
  },
];

export const caringData = [
  {
    id: 1,
    image: market1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },

  {
    id: 2,
    image: market2,
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    id: 3,
    image: market3,
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];


 export const services = [
  { icon: '🌱', title: 'Soil Health Analysis', desc: 'Deep diagnostic reports on soil composition, pH, and nutrients so your land tells you what it needs.' },
  { icon: '💧', title: 'Smart Irrigation', desc: 'Precision irrigation schedules based on crop type, climate data, and real-time soil moisture readings.' },
  { icon: '🌿', title: 'Organic Advisory', desc: 'Certified consultants guide your transition to organic farming from input substitution to certification.' },
  { icon: '🛰️', title: 'Drone Monitoring', desc: 'Aerial imaging detects pest pressure, water stress, and yield gaps across your entire farm.' },
  { icon: '♻️', title: 'Supply Chain', desc: 'Connect to ethical buyers and design supply chains that reduce waste and increase your margin.' },
  { icon: '📊', title: 'Yield Forecasting', desc: 'Predictive models built on your farm data and regional climate patterns you can rely on.' },
];

 export const features = [
  { icon: '⚡', title: 'Fast Performance', desc: 'Optimized for speed — your platform loads instantly, keeping users engaged and productive.' },
  { icon: '🔒', title: 'Secure by Default', desc: 'Enterprise-grade security built in from day one. Your data is encrypted and protected always.' },
  { icon: '📱', title: 'Fully Responsive', desc: 'Works seamlessly on any device — desktop, tablet, or mobile. No compromise on experience.' },
  { icon: '🔗', title: 'Easy Integrations', desc: 'Connect with the tools you already use. APIs and plugins available for smooth workflows.' },
  { icon: '📈', title: 'Real-time Analytics', desc: 'Track performance and user behavior in real time with clear, actionable dashboards.' },
  { icon: '🤝', title: 'Team Collaboration', desc: 'Built for teams. Manage roles, share workspaces, and collaborate without friction.' },
  { icon: '☁️', title: 'Cloud Storage', desc: 'All your files and data stored safely in the cloud — accessible anytime, anywhere.' },
  { icon: '🛠️', title: 'Custom Workflows', desc: 'Tailor the platform to your process. Automate tasks and build workflows that fit your team.' },
  { icon: '🌍', title: 'Multi-language Support', desc: 'Reach a global audience with support for multiple languages right out of the box.' },
];

 export const highlights = [
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '10x', label: 'Faster Than Average' },
  { value: '500+', label: 'Integrations Available' },
  { value: '24/7', label: 'Customer Support' },
];


 export const products = [
  {
    icon: '🌾',
    name: 'CropSense Pro',
    category: 'Soil & Crop',
    price: '$49/mo',
    desc: 'AI-powered soil monitoring that tracks moisture, nutrients, and pH in real time — right from your phone.',
    badge: 'Most Popular',
  },
  {
    icon: '💧',
    name: 'AquaFlow',
    category: 'Irrigation',
    price: '$35/mo',
    desc: 'Smart irrigation controller that automates watering schedules based on weather forecasts and crop needs.',
    badge: null,
  },
  {
    icon: '🛰️',
    name: 'SkyWatch Drone Kit',
    category: 'Field Tech',
    price: '$199/mo',
    desc: 'Full drone field monitoring package — aerial imaging, heat maps, and weekly crop health reports included.',
    badge: 'New',
  },
  {
    icon: '📊',
    name: 'YieldIQ Dashboard',
    category: 'Analytics',
    price: '$29/mo',
    desc: 'Centralized analytics dashboard that forecasts yield, tracks farm KPIs, and generates export-ready reports.',
    badge: null,
  },
  {
    icon: '♻️',
    name: 'GreenChain',
    category: 'Supply Chain',
    price: '$59/mo',
    desc: 'End-to-end sustainable supply chain manager — connect with ethical buyers and trace every product batch.',
    badge: null,
  },
  {
    icon: '🌿',
    name: 'OrganicPass',
    category: 'Certification',
    price: '$19/mo',
    desc: 'Simplifies the organic certification process with guided checklists, document storage, and audit trails.',
    badge: null,
  },
];

 export const categories = ['All', 'Soil & Crop', 'Irrigation', 'Field Tech', 'Analytics', 'Supply Chain', 'Certification'];

  export const testimonials = [
  {
    name: 'Amara Folake',
    role: 'Farm Owner, Ogun State',
    avatar: '👩🏾‍🌾',
    rating: 5,
    text: 'Nexcent completely transformed how I manage my farm. The soil analysis tool alone saved me from a terrible planting decision. I saw a 41% yield increase in my first season.',
  },
  {
    name: 'Chukwuemeka Nwosu',
    role: 'Agro-cooperative Lead, Enugu',
    avatar: '👨🏿‍💼',
    rating: 5,
    text: 'We manage over 200 farmers in our cooperative. YieldIQ Dashboard gave us visibility we never had before. Reports that used to take weeks now take minutes.',
  },
  {
    name: 'Blessing Adeyemi',
    role: 'Organic Farmer, Ibadan',
    avatar: '👩🏾‍💻',
    rating: 5,
    text: 'OrganicPass made my certification process so simple. The guided checklists kept me on track and I passed my audit on the first attempt. Highly recommend.',
  },
  {
    name: 'Taiwo Okafor',
    role: 'Irrigation Specialist, Kaduna',
    avatar: '👨🏾‍🔧',
    rating: 4,
    text: 'AquaFlow cut our water usage by nearly 30% while keeping crops healthier than ever. The smart scheduling is genuinely impressive and easy to set up.',
  },
  {
    name: 'Ngozi Eze',
    role: 'Supply Chain Manager, Lagos',
    avatar: '👩🏿‍💼',
    rating: 5,
    text: 'GreenChain helped us connect with three major ethical buyers within two months. Our traceability reports are now a selling point for our produce.',
  },
  {
    name: 'Ibrahim Musa',
    role: 'Rice Farmer, Kebbi State',
    avatar: '👨🏾‍🌾',
    rating: 4,
    text: 'I was skeptical about tech on my farm but CropSense Pro proved me wrong. Real-time alerts helped me catch a nutrient deficiency before it spread.',
  },
];

 export const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '2,400+', label: 'Happy Farmers' },
  { value: '98%', label: 'Would Recommend' },
  { value: '12', label: 'Countries Served' },
];


 export const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Nexcent?',
        a: 'Nexcent is an agriculture technology platform that provides smart tools, data-driven insights, and expert advisory services to help farmers of all sizes grow more efficiently and sustainably.',
      },
      {
        q: 'Who is Nexcent built for?',
        a: 'Nexcent is built for smallholder farmers, large-scale cooperatives, agro-businesses, and supply chain managers who want to modernize their farming operations.',
      },
      {
        q: 'Is Nexcent available in my country?',
        a: 'Nexcent is currently active in 12 countries across Africa and expanding. Contact our team to confirm availability in your region.',
      },
    ],
  },
  {
    category: 'Products & Services',
    questions: [
      {
        q: 'What products does Nexcent offer?',
        a: 'We offer CropSense Pro (soil monitoring), AquaFlow (smart irrigation), SkyWatch Drone Kit (field monitoring), YieldIQ Dashboard (analytics), GreenChain (supply chain), and OrganicPass (certification).',
      },
      {
        q: 'Can I use multiple products together?',
        a: 'Yes! All Nexcent products are designed to work seamlessly together. You can manage everything from a single dashboard and combine data across tools for deeper insights.',
      },
      {
        q: 'Do you offer a free trial?',
        a: 'Yes, we offer a 14-day free trial on all plans — no credit card required. You get full access to all features during the trial period.',
      },
    ],
  },
  {
    category: 'Pricing & Billing',
    questions: [
      {
        q: 'How does pricing work?',
        a: 'Nexcent uses a monthly subscription model. Each product is priced individually, and you can also choose a bundled plan for savings. All prices are listed on our Products page.',
      },
      {
        q: 'Can I cancel my subscription anytime?',
        a: 'Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments.',
      },
      {
        q: 'Do you offer discounts for cooperatives?',
        a: 'Yes, we have special pricing for cooperatives and large farm groups. Contact our sales team to get a custom quote tailored to your organization.',
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'How do I get support?',
        a: 'You can reach our support team via live chat, email, or phone. We offer 24/7 support for all paid plans and business-hours support for free trial users.',
      },
      {
        q: 'Is there training available for new users?',
        a: 'Yes! We provide onboarding sessions, video tutorials, and a detailed knowledge base to help you get started quickly and make the most of every feature.',
      },
      {
        q: 'What if I have a technical issue in the field?',
        a: 'Our field support team is available to assist with hardware issues (like drone kits and sensors). You can also report issues directly through the mobile app.',
      },
    ],
  },
];