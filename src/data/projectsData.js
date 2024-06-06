
import brunel from '../assets/portfolioImages/brunel.jpg'
import pos from '../assets/portfolioImages/pos.jpg'
import restaurant from '../assets/portfolioImages/restaurant.jpg'
import theurbanchaos from '../assets/portfolioImages/theurbanchaos.jpg'
import calculator from '../assets/portfolioImages/calculator.jpg'
import todoapp from '../assets/portfolioImages/todoapp.jpg'

// in progress projects

// import Servista from './../assets/portfolioImages/servista.png'
// import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "brunel",
    img: brunel,
    name: "Brunel Talent Hire Platform",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://brunel-kunal-puri.netlify.app/",
    source: "https://github.com/kunalpuri123/Brunel-Talent-Hire-Platform",
    description:
      "Brunel-Talent Hiring Platform is a web application developed using React.js for managing talent recruitment processes. It's not yet responsive; open it in Desktop Chrome Browser. Technologies used: React.js, React Router, Material-UI, Netlify, Git, GitHub.",
  },
  {
    id: "pos",
    img: pos,
    name: "POS Mern Application",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://sweet-sopapillas-33a879.netlify.app/",
    source: "https://github.com/kunalpuri123/POS-SYSTEM-MERN-APPLICATION",
    description:
      "This project is a Point of Sale (POS) system developed with the MERN stack, featuring billing, customer records, inventory management, and secure authentication. Leveraging HTML5, CSS, JavaScript, Bootstrap, React, MongoDB, Node.js, Express, and Redux, it offers a user-friendly interface and efficient business operations. The GitHub repository provides access to its source code for collaboration and further enhancement.",
  },
  {
    id: "corkers",
    img: restaurant,
    name: "Restaurant Listing App",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://restaurantapp-kappa.vercel.app/",
    source: "https://github.com/kunalpuri123/Corkers-Assignment",
    description:
      "This React-based Restaurant Management Application facilitates CRUD operations on restaurant data stored in a local JSON file. Users can view restaurant details in a table, add new entries, edit existing ones, and delete records. Leveraging HTML5, CSS, JavaScript, Bootstrap, React, Redux, and a local JSON file, the project provides a streamlined solution for restaurant data management.",
  },

  {
    id: "theurbanchaos",
    img: theurbanchaos,
    name: "The Urban Chaos",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://www.theurbanchaos.com/",
    source: "https://github.com/kunalpuri123/The-Urban-Chaos",
    description:
      "This project is a responsive website for an upcoming fashion brand. The website includes several pages such as Home, About, Contact Us, and Our Team. It is designed using HTML, CSS, JavaScript, and Bootstrap to ensure a modern and responsive design. The website also integrates Google API for collecting email data and handling form submissions.",

  },
  {
    id: "calculator",
    img: calculator,
    name: "Calculator",
    stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
    live: "https://calculator-phi-livid-98.vercel.app/",
    source: "https://github.com/kunalpuri123/calculator",
    description:  
        "This is a simple Calculator App developed using HTML, CSS, and JavaScript. It performs basic arithmetic operations and includes a Dark Mode feature for a sleek, user-friendly interface.",
  },

  {
    id: "todoapp",
    img: todoapp,
    name: "To Do App",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://to-do-webapp-eta.vercel.app/",
    source: "https://github.com/kunalpuri123/to-do-webapp",
    description:
      "This is a simple To-Do App built with HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as complete, providing a straightforward and efficient way to manage daily tasks.",
  },



];

const InprogressProjectsData = [


];

export default { ProjectsData, InprogressProjectsData }