const logotext = "Emad";
const meta = {
    title: "Muhammad Emad Sarwar",
    description: "I am Muhammad Emad Sarwar",
};

const introdata = {
    title: "I am Muhammad Emad Sarwar, A BS-CS student at LUMS",
    animated: {
        first: "I am interested in machine learning related domains",
        second: "I am an LLM enthusiast ",
        third: "I enjoy developing MERN applications",
    },
    description: "I am passionate about software engineering and machine learning related domains. I enjoy learning about emerging technologies, particularly in the world of large language models (LLMs) and AI. Drawing meaningful extrapolations from data to aid decision-making is a process I find enjoyable. I am especially interested in understanding model behavior, exploring and uncovering patterns in data to derive impactful insights.",
    your_img_url: "/my_image.jpeg",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Hi, I'm Muhammad Emad Sarwar. As a computer scientist, I'm passionate about solving complex problems and creating insightful applications. My work is driven by a strong belief in empathy - understanding the human side of any challenge - and the power of collaboration to bring diverse ideas together effectively. Foundational to all of this is integrity; I'm committed to working transparently and building trust. Beyond my professional interests, I enjoy staying active and engaged. Whether it's diving into a good book, or keeping up with my favorite sports teams, I find these activities recharge my creativity and focus",
};
const worktimeline = [{
        jobtitle: "Intern",
        where: "CSaLT - LUMS",
        date: "Jan 2024 - Present",
    },
    {
        jobtitle: "Summer Research Intern",
        where: "Networks and Systems group - LUMS",
        date: "Summer 2023",
    },
    {
        jobtitle: "Teaching Assistant - Data Structures",
        where: "LUMS",
        date: "Spring 2024",
    },
];

const skills = [{
        name: "Python",
        value: 95,
    },
    {
        name: "MERN",
        value: 80,
    },
    {
        name: "Machine Learning",
        value: 85,
    },
    {
        name: "Data Science",
        value: 80,
    },
    {
        name: "LLMs",
        value: 75,
    },
];

// const services = [{
//         title: "Data Science",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Mobile Apps",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Wordpress Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
// ];

const dataportfolio = [{
        img: "/400x500.jpg",
        description: "MigraineAid is an AI-driven Android app that collects user and sensor data to develop machine learning models to predict migraines in advance.",
        link: "https://github.com/madoinfinity/MigraineAid-Scripts",
    },
    {
        img: "/400x500.jpg",
        description: "This multi-agent AutoML framework leverages LLM agents to simplify converting business challenges into actionable, data-driven insights through automated code generation, analysis, and reporting.",
        link: "https://github.com/madoinfinity/Auto-ML-Project",
    },
    {
        img: "/400x500.jpg",
        description: "Developed a RAG chatbot using LangChain, Mixtral 7B, and a university handbook vector store. It functions as a dynamic research assistant, adapting its workflow based on user queries for context-aware answers.",
        link: "https://github.com/madoinfinity/LLMs-RAG",
    },
    {
        img: "/400x500.jpg",
        description: "Compared multiple machine learning models and text representations for toxic comment classification on Jigsaw data. The study found complex models performed best (~93% accuracy) and emphasized the importance of considering model complexity, data balance, and embedding quality.",
        link: "https://github.com/madoinfinity/ML-Toxicity-Proj",
    },
    {
        img: "/400x500.jpg",
        description: "To help Pakistani tourists find fair prices and managers improve profitability, this project analyzed Booking.com hotel data. A Random Forest predicts prices, while a cost-aware linear regression model estimates pseudo-profits, revealing pricing inefficiencies and key profit drivers, though based on assumed costs.",
        link: "https://github.com/Jawamegamind/PakStay-Advisor",
    },
    {
        img: "/400x500.jpg",
        description: "The Auction App is a full-stack MERN web application that enables users to create, browse, and participate in live auctions. It features user authentication, real-time bidding, and dynamic auction updates. Users can manage their profiles and track created profiles. Data is stored through MongoDB using Mongoose schemas.",
        link: "https://github.com/madoinfinity/Mern-Auction",
    },

] 

const contactConfig = {
    YOUR_EMAIL: "madoinfinity12@gmail.com",
    YOUR_FONE: "0335-491-2770",
    description: "You can also contact me on my alternate emails : 25100086@lums.edu.pk, madogames@hotmail.com ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/madoinfinity",
    facebook: "https://www.facebook.com/emad.sarwar",
    linkedin: "https://www.linkedin.com/in/muhammad-emad-sarwar-b1288124b/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};