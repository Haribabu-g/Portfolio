export const myProjects = [
    {
        id: 1,
        title: "Docio - Doctors Appointment Platform",
        description: "Enables patients to seamlessly book appointments with doctors, featuring real-time consultations, secure access, and an intuitive credit-based payment system.",

        subDescription: [
            "Developed a full-stack web application using Next.js and Prisma for efficient doctor–patient role management and appointment scheduling.",
            "Integrated Vonage for real-time video consultations, enabling secure and reliable communication between doctors and patients.",
            "Implemented secure authentication and access control, with credit-point based transactions and automated PayPal payouts.",
            "Designed a fully responsive user interface using Tailwind CSS and shadcn/ui, ensuring a seamless experience across all devices.",
        ],
        href: "https://docio-haribabu.vercel.app/",
        logo: "",
        image: "/assets/projects/docio-project.png",
        tags: [
            {
                id: 1,
                name: "Next.js",
                path: "/assets/logos/next.js.svg",
            },
            {
                id: 2,
                name: "Tailwindcss",
                path: "/assets/logos/tailwindcss.svg",
            },
            {
                id: 3,
                name: "Prisma",
                path: "/assets/logos/prisma.svg",
            },
            {
                id: 4,
                name: "Clerk",
                path: "/assets/logos/Clerk.svg",
            },
        ],
    },
    {
        id: 2,
        title: "JobSphere – MERN Stack Job Portal",
        description:
            "A full-stack job portal connecting job seekers and recruiters through a modern MERN-based platform with real-time features and secure authentication.",
        subDescription: [
            "Built a scalable MERN stack application enabling users to search, filter, and apply to job listings by category and location.",
            "Integrated Clerk for secure authentication and role-based access, tailored separately for job seekers and recruiters.",
            "Implemented recruiter tools to post jobs, manage applications, and review candidate resumes within a streamlined interface.",
            "Connected to MongoDB for dynamic job and user data management, and deployed seamlessly on Vercel with error tracking via Sentry.",
        ],
        href: "https://job-portal-new-client-plum.vercel.app/",
        logo: "",
        image: "/assets/projects/JobSphere-landing-page.png",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/logos/react.svg",
            },
            {
                id: 2,
                name: "Tailwindcss",
                path: "/assets/logos/tailwindcss.svg",
            },
            {
                id: 3,
                name: "Node.js",
                path: "/assets/logos/nodejs.svg",
            },
            {
                id: 4,
                name: "Express.js",
                path: "/assets/logos/Express.svg",
            },
            {
                id: 5,
                name: "MongoDb",
                path: "/assets/logos/MongoDB.svg",
            },


        ],
    },
    {
        id: 3,
        title: "Estate – Animated Real Estate Landing Page",
        description:
            "A visually striking landing page inspired by anime aesthetics, showcasing a fictional real estate platform with smooth animations and responsive design.",
        subDescription: [
            "Crafted a pixel-perfect landing page using React and Vite, styled with Tailwind CSS for mobile responsiveness.",
            "Integrated Framer Motion to deliver dynamic animations and transitions for engaging UI interactions.",
            "Optimized build performance with Vite for lightning-fast loading and development workflow.",
            "Deployed seamlessly on Vercel for scalable, high-performance delivery with zero configuration.",
        ],
        href: "https://estate-gray.vercel.app/",
        logo: "",
        image: "/assets/projects/Estate-landing-page.png",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/logos/react.svg",
            },
            {
                id: 2,
                name: "Tailwindcss",
                path: "/assets/logos/tailwindcss.svg",
            },
            {
                id: 3,
                name: "Framer-motion",
                path: "/assets/logos/framer-motion.png",
            },
            {
                id: 4,
                name: "Vite",
                path: "/assets/logos/vitejs.svg",
            },
        ],
    },
    {
        id: 4,
        title: "Fresh Haven – Animated React Landing Page",
        description:
            "A modern and fully responsive landing page designed for a fruit marketplace, featuring smooth animations, vibrant visuals, and a sleek UI built with React and Tailwind CSS.",
        subDescription: [
            "Developed a pixel-perfect landing page using React and Vite for blazing-fast performance.",
            "Styled the interface with Tailwind CSS and enhanced interactivity using Framer Motion animations.",
            "Implemented a dynamic hero section and polished navigation bar for a compelling first impression.",
            "Deployed on Vercel for seamless delivery, global CDN performance, and hassle-free updates.",
        ]
        ,
        href: "https://fresh-haven-landing.vercel.app/",
        logo: "",
        image: "/assets/projects/fresh-haven-landing-page.png",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/logos/react.svg",
            },
            {
                id: 2,
                name: "Framer-motion",
                path: "/assets/logos/framer-motion.png",
            },
            {
                id: 3,
                name: "Tailwindcss",
                path: "/assets/logos/tailwindcss.svg",
            },
            {
                id: 4,
                name: "Vite",
                path: "/assets/logos/vitejs.svg",
            },
        ],
    },
    {
        id: 5,
        title: "VirtualR – Immersive VR Product Landing Page",
        description:
            "A sleek and responsive landing page designed to showcase a virtual reality product, featuring animated UI elements, modern visuals, and structured content for features, pricing, and testimonials.",
        subDescription: [
            "Built with React and Tailwind CSS, delivering a fluid, mobile-friendly interface with clean layout components.",
            "Implemented Framer Motion (if used) for subtle animations enhancing interactivity and user engagement.",
            "Organized the project structure into modular, reusable components under a `src/components` architecture.",
            "Leveraged Vite for fast development builds and deployed seamlessly to Vercel for global delivery.",
        ],
        href: "https://virtualr-landing-page-mu.vercel.app/",
        logo: "",
        image: "/assets/projects/vr-landing-page.png",
        tags: [
            {
                id: 1,
                name: "React",
                path: "/assets/logos/react.svg",
            },
            {
                id: 2,
                name: "Tailwindcss",
                path: "/assets/logos/tailwindcss.svg",
            },
            {
                id: 3,
                name: "Vite",
                path: "/assets/logos/vitejs.svg",
            },
            {
                id: 4,
                name: "Vercel",
                path: "/assets/logos/vercel.svg",
            },
        ],
    },
    /* (upcoming projects)
    {
        id: 6,
        title: "Online Learning Platform",
        description:
            "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
        subDescription: [
            "Built using Blazor WebAssembly for a seamless SPA experience.",
            "Implemented video streaming with Azure Media Services.",
            "Added a quiz system with dynamic question generation and real-time grading.",
            "Integrated Stripe API for secure payment processing.",
        ],
        href: "",
        logo: "",
        image: "/assets/projects/elearning.jpg",
        tags: [
            {
                id: 1,
                name: "Blazor",
                path: "/assets/logos/blazor.svg",
            },
            {
                id: 2,
                name: "Azure",
                path: "/assets/logos/azure.svg",
            },
            {
                id: 3,
                name: "Stripe",
                path: "/assets/logos/stripe.svg",
            },
            {
                id: 4,
                name: "TailwindCSS",
                path: "/assets/logos/tailwindcss.svg",
            },
        ],
    },
    */
];

