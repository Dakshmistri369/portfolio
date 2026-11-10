export const config = {
    developer: {
        name: "Daksh",
        fullName: "Daksh Mistri",
        title: "Software Developer",
        phone: "+91 9510902912",
        email: "dakshmistrii369@gmail.com",
        location: "Mehsana, Gujarat, India",
        description: "Software Developer with hands-on experience across full-stack web development, backend architecture, and applied machine learning. Skilled in JavaScript, TypeScript, Python, C#, and the .NET ecosystem, with project experience building AI-powered security tooling, Retrieval-Augmented Generation (RAG) systems, multilingual NLP pipelines, and voice-enabled AI applications alongside REST APIs, microservices, and cloud-based deployments."
    },
    social: {
        github: "https://github.com/Dakshmistri369",
        githubUsername: "Dakshmistri369",
        linkedin: "https://linkedin.com/in/daksh-mistri",
        email: "dakshmistrii369@gmail.com",
        phone: "+91 9510902912",
        location: "Mehsana, Gujarat, India"
    },
    about: {
        title: "About Me",
        description: "Software Developer with hands-on experience across full-stack web development, backend architecture, and applied machine learning. Skilled in JavaScript, TypeScript, Python, C#, and the .NET ecosystem, with project experience building AI-powered security tooling, Retrieval-Augmented Generation (RAG) systems, multilingual NLP pipelines, and voice-enabled AI applications alongside REST APIs, microservices, and cloud-based deployments (Supabase, Firebase, AWS, Azure). Writes clean, maintainable code following SOLID principles and Agile practices, with a strong record of hackathon participation and rapid prototyping."
    },
    experiences: [
        {
            position: "Software Developer & AI Engineer",
            company: "Engineering & Applied Projects",
            period: "2024 - Present",
            location: "Mehsana, Gujarat, India",
            description: "Architecting full-stack web applications, backend microservices, and applied AI systems. Built AgentGuard AI (security scanning platform with Semgrep, Bandit, OSV, and NVIDIA Nemotron) and a bilingual voice-first RAG agricultural platform.",
            responsibilities: [
                "Developing full-stack web platforms using React, TypeScript, and modern frontend frameworks",
                "Designing high-performance backend APIs with FastAPI, Node.js, and ASP.NET Core",
                "Building RAG pipelines with Whisper speech-to-text, vector search (Supabase pgvector), and LLMs",
                "Deploying cloud infrastructures across Supabase, Firebase, AWS, and Vercel following SOLID principles"
            ],
            technologies: ["TypeScript", "Python", "React", "FastAPI", "C#", ".NET", "Supabase", "Redis"]
        },
        {
            position: "Hackathon Finalist — New India Vibrant Hackathon",
            company: "PDEU, Gandhinagar",
            period: "2023",
            location: "Gujarat, India",
            description: "Finalist at the Grand Finale of New India Vibrant Hackathon 2023, a prestigious state-level technical innovation competition at Pandit Deendayal Energy University.",
            responsibilities: [
                "Prototyped innovative technology solutions under intense competitive timelines",
                "Collaborated with cross-functional engineering teams under Agile methods",
                "Demonstrated live working software and defended system architecture before industry judges"
            ],
            technologies: ["Rapid Prototyping", "Full-Stack Development", "Agile", "Problem Solving"]
        },
        {
            position: "Competitive Hackathons (Odoo Combat & SPU Hack)",
            company: "Odoo & Sankalchand Patel University",
            period: "2024",
            location: "Gujarat, India",
            description: "Competed in Odoo Combat 2024 (24-hour sprint on rapid prototyping) and SPU Hack for Tomorrow 1.0 (10-hour innovation hackathon by CRI and SPCE).",
            responsibilities: [
                "Engineered functional end-to-end applications within 10-24 hour sprints",
                "Implemented clean database schemas, responsive UI, and secure API contracts",
                "Applied SOLID design principles for high-velocity software delivery"
            ],
            technologies: ["Python", "JavaScript", "React", "REST APIs", "Team Collaboration"]
        },
        {
            position: "B.Tech in Computer Engineering",
            company: "Sankalchand Patel University",
            period: "2023 - 2027",
            location: "Mehsana, Gujarat",
            description: "Undergraduate degree in Computer Engineering with extensive coursework in Data Structures, DBMS, Operating Systems, Web Technologies, Computer Networks, and Software Architecture.",
            responsibilities: [
                "Mastered fundamental algorithms, data structures, and object-oriented architecture",
                "Conducted hands-on database management, normalization, and relational schema optimization",
                "Active participant in collegiate hackathons, technical symposiums, and coding competitions"
            ],
            technologies: ["Data Structures", "DBMS", "Operating Systems", "Computer Networks", "Software Architecture"]
        },
        {
            position: "12th Standard (Science)",
            company: "Gujarat Board",
            period: "2023",
            location: "Mehsana, Gujarat",
            description: "Completed higher secondary education in the Science stream with a rigorous foundation in mathematics, analytical reasoning, and computer sciences.",
            responsibilities: [
                "Excelled in mathematical analysis, logical deduction, and foundational computing"
            ],
            technologies: ["Mathematics", "Physics", "Computer Science"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "AgentGuard AI",
            category: "AI / Repository Security Scanner",
            technologies: "React, TypeScript, FastAPI, Supabase, Semgrep, Bandit, OSV, NVIDIA Nemotron, Redis, Arq",
            image: "/images/agentguard.png",
            description: "Full-stack repository security platform that scans GitHub repositories for vulnerabilities, dependency risks, and exposed secrets using Semgrep, Bandit, and OSV. Integrated NVIDIA Nemotron for AI-assisted vulnerability explanations and remediation suggestions, with Redis and Arq for asynchronous background scanning and persistent scan history.",
            link: "https://agentguard-alpha-teal.vercel.app"
        },
        {
            id: 2,
            title: "Voice Agricultural Advisory (Gujarati)",
            category: "Bilingual Voice-First RAG Platform",
            technologies: "Python, Streamlit, LangChain, Whisper, Supabase (pgvector), PyTorch, Pandas, Hugging Face",
            image: "/images/voice_advisory.png",
            description: "Bilingual, voice-first Retrieval-Augmented Generation (RAG) platform that lets Gujarati-speaking farmers query government schemes, live mandi prices, weather forecasts, and crop advisories by voice or text. Features an 8-stage voice and text pipeline combining Whisper STT, LLM reasoning (Qwen2.5 / Llama-3.1), and multi-tier Gujarati TTS (Piper ONNX, Meta MMS, gTTS) with Supabase pgvector.",
            link: "https://github.com/Dakshmistri369"
        }
    ],
    contact: {
        email: "dakshmistrii369@gmail.com",
        phone: "+91 9510902912",
        github: "https://github.com/Dakshmistri369",
        linkedin: "https://linkedin.com/in/daksh-mistri",
        location: "Mehsana, Gujarat, India"
    },
    skills: {
        develop: {
            title: "LANGUAGES & FRONTEND",
            description: "Modern web development, responsive interfaces & 3D graphics",
            details: "Skilled in JavaScript, TypeScript, Python, C#, and Java. Building interactive, responsive web applications using React.js, Vue.js, HTML5, CSS3, Three.js, GSAP, and Bootstrap.",
            tools: ["JavaScript", "TypeScript", "Python", "C#", "Java", "React.js", "Vue.js", "Three.js", "GSAP", "HTML5/CSS3", "Bootstrap"]
        },
        design: {
            title: "BACKEND, CLOUD & AI",
            description: "Scalable APIs, RAG systems, databases & cloud infrastructure",
            details: "Architecting backend services and microservices with Node.js, Express.js, FastAPI, ASP.NET Core, and .NET Framework. Experienced with MongoDB, MySQL, PostgreSQL, Redis, Supabase, Firebase, AWS, Azure, RAG, and AI security tooling (Semgrep, Bandit, OSV).",
            tools: ["FastAPI", "Node.js", "Express.js", "ASP.NET Core", "Supabase", "PostgreSQL", "MongoDB", "Redis", "RAG / LLMs", "Docker", "Git / GitHub", "Vercel"]
        }
    },
    education: [
        {
            institution: "Sankalchand Patel University",
            location: "Mehsana, Gujarat",
            degree: "B.Tech in Computer Engineering",
            period: "August 2023 – May 2027 (Expected)",
            coursework: "Data Structures, DBMS, Operating Systems, Web Technologies, Computer Networks, Software Architecture"
        },
        {
            institution: "Gujarat Board",
            location: "Mehsana, Gujarat",
            degree: "12th Standard (Science)",
            period: "March 2023"
        }
    ],
    achievements: [
        {
            title: "New India Vibrant Hackathon 2023",
            role: "Finalist, Grand Finale",
            venue: "State-Level Competition at PDEU, Gandhinagar"
        },
        {
            title: "Odoo Combat 2024",
            role: "Participant",
            venue: "24-Hour Hackathon focused on rapid prototyping under tight deadlines"
        },
        {
            title: "SPU Hack for Tomorrow 1.0",
            role: "Participant",
            venue: "10-Hour Innovation Hackathon organized by CRI and SPCE at Sankalchand Patel University"
        }
    ]
};
