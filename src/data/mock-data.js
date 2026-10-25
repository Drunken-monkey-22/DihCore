// ============================================================
// NITT FIRE — Mock Data
// ============================================================

const FIRE_DATA = {
  facultyProjects: [
    {
      id: "FP001",
      title: "AI-Driven Water Quality Monitoring System",
      faculty: "Dr. Rajesh Kumar",
      department: "Civil Engineering",
      domain: "AI / Water Management",
      summary: "Developing a real-time IoT-based system for monitoring water quality parameters in rivers and reservoirs using machine learning models for anomaly detection and prediction.",
      stage: "Prototype",
      skills: ["Python", "Machine Learning", "IoT", "Data Analysis"],
      collaboration: "Students for data collection, model training, and dashboard development",
      availability: "Open",
      ipStatus: "Public",
      lastUpdated: "Oct 2026"
    },
    {
      id: "FP002",
      title: "Biodegradable Packaging from Agricultural Waste",
      faculty: "Dr. Priya Subramaniam",
      department: "Chemical Engineering",
      domain: "Sustainability / Materials Science",
      summary: "Research into converting sugarcane bagasse and rice husk into functional biodegradable packaging films with comparable mechanical properties to conventional plastics.",
      stage: "Research",
      skills: ["Chemical Analysis", "Material Testing", "Lab Research"],
      collaboration: "UG/PG students for lab experiments and characterisation",
      availability: "Open",
      ipStatus: "Restricted",
      lastUpdated: "Sep 2026"
    },
    {
      id: "FP003",
      title: "Smart Grid Fault Detection with Deep Learning",
      faculty: "Dr. Anand Krishnamurthy",
      department: "Electrical Engineering",
      domain: "Power Systems / Deep Learning",
      summary: "Building a deep-learning-based fault detection and classification system for smart grid infrastructure to reduce outage times and improve grid stability.",
      stage: "Testing",
      skills: ["Deep Learning", "Signal Processing", "Python", "MATLAB"],
      collaboration: "PG researchers for model refinement and real-data validation",
      availability: "Waitlist",
      ipStatus: "Public",
      lastUpdated: "Oct 2026"
    },
    {
      id: "FP004",
      title: "Natural Language Processing for Tamil Legal Documents",
      faculty: "Dr. Meenakshi Rajan",
      department: "Computer Science & Engineering",
      domain: "NLP / Legal Tech",
      summary: "Creating NLP models tailored for Tamil-language legal documents to enable automated summarisation, entity extraction, and case categorisation.",
      stage: "Concept",
      skills: ["NLP", "Python", "Tamil Language Processing", "LLMs"],
      collaboration: "Students for dataset creation and model evaluation",
      availability: "Open",
      ipStatus: "Public",
      lastUpdated: "Oct 2026"
    },
    {
      id: "FP005",
      title: "Low-Cost Prosthetic Hand with EMG Control",
      faculty: "Dr. Suresh Velayutham",
      department: "Mechanical Engineering",
      domain: "Biomedical / Robotics",
      summary: "Designing affordable myoelectric prosthetic hand prototypes controlled via surface EMG signals, targeting accessibility in rural healthcare settings.",
      stage: "Prototype",
      skills: ["Robotics", "Embedded Systems", "3D Printing", "Signal Processing"],
      collaboration: "Fabrication, electronics, and testing support",
      availability: "Open",
      ipStatus: "Public",
      lastUpdated: "Sep 2026"
    },
    {
      id: "FP006",
      title: "Coastal Erosion Prediction using Remote Sensing",
      faculty: "Dr. Lakshmi Narayanan",
      department: "Ocean Engineering",
      domain: "Remote Sensing / Climate",
      summary: "Using satellite imagery and ML models to predict shoreline changes along the Tamil Nadu coast over a 10-year horizon, informing infrastructure planning.",
      stage: "Pilot",
      skills: ["GIS", "Remote Sensing", "Python", "Data Science"],
      collaboration: "Open to students with GIS background",
      availability: "Open",
      ipStatus: "Public",
      lastUpdated: "Oct 2026"
    }
  ],

  clubProjects: [
    {
      id: "CP001",
      club: "SPIDER — The Web Dev Club",
      lead: "Aravind Selvam (4th Year, CSE)",
      title: "Campus Navigation AR App",
      problem: "First-year students struggle to navigate the 800+ acre NITT campus, especially to find labs, departments and offices.",
      status: "Active",
      skills: ["Flutter", "AR/VR", "Backend APIs", "UI/UX Design"],
      seeking: "UI/UX designer and backend developer",
      lastUpdated: "Oct 2026"
    },
    {
      id: "CP002",
      club: "SAAS — Astronomy Club",
      lead: "Divya Menon (3rd Year, Physics)",
      title: "Light Pollution Mapping — Trichy Region",
      problem: "Increasing light pollution around Trichy affects astronomical observation. No local dataset exists.",
      status: "Prototype",
      skills: ["Data Collection", "Python", "Mapping", "Photography"],
      seeking: "Data volunteers and ML support for interpolation",
      lastUpdated: "Sep 2026"
    },
    {
      id: "CP003",
      club: "EFlames — Electronics Club",
      lead: "Karthick Raja (3rd Year, ECE)",
      title: "Low-Cost Air Quality Station",
      problem: "Real-time hyperlocal air quality data is unavailable for most Indian cities including Trichy.",
      status: "Testing",
      skills: ["Embedded Systems", "IoT", "PCB Design", "Data Engineering"],
      seeking: "IoT integration expert and cloud backend developer",
      lastUpdated: "Oct 2026"
    },
    {
      id: "CP004",
      club: "Entrepreneurship Cell (E-Cell)",
      lead: "Nithya Priya (4th Year, MBA)",
      title: "Rural Artisan Marketplace Platform",
      problem: "Rural Tamil Nadu artisans lack digital access to urban and global markets.",
      status: "Active",
      skills: ["Business Development", "Web Dev", "Marketing", "Regional Languages"],
      seeking: "Tech co-founder and content creator",
      lastUpdated: "Oct 2026"
    },
    {
      id: "CP005",
      club: "AARUUSH Technical Team",
      lead: "Rohan Srinivasan (3rd Year, Mech)",
      title: "Autonomous Warehouse Sorting Robot",
      problem: "Small warehouses cannot afford industrial-grade automation. A low-cost semi-autonomous sorter would significantly improve efficiency.",
      status: "Prototype",
      skills: ["Robotics", "Computer Vision", "ROS", "Embedded Systems"],
      seeking: "Computer vision specialist and mechanical design support",
      lastUpdated: "Oct 2026"
    },
    {
      id: "CP006",
      club: "Code Chefs",
      lead: "Preethi Kannan (2nd Year, CSE)",
      title: "Competitive Programming Visualiser",
      problem: "Students learning DSA struggle to visualise algorithm execution, limiting conceptual understanding.",
      status: "Active",
      skills: ["JavaScript", "React", "Algorithm Design"],
      seeking: "React developer with animation experience",
      lastUpdated: "Sep 2026"
    }
  ],

  challenges: [
    {
      id: "IC001",
      org: "Bharat Forge Limited",
      orgIcon: "🔩",
      title: "Predictive Maintenance for CNC Machining",
      domain: "Manufacturing / AI",
      description: "Develop an ML-based system that predicts tool wear in CNC machining operations using vibration and acoustic data, reducing unplanned downtime.",
      skills: ["Machine Learning", "Signal Processing", "Manufacturing Knowledge"],
      deliverable: "Working prototype with prediction accuracy above 85%",
      engagement: "Research Collaboration",
      deadline: "Dec 2026",
      status: "Receiving proposals"
    },
    {
      id: "IC002",
      org: "Tamil Nadu Water Supply & Drainage Board",
      orgIcon: "💧",
      title: "Pipeline Leak Detection System",
      domain: "Infrastructure / Sensors",
      description: "Design a cost-effective acoustic sensor-based system for detecting and localising leaks in underground water distribution pipelines in urban areas.",
      skills: ["Acoustics", "Embedded Systems", "Signal Processing"],
      deliverable: "Prototype capable of 90% detection accuracy",
      engagement: "Pilot Project",
      deadline: "Jan 2027",
      status: "Published"
    },
    {
      id: "IC003",
      org: "SolarSquare Energy",
      orgIcon: "☀️",
      title: "Rooftop Solar Yield Prediction",
      domain: "Renewable Energy / Data Science",
      description: "Build a model that predicts daily and weekly solar energy yield for residential rooftop installations based on weather data, orientation, and panel specs.",
      skills: ["Data Science", "Python", "Solar Energy Domain Knowledge"],
      deliverable: "Prediction model with API endpoint",
      engagement: "Internship + Licensing",
      deadline: "Nov 2026",
      status: "In discussion"
    },
    {
      id: "IC004",
      org: "Cognizant Technology Solutions",
      orgIcon: "🖥️",
      title: "Accessible UI Components for Low-Literacy Users",
      domain: "HCI / Accessibility",
      description: "Design and build a library of mobile UI components optimised for users with limited literacy, incorporating voice, iconography, and regional language support.",
      skills: ["UX Design", "Frontend Dev", "Accessibility", "Tamil Language"],
      deliverable: "Open-source component library with documentation",
      engagement: "Project Collaboration",
      deadline: "Feb 2027",
      status: "Published"
    }
  ],

  mentors: [
    {
      id: "M001",
      name: "Vikram Nair",
      role: "Founder & CEO",
      company: "AgriSense Technologies",
      batch: "NITT 2014, ECE",
      domains: ["AgriTech", "IoT", "Hardware Startups"],
      expertise: ["Fundraising", "Product-Market Fit", "Team Building"],
      engagement: ["1:1 Mentoring", "Pitch Review"],
      available: true
    },
    {
      id: "M002",
      name: "Deepa Shanmugam",
      role: "Partner",
      company: "Stellaris Venture Partners",
      batch: "NITT 2010, CSE",
      domains: ["Deep Tech", "SaaS", "FinTech"],
      expertise: ["Investment", "Due Diligence", "Go-to-Market"],
      engagement: ["Pitch Evaluation", "Office Hours"],
      available: true
    },
    {
      id: "M003",
      name: "Arjun Ramesh",
      role: "Director of Engineering",
      company: "Zoho Corporation",
      batch: "NITT 2008, IT",
      domains: ["SaaS", "Enterprise Software", "Scaling"],
      expertise: ["Technical Architecture", "Team Scaling", "Product Development"],
      engagement: ["Technical Reviews", "Career Mentoring"],
      available: false
    },
    {
      id: "M004",
      name: "Meera Krishnan",
      role: "Chief Innovation Officer",
      company: "TVS Group",
      batch: "NITT 2005, Mech",
      domains: ["Manufacturing", "EV", "Sustainability"],
      expertise: ["Industry Partnerships", "IP Strategy", "Corporate Innovation"],
      engagement: ["Industry Connect", "1:1 Mentoring"],
      available: true
    },
    {
      id: "M005",
      name: "Sanjay Balaji",
      role: "Co-founder",
      company: "HealthPulse AI",
      batch: "NITT 2016, BME",
      domains: ["HealthTech", "AI/ML", "MedDevices"],
      expertise: ["Clinical Validation", "Regulatory", "Product Design"],
      engagement: ["1:1 Mentoring", "Technical Review"],
      available: true
    },
    {
      id: "M006",
      name: "Priya Venkataraman",
      role: "Head of Legal & IP",
      company: "L&T Technology Services",
      batch: "NITT 2006, Civil + Law",
      domains: ["IP Law", "Contracts", "Compliance"],
      expertise: ["Patent Filing", "IP Strategy", "Startup Legal"],
      engagement: ["IP Guidance", "Legal Office Hours"],
      available: true
    }
  ],

  startups: [
    {
      id: "ST001",
      name: "AquaGuard Systems",
      domain: "CleanTech / Water",
      product: "IoT-based water quality monitoring for municipalities",
      stage: "Seed Funded",
      icon: "💧",
      founded: "2024",
      founders: "Alumni — NITT 2022"
    },
    {
      id: "ST002",
      name: "FarmTrace",
      domain: "AgriTech",
      product: "Supply chain traceability platform for organic produce",
      stage: "Revenue Stage",
      icon: "🌾",
      founded: "2023",
      founders: "Alumni — NITT 2020"
    },
    {
      id: "ST003",
      name: "NeuralPath EdTech",
      domain: "EdTech / AI",
      product: "Adaptive learning platform powered by personalised AI tutoring",
      stage: "Pre-Seed",
      icon: "🧠",
      founded: "2025",
      founders: "Current Students — NITT 2026"
    },
    {
      id: "ST004",
      name: "GreenShift Materials",
      domain: "Materials / Sustainability",
      product: "Biodegradable packaging films from agricultural waste",
      stage: "Grant Funded",
      icon: "🌿",
      founded: "2024",
      founders: "Faculty Spin-off"
    },
    {
      id: "ST005",
      name: "UrbanMover",
      domain: "Mobility / EV",
      product: "Micro-EV fleet management for last-mile campus delivery",
      stage: "Pilot",
      icon: "⚡",
      founded: "2025",
      founders: "Alumni — NITT 2021"
    },
    {
      id: "ST006",
      name: "DocuBot Legal",
      domain: "LegalTech / NLP",
      product: "AI-powered legal document analysis for Tamil courts",
      stage: "Beta",
      icon: "⚖️",
      founded: "2025",
      founders: "Alumni — NITT 2023"
    }
  ],

  fundingSchemes: [
    {
      id: "FS001",
      name: "NIDHI Prayas",
      org: "DST / National Science & Technology Entrepreneurship Development Board",
      purpose: "Proof-of-concept support for early-stage deep-tech ideas",
      stage: ["Idea", "Validation"],
      type: "Grant",
      amount: "Up to ₹10 Lakhs",
      eligibility: "Students, faculty, researchers at NSTEDB partner institutions",
      status: "Open",
      deadline: "Rolling"
    },
    {
      id: "FS002",
      name: "Startup India Seed Fund Scheme (SISFS)",
      org: "DPIIT, Government of India",
      purpose: "Seed funding for product development, trials, and market entry",
      stage: ["Prototype", "Pilot"],
      type: "Seed Grant",
      amount: "Up to ₹20 Lakhs (grant) + ₹50 Lakhs (investment)",
      eligibility: "DPIIT-recognised startups via SISFS-approved incubators",
      status: "Open",
      deadline: "Quarterly batches"
    },
    {
      id: "FS003",
      name: "TIDE 2.0",
      org: "Ministry of Electronics and IT (MeitY)",
      purpose: "Support for ICT-based startups, including AI, IoT, and cybersecurity",
      stage: ["Prototype", "Pilot", "Early Venture"],
      type: "Grant",
      amount: "Up to ₹75 Lakhs",
      eligibility: "Tech startups incubated at MeitY-supported TBI centres",
      status: "Open",
      deadline: "Rolling via incubators"
    },
    {
      id: "FS004",
      name: "NITT Director's Discretionary Fund",
      org: "NIT Trichy (Internal)",
      purpose: "Seed support for student and faculty innovation projects",
      stage: ["Idea", "Prototype"],
      type: "Institutional Grant",
      amount: "Up to ₹2 Lakhs",
      eligibility: "Current NITT students and faculty with approved project proposal",
      status: "Open",
      deadline: "Semester-wise"
    },
    {
      id: "FS005",
      name: "iCreate — Gujarat Innovation & Technology Grant",
      org: "iCreate, Ahmedabad",
      purpose: "Deep tech innovation grants across hardware, AI, robotics, and clean energy",
      stage: ["Prototype", "Pilot"],
      type: "Grant + Incubation",
      amount: "Up to ₹25 Lakhs",
      eligibility: "Pan-India startups and student teams at selected institutions",
      status: "Closed",
      deadline: "Applications closed — next batch TBA"
    },
    {
      id: "FS006",
      name: "TN Startup & Innovation Policy — Edupreneurship Fund",
      org: "TANSIM / Government of Tamil Nadu",
      purpose: "Support for Tamil Nadu-based startups in education, health, and livelihoods",
      stage: ["Validation", "Pilot", "Early Venture"],
      type: "Seed Grant",
      amount: "Up to ₹15 Lakhs",
      eligibility: "Startups registered in Tamil Nadu with a focus on social impact",
      status: "Open",
      deadline: "Jan 2027"
    }
  ],

  facilities: [
    {
      id: "FAC001",
      name: "SCIEnT Prototyping Lab",
      unit: "SCIEnT — Student Centre for Innovation and Entrepreneurship",
      icon: "🔧",
      summary: "Full-service prototyping facility with 3D printers, laser cutters, electronics workstations, and PCB fabrication tools.",
      equipment: ["FDM 3D Printer (×4)", "Resin 3D Printer", "Laser Cutter", "CNC Router", "Electronics Bench", "Oscilloscopes", "PCB Prototyper"],
      eligibility: "All NITT students and faculty with an approved project",
      charges: "Nominal material cost; equipment usage free for approved projects",
      availability: "Mon–Sat, 9 AM – 6 PM"
    },
    {
      id: "FAC002",
      name: "High Performance Computing Cluster",
      unit: "Department of Computer Science & Engineering",
      icon: "💻",
      summary: "GPU-equipped HPC cluster for machine learning, simulation, and large-scale data processing workloads.",
      equipment: ["NVIDIA A100 GPUs (×8)", "64-core CPU nodes", "1 PB Storage", "InfiniBand Interconnect"],
      eligibility: "Faculty-led projects; students under faculty supervision",
      charges: "Free for approved academic projects; priority allocation required",
      availability: "24×7 with scheduling"
    },
    {
      id: "FAC003",
      name: "Centre for Nanotechnology — Clean Room",
      unit: "Centre for Nanotechnology",
      icon: "🔬",
      summary: "Class 1000/100 clean room facility for nanofabrication, thin film deposition, and semiconductor characterisation.",
      equipment: ["E-beam Evaporator", "Spin Coater", "Photolithography Unit", "SEM", "AFM"],
      eligibility: "Faculty and PG researchers; UG students under direct supervision",
      charges: "Usage charges apply; refer to official tariff sheet",
      availability: "By appointment; induction training mandatory"
    },
    {
      id: "FAC004",
      name: "Design Thinking Studio",
      unit: "FIRE / SCIEnT",
      icon: "🎨",
      summary: "Collaborative workspace for user research, ideation sessions, wireframing, and design sprints. Equipped with whiteboards, modular furniture, and AV tools.",
      equipment: ["Interactive Whiteboards (×3)", "A3 Laser Printer", "Video Conferencing", "Prototype Kits"],
      eligibility: "All NITT students, clubs, and faculty teams",
      charges: "Free for booked sessions",
      availability: "Mon–Fri, 8 AM – 8 PM"
    },
    {
      id: "FAC005",
      name: "Biomedical Research Laboratory",
      unit: "Department of Biotechnology",
      icon: "🧬",
      summary: "Wet lab facility for cell culture, biochemical assays, biosensor development, and biomaterial testing.",
      equipment: ["Cell Culture Hood", "Centrifuges", "PCR Machine", "ELISA Reader", "Confocal Microscope"],
      eligibility: "Faculty and PG researchers; UG under supervision",
      charges: "Consumable costs billed to project budget",
      availability: "Mon–Sat with safety induction required"
    },
    {
      id: "FAC006",
      name: "Renewable Energy Test Bed",
      unit: "Centre for Energy and Environment",
      icon: "⚡",
      summary: "Outdoor and indoor testing facility for solar panels, wind energy components, battery systems, and energy storage prototypes.",
      equipment: ["Solar Simulator", "Battery Analyser", "Grid Simulator", "Data Acquisition System"],
      eligibility: "Faculty, PG students, and innovation project teams",
      charges: "Free for approved projects; large-scale tests billed",
      availability: "Mon–Fri, 9 AM – 5 PM"
    }
  ],

  events: [
    {
      id: "EV001",
      title: "FIRE Founder Orientation 2026",
      type: "Orientation",
      icon: "🚀",
      date: "Nov 10, 2026",
      time: "10:00 AM – 1:00 PM",
      venue: "Open Air Theatre, NITT",
      desc: "Kickoff session for new founders — understand the FIRE ecosystem, available support, and the road from idea to venture.",
      registration: "Open",
      audience: "All NITT students and faculty"
    },
    {
      id: "EV002",
      title: "Deep Tech Pitch Day — Autumn 2026",
      type: "Pitch Event",
      icon: "🎤",
      date: "Nov 28, 2026",
      time: "9:00 AM – 6:00 PM",
      venue: "SAC Main Hall, NITT",
      desc: "Selected deep-tech teams pitch to a panel of investors, alumni, and industry partners. 12 teams shortlisted from 80+ applications.",
      registration: "Closed — Shortlisted teams only",
      audience: "Selected teams + Invited audience"
    },
    {
      id: "EV003",
      title: "Idea Clinic — Healthcare & MedTech",
      type: "Workshop",
      icon: "🩺",
      date: "Nov 15, 2026",
      time: "3:00 PM – 6:00 PM",
      venue: "Biotech Seminar Hall",
      desc: "Focused 3-hour clinic for healthcare-domain ideas. Expert mentors provide structured feedback on problem framing and validation approaches.",
      registration: "Open",
      audience: "Students and faculty with healthcare ideas"
    },
    {
      id: "EV004",
      title: "Club Project Showcase 2026",
      type: "Showcase",
      icon: "🏆",
      date: "Dec 5, 2026",
      time: "10:00 AM – 5:00 PM",
      venue: "Central Library Foyer + Lawns",
      desc: "Annual showcase of club-led projects. Participate as a club, attend as a visitor, or engage as a mentor/investor seeking collaborations.",
      registration: "Open",
      audience: "All NITT + External guests"
    },
    {
      id: "EV005",
      title: "Government Funding Schemes — Workshop",
      type: "Workshop",
      icon: "💰",
      date: "Nov 20, 2026",
      time: "2:00 PM – 5:00 PM",
      venue: "Online (Zoom)",
      desc: "Step-by-step walkthrough of DST-NIDHI, SISFS, and TN State schemes — eligibility, documentation, and application strategy.",
      registration: "Open",
      audience: "Students, faculty, and early-stage founders"
    },
    {
      id: "EV006",
      title: "Post-SIH Continuation Programme — Cohort 2",
      type: "Programme",
      icon: "🔁",
      date: "Dec 1, 2026",
      time: "9:00 AM – 12:00 PM",
      venue: "SCIEnT Lab + Design Studio",
      desc: "Structured 6-week continuation support for SIH 2026 teams. Facility access, mentoring, and incubation review pathway.",
      registration: "Application-based",
      audience: "SIH 2026 teams from NITT"
    }
  ],

  processes: [
    {
      id: "PR001",
      title: "Faculty Research Project — Student Participation",
      category: "Student Project Participation",
      icon: "👩‍🏫",
      who: "Registered NITT students (UG/PG)",
      steps: ["Browse faculty project listings on FIRE", "Submit expression of interest form", "Faculty lead reviews and responds within 5–7 working days", "If accepted, join the project team and sign participation agreement", "Faculty supervisor updates project membership on FIRE"],
      authority: "Faculty Project Lead",
      timeline: "5–10 working days from EOI submission",
      owner: "FIRE Operations"
    },
    {
      id: "PR002",
      title: "SCIEnT Facility Access — Standard Request",
      category: "Facility Access",
      icon: "🔧",
      who: "All NITT students and faculty with an approved project",
      steps: ["Identify required facility and equipment on FIRE", "Check eligibility and mandatory safety training requirements", "Submit facility access request form via FIRE or SCIEnT office", "SCIEnT coordinator reviews and approves or schedules induction", "Access credential or booking confirmation issued", "Complete usage log after each session"],
      authority: "SCIEnT Facility Coordinator",
      timeline: "2–5 working days",
      owner: "SCIEnT Office"
    },
    {
      id: "PR003",
      title: "Idea Submission and Initial Assessment",
      category: "Idea Submission",
      icon: "💡",
      who: "Any NITT student, faculty member, or registered alumni",
      steps: ["Complete the FIRE Idea Intake Form", "System assigns a unique Request ID and sends confirmation", "FIRE ops team reviews submission within 3 working days", "Applicant receives recommended support route and next steps", "Relevant referrals initiated (mentor, facility, programme)"],
      authority: "FIRE Operations Team",
      timeline: "3–5 working days for initial review",
      owner: "FIRE Operations"
    },
    {
      id: "PR004",
      title: "IP and Patent Assessment Referral",
      category: "IP and Legal",
      icon: "⚖️",
      who: "Students, faculty, or researchers with potentially patentable innovations",
      steps: ["Complete IP referral checklist on FIRE", "FIRE routes referral to NITT IPR Cell", "IPR Cell conducts prior art and patentability assessment", "Inventor receives assessment report and recommended next steps", "Proceed with provisional or full patent filing if advised"],
      authority: "NITT IPR Cell",
      timeline: "Varies — typically 2–6 weeks for initial assessment",
      owner: "NITT IPR Cell"
    },
    {
      id: "PR005",
      title: "Mentorship Request",
      category: "Faculty and Mentor Engagement",
      icon: "🤝",
      who: "Students or founders seeking domain expertise or guidance",
      steps: ["Search mentor directory by domain and expertise", "Submit mentorship request describing your need and goal", "FIRE notifies the mentor of the request", "Mentor accepts, declines or suggests an alternative within 5 days", "First session scheduled through FIRE Connect"],
      authority: "Mentor (decision on acceptance)",
      timeline: "Mentor response within 5 working days",
      owner: "FIRE Operations"
    },
    {
      id: "PR006",
      title: "Club Project — Publication Request",
      category: "Club Project Listing",
      icon: "📋",
      who: "Authorised club administrators",
      steps: ["Log in to My FIRE as Club Admin", "Create a new project listing with all required fields", "Faculty coordinator reviews and endorses the listing", "FIRE moderator checks content and approves for publication", "Project appears in the public Explore directory"],
      authority: "Faculty Coordinator + FIRE Moderator",
      timeline: "3–5 working days",
      owner: "FIRE Moderation Team"
    }
  ]
};

// Make available globally
if (typeof window !== 'undefined') {
  window.FIRE_DATA = FIRE_DATA;
}
