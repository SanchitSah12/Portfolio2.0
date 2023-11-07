const [html,css,node,react,mysql,js,mongodb,java,bootstrap,next,firebase] = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" ,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" ,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" ,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" ,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" ,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" ,
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
]




const Projects = [
    {
        key: 1,
        name: "Matching System",
        img: "https://i.ibb.co/0fWvbvh/Screenshot-2022-01-23-195034.png/to/img.png",
        description: "An Online Matching System with DataBase Connectivity",
        link: 'https://github.com/SanchitSah12/MatchingWebsite',
        frameworks:[html,mysql,css,js,node,bootstrap]

    }, {
        key: 2,
        name: "Bus Reservation System",
        img: "https://user-images.githubusercontent.com/72809971/150920507-9ece0bfb-d766-47ac-83e3-0499c1579c04.png",
        description: "A DBMS Bus Reservation System made using JAVAFX and MySql",
        link: 'https://github.com/SanchitSah12/Bus-Reservation-System-using-JAVAFX-and-MYSql',
        frameworks:[java,mysql]
    }
    , {
        key: 3,
        name: "GPT Powered ChatBot",
        img: "https://github.com/SanchitSah12/ChatGptClone/assets/72809971/996ad325-3996-4568-8412-415107c7d331",
        description: "GPT powered chatBot with behavior specification",
        link: 'https://github.com/SanchitSah12/ChatGptClone',
        frameworks:[react,next,firebase]
    },
    

];


export default Projects;