export const mySocials = [
    {
        name: "WhatsApp",
        href: "https://wa.me/919345804192?text=Hi%20Hari%2C%20I%20saw%20your%20portfolio!",
        icon: "/assets/socials/whatsApp.svg",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/haribabu-g/",
        icon: "/assets/socials/linkedIn.svg",
    },
    {
        name: "Github",
        href: "https://github.com/Haribabu-g",
        icon: "/assets/logos/github-white.svg",
    },
];

export const experiences = [
    /* 
   {
      
       title: "Software Developer",
       job: "Security & Defense Projects",
       date: "2021-2023",
       contents: [
           "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
           "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
           "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
           "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
           "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
       ],
   },
   {
       title: "Back-End Developer",
       job: "Car Manufacture",
       date: "2023-2024",
       contents: [
           "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
           "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
           "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
           "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
           "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
       ],
   },
   */
    {
        title: "Open Source Contributor",
        job: "Community-Driven Projects",
        date: "2023-Present",
        contents: [
            "Contributed bug fixes and UI enhancements to GitHub projects using React and Tailwind CSS.",
            "Participated in issue discussions, pull requests, and code reviews to improve collaboration and community engagement.",
            "Gained hands-on experience working with real-world codebases and version control workflows.",
            "Identified and reported multiple security vulnerabilities — including XSS and authentication flaws — to the Indian government's NCIIPC by analyzing public-facing websites using Burp Suite.",
            "Continuously created and shared problem-solving ideas related to cybersecurity and ethical hacking."
        ],
    },
];



export const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://robohash.org/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://robohash.org/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://robohash.org/john",
    },
    {
        name: "Alice",
        username: "@alice",
        body: "This is hands down the best thing I've experienced. Highly recommend!",
        img: "https://robohash.org/alice",
    },
    {
        name: "Bob",
        username: "@bob",
        body: "Incredible work! The attention to detail is phenomenal.",
        img: "https://robohash.org/bob",
    },
    {
        name: "Charlie",
        username: "@charlie",
        body: "This exceeded all my expectations. Absolutely stunning!",
        img: "https://robohash.org/charlie",
    },
    {
        name: "Dave",
        username: "@dave",
        body: "Simply breathtaking. The best decision I've made in a while.",
        img: "https://robohash.org/dave",
    },
    {
        name: "Eve",
        username: "@eve",
        body: "So glad I found this. It has changed the game for me.",
        img: "https://robohash.org/eve",
    },
];