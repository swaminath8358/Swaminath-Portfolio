export const portfolio = {
  name: "Swaminath Nalwar",
  title: "Integration Developer & Boomi Specialist",
  tagline: "Building the bridges between systems that matter.",
  email: "swaminathnalwar14@gmail.com",
  phone: "9834467052",
  location: "Pune, Maharashtra, India",
  linkedin: "https://linkedin.com/in/swaminathnalwar",
  github: "https://github.com/swaminath8358",
  dob: "14/04/2001",

  stats: [
    { number: "3+", label: "Years Experience" },
    { number: "12+", label: "Platforms Integrated" },
    { number: "10+", label: "Certifications" },
    { number: "3", label: "Industry Domains" },
  ],

  about: [
    "I'm a results-driven Integration Developer with close to 3 years of hands-on experience designing, implementing, and managing integration solutions using Boomi. My expertise lies in building scalable, optimized workflows and executing end-to-end EDI (Electronic Data Interchange) integrations across cloud and on-premises systems.",
    "From healthcare supply chains to retail automation, I've connected platforms like NetSuite, Salesforce, Shopify, AS400, Microsoft Dynamics NAV, and WizCommerce — ensuring seamless, accurate data exchange that powers real business outcomes.",
  ],

  aboutTags: [
    "📍 Pune, Maharashtra",
    "🎓 VIT Pune — CGPA 8.64",
    "🏆 Star Performer Award",
    "⭐ HackerRank 5-Star Python",
    "🌐 4 Languages Spoken",
  ],

  skills: [
    {
      category: "Integration Platforms",
      icon: "🔗",
      items: [
        { name: "Boomi (AtomSphere)", level: 95 },
        { name: "X12 EDI (850/855/856/810)", level: 90 },
        { name: "Workato", level: 78 },
      ],
    },
    {
      category: "Enterprise Systems",
      icon: "☁️",
      variant: "cyan",
      items: [
        { name: "NetSuite", level: 90 },
        { name: "Salesforce", level: 82 },
        { name: "Shopify / AS400", level: 85 },
        { name: "MS Dynamics NAV", level: 80 },
      ],
    },
    {
      category: "Programming Languages",
      icon: "💻",
      variant: "green",
      items: [
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 75 },
        { name: "C / C++", level: 82 },
      ],
    },
    {
      category: "Data & APIs",
      icon: "🗄️",
      items: [
        { name: "REST API", level: 88 },
        { name: "SOAP API", level: 80 },
        { name: "MySQL / SQL Server", level: 83 },
        { name: "Google BigQuery", level: 70 },
      ],
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "Aretove Technologies",
      period: "Sep 2025 – Present",
      location: "Pune, India",
      badge: "Current",
      badgeColor: "cyan",
      highlights: [
        "Designed and implemented end-to-end X12 EDI integrations for 850, 855, 856, and 810 transaction sets across inbound and outbound flows.",
        "Integrated EDI workflows with Flexport, ShipHawk, Microsoft Dynamics NAV, and WizCommerce to enable seamless order lifecycle management.",
        "Built integrations for orders, customers, companies, contacts, and products ensuring accurate data synchronization.",
        "Developed robust mapping, transformation, and validation logic aligned with EDI standards and trading partner requirements.",
        "Implemented error handling, acknowledgments, and reconciliation mechanisms to improve transaction accuracy.",
      ],
      tech: ["X12 EDI", "Boomi", "Flexport", "ShipHawk", "MS Dynamics NAV", "WizCommerce"],
    },
    {
      title: "Associate → Senior Associate Consultant",
      company: "Jade Global Software Pvt. Ltd.",
      period: "Sep 2023 – Aug 2025",
      location: "Pune, India",
      badge: "2 Years",
      highlights: [
        "Developed and maintained scalable Boomi integrations for SunRx, Fellers, and RomTech — supporting EDI workflows and enterprise connectivity.",
        "Built integrations between NetSuite, Salesforce, AS400, Shopify, and Central Databases (CDB) for seamless data exchange.",
        "Automated order processing, inventory updates, item receipts, and manufacturing workflows.",
        "Implemented real-time and batch integrations including Shopify–AS400 sync and pharmaceutical supply chain workflows.",
        "Strengthened system reliability through robust error handling, logging frameworks, and proactive monitoring.",
      ],
      tech: ["Boomi", "NetSuite", "Salesforce", "AS400", "Shopify", "EDI"],
    },
  ],

  projects: [
    {
      icon: "💊",
      title: "SunRx — Pharma Supply Chain",
      description: "Built end-to-end pharmaceutical supply chain integrations handling real-time inventory updates, order processing, and EDI-based transactions across cloud and on-premises systems.",
      tech: ["Boomi", "EDI", "NetSuite"],
      domain: "Healthcare",
    },
    {
      icon: "🛍️",
      title: "Fellers",
      description: "Implemented real-time bidirectional synchronization between Shopify storefronts and AS400 ERP, automating inventory management and order fulfillment for retail.",
      tech: ["Shopify", "AS400", "Boomi", "EDI", "NetSuite", "Salesforce"],
      domain: "Retail",
    },
    {
      icon: "🦾",
      title: "RomTech — Manufacturing Workflows",
      description: "Automated manufacturing workflows including item receipts, assembly operations, and inventory updates by integrating NetSuite with custom databases and third-party systems.",
      tech: ["NetSuite", "Boomi", "SQL Server"],
      domain: "Healthcare",
    },
    {
      icon: "📦",
      title: "EDI Order Lifecycle",
      description: "Designed complete X12 EDI transaction flows (850→855→856→810) integrated with Flexport and ShipHawk, enabling full order management from purchase to invoice.",
      tech: ["X12 EDI", "Flexport", "ShipHawk"],
      domain: "Supply Chain",
    },
    {
      icon: "🔄",
      title: "WizCommerce ↔ NAV Integration",
      description: "Integrated WizCommerce B2B platform with Microsoft Dynamics NAV, syncing customers, orders, products, and contacts in real time with robust error handling.",
      tech: ["WizCommerce", "MS NAV", "REST API"],
      domain: "B2B Commerce",
    },
    {
      icon: "☁️",
      title: "Salesforce ↔ NetSuite Connector",
      description: "Built a bidirectional CRM-to-ERP integration pipeline with custom saved searches, advanced field mappings, and automated data quality checks.",
      tech: ["Salesforce", "NetSuite", "SOAP"],
      domain: "CRM / ERP",
    },
  ],

  certifications: [
    { icon: "⚡", name: "Associate & Professional Boomi Developer", issuer: "Boomi" },
    { icon: "🏗️", name: "Associate Runtime Architect", issuer: "Boomi" },
    { icon: "📋", name: "Associate X12 EDI Certificate", issuer: "Boomi" },
    { icon: "🤖", name: "Workato Automation Pro 1, 2 & 3", issuer: "Workato" },
    { icon: "🎨", name: "Foundation in UX Design", issuer: "Google via Coursera" },
    { icon: "📊", name: "Google BigQuery", issuer: "LinkedIn Learning" },
  ],

  education: [
    {
      degree: "B.Tech — Computer Engineering",
      institution: "Vishwakarma Institute of Technology, Pune",
      period: "2019 – Present",
      score: "CGPA: 8.64 / 10",
      scoreIcon: "🎓",
    },
    {
      degree: "HSC (12th) — Science",
      institution: "Sangmeshwar College, Solapur",
      period: "2018 – 2019",
      score: "Score: 80.00%",
      scoreIcon: "📚",
    },
  ],

  achievements: [
    {
      icon: "🏆",
      title: "Star Performer Award",
      org: "Jade Global",
      desc: "Exceptional contributions to system integration projects, demonstrating innovation, process optimization, and timely delivery.",
    },
    {
      icon: "⭐",
      title: "5-Star HackerRank",
      org: "HackerRank",
      desc: "5-Star ranking in Python and C++ on HackerRank.",
    },
  ],

  languages: ["English", "Hindi", "Marathi", "Kannada"],
  interests: ["Competitive Programming", "Music", "Video Games", "Graphic Design", "Mythological Series", "Sports", "Indian Culture", "Travel", "Movies"],
};
