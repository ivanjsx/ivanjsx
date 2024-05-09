// media
import vw from "../media/vw.png";
import place from "../media/place.png";
import learn from "../media/learn.png";
import travel from "../media/travel.png";
import testing from "../media/testing.png";
import burgers from "../media/burgers.png";
import foodgram from "../media/foodgram.png";
import theytube from "../media/theytube.png";
import visualgo from "../media/visualgo.png";

// types 
import { Project } from "../utils/types";



export const projects: Array<Project> = [
  {
    id: 7,
    stack: "backend",
    title: "Foodgram",
    image: foodgram,
    projectLink: "foodgram.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/foodgram",
    description: "social network for publishing cooking recipes with built-in functionality to automatically create shopping lists from the recipes added to favorites",
    keys: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL", 
      "Docker", 
      "Nginx", 
      "Gunicorn"
    ]
  },
  {
    id: 8,
    stack: "backend",
    title: "TheyTube",
    image: theytube,
    projectLink: "theytube.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/theytube",
    description: "livejournal-like platform for sharing long-read thoughts and subscribing to the thoughts of others",
    keys: [
      "Python",
      "Django",
      "Django HTML",
      "SQLite", 
      "Model-Template-View Architecture",
    ]
  },
  {
    id: 9,
    stack: "backend",
    title: "Testing in Django",
    image: testing,
    projectLink: "django-testing.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/django-testing",
    description: "writing unit tests for Django models, views, forms, serializers & custom management commands",
    keys: [
      "Python",
      "Django",
      "Unittest"
    ]
  },  
  {
    id: 2,
    stack: "frontend",
    title: "VisuAlgo",
    image: visualgo,
    projectLink: "visualgo.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/visualgo",    
    description: "visualization tool demonstrating the principles of computer algorithms & data structures",
    keys: [
      "React",
      "TypeScript",
      "Redux",
      "Redux Toolkit",
      "React Router",
      "Pure Functions"
    ]
  },
  {
    id: 1,
    stack: "frontend",
    title: "Stellar Burgers",
    image: burgers,
    projectLink: "stellar-burgers.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/stellar-burgers",
    description: "order constructor, interactive cart, profile page & history section for a burger delivery restaurant with a real-time order status tracking",
    keys: [
      "React",
      "React Router",
      "Drag-n-Drop with React DnD",
      "TypeScript",
      "Redux",
      "Redux Toolkit",
      "WebSocket API"
    ]
  },
  {
    id: 6,
    stack: "frontend",
    title: "Travel Across",
    image: travel,
    projectLink: "travel-across.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/travel-across",
    description: "online guide with suggestions for a possible visit, a list of upcoming destinations & a photo gallery",
    keys: [
      "Adaptive Layout",
      "BEM Methodology",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    id: 5,
    stack: "frontend",
    title: "Learn to Learn",
    image: learn,
    projectLink: "learn-to-learn.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/learn-to-learn",
    description: "presentation with tips on how to learn effectively, potential landing page for an educational platform",
    keys: [
      "CSS Animation",
      "BEM Methodology",
      "HTML",
      "CSS"
    ]
  },
  {
    id: 4,
    stack: "frontend",
    title: "The Place",
    image: place,
    projectLink: "the-place.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/the-place",
    description: "community-driven platform with the ability to add, like & delete photos of unique beautiful places worldwide & change user information",
    keys: [
      "Grid Layout",
      "Third-Party API",
    ],
  },
  {
    id: 3,
    stack: "frontend",
    title: "VW T1 Electro",
    image: vw,
    projectLink: "vw-t1-electro.ivanjsx.com",
    sourceCodeLink: "github.com/ivanjsx/vw-t1-electro",
    description: "web article dedicated to the launch of the electric version of the iconic Volkswagen T1 for an online magazine on electric vehicles",
    keys: [
      "Responsive Design",
      "BEM Methodology",
      "HTML",
      "CSS",
      "Sass"
    ]
  }
];
