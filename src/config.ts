export const siteConfig = {
  name: "Sahil Sinha",
  title: "Web Developer",
  description: "Portfolio website of Sahil Sinha",
  accentColor: "#1d4ed8",
  social: {
    email: "sahilsinhahasmail@example.com",
    linkedin: "https://www.linkedin.com/in/sahil-sinha-582995114",
    github: "https://github.com/sahilsinhacodes",
  },
  aboutMe:
    "I specialize in full-stack development with a deep proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js). My passion lies in building scalable ",
  skills: ["Javascript", "React", "Node.js", "Python", "MondoDB", "Next.js"],
  projects: [
    {
      name: "Cloud Vault: Your one stop storage solution",
      description:
        "Built a secure, full-stack cloud storage web app using the Next.js App Router, Server Actions, and Tailwind CSS",
      link: "https://cloudvault-ashen.vercel.app",
      skills: ["Next.js", "Tailwind CSS", "Recharts"],
    },
    {
      name: "SkillHatch: Job Finder",
      description:
        "Developed a full-fledged job marketplace enabling sellers to post gigs and buyers to hire talent",
      link: "https://skillhatch-client-new.vercel.app",
      skills: ["React", "Node.js", "MongoDB","Stripe"],
    },
    {
      name: "Game Hub",
      description:
        "Designed and deployed a responsive video game discovery platform. Integrated the RAWG API for real-time data fetching, allowing users to explore games, platforms, and availability.",
      link: "https://game-hub-ruby-two.vercel.app",
      skills: ["React", "Node.js", "Prisma","Chakra UI"],
    },
  ],
  experience: [
    {
      company: "Labmentix",
      title: "Web Developer",
      dateRange: "May 2025 - Present",
      bullets: [
        "Engineered and maintained large-scale frontend applications using the MERN stack",
        "Leveraged MongoDB for data and metadata interaction, ensuring scalable data governance",
        "Applied strong problem-solving and debugging skills to enhance stability, optimize performance",
      ],
    }

  ],
  education: [
    {
      school: "Bhilai Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2022- Present",
    },
    {
      school: "Free Code Camp",
      degree: "JavaScript Data Structures and Algorithms Certificate",
      dateRange: "2024",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 4+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
