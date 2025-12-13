export const resumeData = {
  name: "Cheng Pin-Jie",
  title: "Application Developer",
  about: [
    "Welcome to my portfolio! I am Cheng Pin-Jie, a passionate Software Developer specializing in innovative AI applications, LLM integration (RAG), UI/UX design, Mobile Development, and Full-Stack Web Applications.",
    "I utilize a wide array of Frontend and Backend frameworks and tools to achieve project goals, including OutSystems, Flask, LangChain, Expo, React Native, Flutter etc.",
    "I am experienced in managing databases across MySQL, Azure Cloud, MongoDB, and Firebase. I am also adept at integrating REST APIs into application development and performing crucial data handling, including cleaning, parsing, processing, and visualization using Power BI."
  ],
  contact: {
    email: "chengpinjie03@gmail.com",
    phone: "+6011 1543 2468",
    github: "https://github.com/CPJ03",
    linkedin: "https://www.linkedin.com/in/chengpinjie/",
    CV: "https://docs.google.com/document/d/1efmMMQrI6ZNuMHAP7jAMVInBZkcAeQED/edit?usp=sharing&ouid=114826231793659609013&rtpof=true&sd=true",
  },
  skills: [
    // Front-end
    "HTML", "CSS", "JavaScript", "Dart", "Tailwind CSS",
    // Back-end
    "MySQL", "Azure", "REST API", "Firebase", "MongoDB", "JSON",
    // Frameworks
    "Flutter", "React Native", "Expo", "React.js", "FastAPI", "OpenCV", "Django", "Flask", "OpenRouter", "Docker", "Ultralytics", "GIT",
    // Data Processing
    "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "YoloV8", "LlamaParse", "LangChain",
    // Creative
    "Figma", "Davinci Resolve", "Adobe Premiere", "Adobe Illustrator", "Adobe Photoshop", "Capcut", "Canva"
  ],
  experience: [
    {
      company: "PETRONAS Technical Services Sdn Bhd",
      logo: "/assets/projects/petronas-logo-white.png",
      role: "Software Intern, Full Time",
      location: "KLCC Tower 3",
      period: "Jan - Aug 2024",
      description: `
    • Experience developing enterprise-grade web applications with a focus on scalability and maintainability.
    • Built enterprise applications and custom agents using OutSystems, incorporating HTML, CSS, and JavaScript within a full SDLC governance framework.
    • Aided business transformation by converting processes into digitized documents through Python-based workflows and data-processing pipelines.
    • Collaborated closely with subject matter experts, engineers, and management teams during business trips and strategic meetings to align on project direction and organizational goals.
    • Managed and maintained databases across MySQL, Azure Cloud, and MongoDB, ensuring data integrity, availability, and efficient system performance.
    • Performed data cleaning, parsing, processing, and visualization using Microsoft Excel and Power BI to support analysis and decision-making.
    `,
      reference: "https://drive.google.com/file/d/16_CI91GEb0fCGop4zDn1pkJOtDmwJUfh/view?usp=sharing",
      images: [
        "/assets/projects/Intern/photo1.jpg",
        "/assets/projects/Intern/photo2.jpg",
        "/assets/projects/Intern/photo3.jpg"
      ]
    }
  ],
  projects: [
    {
      title: "Intact",
      description: "Built a cross-platform React Native app featuring real-time location tracking, permission handling, and persistent map regions. Integrated Google Maps API with interactive markers, animated transitions, and POI interaction. Developed location-based event reporting with special routing to steer users away from flagged danger zones.",
      technologies: ["React Native", "Google Maps API", "Firebase"],
      figma_link: "https://www.figma.com/design/lerCPXvHcMeY1ap3mBdSKX/Intact-App?node-id=0-1&t=TwoKcLgWkcRIKVqg-1",
      github_link:"https://github.com/CPJ03/intact_ref",
      images: ["/assets/projects/intact.png"]
    },
    {
      title: "SARV",
      description: "Led a group of 4 members in prototype design and UI/UX development. Defined user journey and mapped customer flows. Collaborated on business plan and contributed technical insights to financial models and growth strategies. Bridged tech and strategy by translating business requirements into technical feasibility.",
      technologies: ["UI/UX", "Prototype Design", "Business Strategy"],
      figma_link: "https://www.figma.com/design/tqM47xCRLwQJbb2ouCyAES/TTP-SARV?node-id=0-1&t=vUWUa7s7zqk9W6Tq-1",
      paper_link:"https://drive.google.com/file/d/1xXQ1LugKCVzgNaTmmcg7Soaz19ZranId/view?usp=sharing",
      images: ["/assets/projects/sarv.png"]
    },
    {
      title: "Merlina AI",
      description: "Created a Gradio-based web interface (PWA) for user-friendly interaction. Developed Merlina AI, a Retrieval-Augmented Generation (RAG) chatbot for engineering documentation. Processed unstructured PDFs using LlamaParse, LangChain, and GPT4AllEmbeddings for semantic search.",
      technologies: ["Python","RAG", "Gradio", "LlamaParse", "LangChain", ],
      technical_paper_link: "https://drive.google.com/file/d/1sthP3MwRzOjK6HQr5AqXX2tRY-Nrr3DM/view?usp=sharing",
      images: ["/assets/projects/merlina ai.png"]
    },
    {
      title: "Car Buddy",
      description: "Structured wireframes to establish the foundation and flow of the design. Developed interactive prototypes using Figma to visualize and test user experiences. Collaborated with fellow designers to refine concepts and ensure design consistency.",
      technologies: ["Wireframe", "UI/UX Design", "Prototyping"],
      figma_link: "https://www.figma.com/design/0ckx5MgOvKSXKUTMbWAdBO/CarBuddy?t=vCIZIIwIkyu8Wlmd-1",
      images: ["/assets/projects/car buddy.png"]
    },
    {
      title: "Bus Track",
      description: "1st Runner Up of Syntech Hackathon 2023. Designed and developed a cross-platform app in Flutter with clean, consistent, and responsive UI. Created user-centered UI for students and drivers. Implemented schedules and ETA features with clear visual cues.",
      technologies: ["Flutter", "API", "UI/UX"],
      figma_link: "https://www.figma.com/design/9ovxkz6TElIOTNbAcCE9a3/Bus-Tracking?node-id=0-1&t=vCIZIIwIkyu8Wlmd-1",
      github_link:"https://github.com/CPJ03/Bus-Tracker",
      images: ["/assets/projects/bus track.png"]
    },
    {
      title: "Mix-Food Price Prediction",
      description: "Developed a computer vision model to estimate food prices based on detected food composition. Implemented food portion detection on round-plate images using YOLOv8 and custom-trained datasets. Conducted model development using Jupyter Notebook.",
      technologies: ["YOLOv8", "Computer Vision", "Python", "Jupyter"],
      github_link: "https://github.com/CPJ03/mix-food-price-prediction",
      images: ["/assets/projects/mix food rive.png"]
    },
    {
      title:"Cable Lifespan Prediction",
      description: "The calculator is a reactive web-based that was built using Outsystems framework, combine with JavaScript (HighChart JS) and CSS.The calculator helps organization like PETRONAS to make estimations for the turnaround process of cable to be done Onshore/Offshore.",
      technologies: ["Petronas","OutSystems", "JavaScript", "CSS"],
      linkedin_link:"https://www.linkedin.com/in/chengpinjie/details/projects/#:~:text=Other%20contributors-,Cable%20Lifespan%20Calculator,-Cable%20Lifespan%20Calculator",
      images: ["/assets/projects/cable lifespan.jpg"]
    },
    {
      title:"Control Valve Database",
      description:"An OutSystems web that allows database management of control valve inspection records. Implemented advanced search and filtering capabilities to quickly locate specific records based on various criteria. Developed user-friendly interfaces for data entry, editing, and deletion, ensuring data integrity and consistency.",
      technologies: ["Petronas","OutSystems", "Azure", "MySQL"],
      paper_link:"https://drive.google.com/file/d/1Mui74WWyaxG766NCej23cTq6HU_ui8V2/view?usp=sharing",
      figma_link:"https://docs.google.com/presentation/d/1WfyF0WZWI9mZk-Jw_WY7_JRjwTRsCP2C/edit?usp=sharing&ouid=114826231793659609013&rtpof=true&sd=true",
      images: ["/assets/projects/Control Valve Database.png"]
    },
    {
      title: "Shopbot API",
      description: "A public API endpoint which takes in string message question parameter and connect to openAI for response.",
      technologies: ["FastAPI", "Python", "REST API", "Docker"],
      github_link:"https://github.com/CPJ03/ShopBot",
      images: ["/assets/projects/shopbot.png"]
    },
    {
      title:"Web Scraping",
      description: "A web scraping method to extract all the links from a given webpage.",
      technologies: ["HTML", "Web Scraping"],
      github_link:"https://github.com/CPJ03/download-all-links-from-a-page",
      images: ["/assets/projects/web%20scraping.png"]
    },
    {
      title:"Personal Portfolio",
      description:"A next.js website for my personal portfolio.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github_link:"https://github.com/CPJ03/chengpinjie",
      images: ["/assets/projects/personal Web.png"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Science (Hons) First Class",
      school: "Universiti Teknologi PETRONAS",
      location: "Seri Iskandar, Perak",
      year: "Sept 2025",
      cgpa: "3.71/4.00"
    }
  ],
  certifications: [
    {
      title: "Bachelor of Computer Science (Hons) First Class",
      issuer: "Universiti Teknologi PETRONAS",
      date: "Oct 2025",
      credentialId: "140000147"
    },
    {
      title: "Advanced Open Water Diver",
      issuer: "TDI SDI Scuba Diving International",
      date: "Aug 2024",
      credentialId: "1608408"
    }
  ],
  techStacks: {
    "SOFTWARE DEVELOPER": [
      { name: "Python", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/python.png" },
      { name: "Next.js", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/Next.png" },
      { name: "React Native", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/react-native.png" },
      { name: "Flutter", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/flutter.png" },
      { name: "HTML/CSS/JS", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/html css javascript.png" },
      { name: "TypeScript", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/typescript.png" },
      { name: "FastAPI", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/fastapi.png" },
      { name: "Django", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/django.png" },
      { name: "MySQL", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/mysql.png" },
      { name: "MongoDB", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/mongodb.png" },
      { name: "Firebase", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/Firebase.png" },
      { name: "Azure", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/azure.png" },
      { name: "Docker", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/Docker_Logo.png" },
      { name: "Expo", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/expo.png" },
      { name: "Figma", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/FIgma.png" },
      { name: "OpenCV", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/opencv.png" },
      { name: "TensorFlow", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/tensorflow_logo.png" },
      { name: "YOLOv8", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/Ultralytics.png" },
      { name: "Gradio", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/gradio.png" },
      { name: "LangChain", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/LangChain.png" },
      { name: "OpenRouter", logo: "/assets/projects/Tech Stacks/SOFTWARE DEVELOPER/OpenRouter.png" }
    ]
  },
};
