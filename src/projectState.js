//Import Images
import covid from './images/covid.png';
import pokemon from './images/pokedex.png';
import nba from './images/nba.png';
import website from './images/website.png';
import library from './images/library.png';
import ecommerce from './images/ecommerce.png';
import tesla from './images/tesla.png';

export const projectState = () => {
  // eslint-disable-next-line
  return [
    {
      title: "The Covid-19 Application",
      mainImg: covid,
      // secondaryImg: athlete2,
      url: "/project/covid",
      content: 'This covid application utilizes a covid API to various statistics such as cases, deaths etc for every country in the world. Also has a chloropleth map used to highlight the severity of covid cases for each country.',
      learning: 'I got a better understanding of fetching API data, using different libraries such as React maps, react tooltips, bootstrap, d3-scale etc. This project was difficult for me because I had to learn how to populate the map with the data points which is something I have not done before.',
      tech: 'ReactJS, axios, React-Simple-Maps, D3, BootStrap',
      github: 'https://github.com/DylanL96/covid'
    },
    {
      title: "PokeDex",
      mainImg: pokemon,
      // secondaryImg: goodtimes2,
      url: "/project/pokemon",
      content: 'This is a pokedex created with the poke api and can be used to fetch the specific details for every single pokemon. I created this application to get a better understanding of fetching API, using the filter method and learning styled components',
      learning: 'I got a better understanding of how to use the filter method which I think is super important, especially in react applications as the filter method is an extremely powerful array method tool to understand. I also learned how to implement conditionals. For example, the background colour of the pokemon will change depending on what type the pokemon is. If it is a fire type pokemon, the background colour will change to red. If it is a water type pokemon, the background colour will change to blue. I also got a better understanding of Styled components. Lastly, I learned how to import FontAwesome Icons into my application to give it a visual boost to it.',
      tech: 'ReactJS, axios, Styled-Components, FontAwesome',
      github: 'https://github.com/DylanL96/pokedex'
    },
    {
      title: "PokeDex",
      mainImg: pokemon,
      // secondaryImg: goodtimes2,
      url: "/project/pokemon",
      content: 'This is a pokedex created with the poke api and can be used to fetch the specific details for every single pokemon. I created this application to get a better understanding of fetching API, using the filter method and learning styled components',
      learning: 'I got a better understanding of how to use the filter method which I think is super important, especially in react applications as the filter method is an extremely powerful array method tool to understand. I also learned how to implement conditionals. For example, the background colour of the pokemon will change depending on what type the pokemon is. If it is a fire type pokemon, the background colour will change to red. If it is a water type pokemon, the background colour will change to blue. I also got a better understanding of Styled components. Lastly, I learned how to import FontAwesome Icons into my application to give it a visual boost to it.',
      tech: 'ReactJS, axios, Styled-Components, FontAwesome',
      github: 'https://github.com/DylanL96/pokedex'
    },
    {
      title: "NBA Stats Application",
      mainImg: nba,
      // secondaryImg: theracer2,
      url: "/project/nba",
      content: 'I am a big fan of NBA and I thought it would be super fun to use the balldontlie api to fetch the statistics for every NBA player for the 2019-2020 season. It also gave me a good opportunity to learn more about fetching data, as well as learning a new library - ChartJS. This application fetches the stats for each player and products a graph of the statistics for the season.',
      learning: 'In this project I learned how to use the library ChartJS which I would combine with the fetched API data. I learned how to create a dropdown menu and depending on which option was selected, it would change the graph being displayed, such as points, assists or blocks. This project also allowed me to learn how to conditionally change the profile picture of each player depending on who was searched for.',
      tech: 'ReactJS, Styled-Components, ChartJS',
      github: 'https://github.com/DylanL96/nbastats'
    },
    {
      title: "Website Authentication",
      mainImg: website,
      // secondaryImg: theracer2,
      url: "/project/website",
      content: 'This is my first full stack website where I used the MERN stack to create a complete website with login/logout authentication, protected routes, admin dashboards and admin functionality, such as creating and deleting posts. It also was unique in that it had limited access depending on the role of the user. For example, admins would have access to the admin dashboard while a normal user would not have access to the admin dashboard.',
      learning: 'This project has led me to learn a lot about the full stack development processes. I learned about creating the client in ReactJS while the server side was creating in NodeJS. I learned about storing data in MongoDB, while also retrieving the data from it to display, as well as updating and deleting it so it could be a fully functioning CRUD application. I also learned how to use ExpressJS to help compliment and assist the creation of the server side in NodeJS. In the end, I learned how to combine the client and server side together and how ReactJS can send POST data to the server. This was a very complicated project to complete.',
      tech: 'MongoDB, ExpressJS, ReactJS, NodeJS, CSS',
      github: 'https://github.com/DylanL96/website'
    },
    {
      title: "Object Oriented Library",
      mainImg: library,
      // secondaryImg: theracer2,
      url: "/project/library",
      content: 'This was a simple little library app that I wanted to create completely in Vanilla JavaScript to get a better understanding of Object Oriented Programming, Vanilla JavaScript and simple CSS styling.',
      learning: 'In this project I was able to get a better understanding of Object Oriented Programming and using functions in JavaScript.',
      tech: 'JavaScript, CSS',
      github: 'https://github.com/DylanL96/library'
    },
    {
      title: "E-Commerce Shopping cart with Java",
      mainImg: ecommerce,
      // secondaryImg: theracer2,
      url: "/project/ecommerce",
      content: 'An e-commerce shopping cart created with Java, Thymeleaf, Lombok and using an H2 database to store the data. Allows users to perform basic CRUD functionality, such as adding to cart, deleting from cart and updating items in their carts. This project also utilizes sessions to grab the previous orders that were submitted.',
      learning: 'This project gave me a better understanding of CRUD functionality, using an in-memory database such as H2, learning how to create Spring boot projects and overall just learning how to develop basic full stack projects.',
      tech: 'Java, Spring boot, Spring Security, Thymeleaf, Lombok, CSS',
      github: 'https://github.com/DylanL96/ecommerce'
    },
    {
      title: "Tesla Financials and Analyst Price Targets 🎯",
      mainImg: tesla,
      // secondaryImg: theracer2,
      url: "/project/tesla",
      content: 'This is a website that displays all of the important financial data relating to TSLA, such as free cash flow, gross margin, deliveries etc. Furthermore, it contains the price targets from notable Wall St Analysts and retail analysts all on one page of the Internet! I have always felt that it can be hard to find this kind of data so I wanted to put all of the price targets into one organized table for easier visualization and understanding. ',
      learning: 'I was able to get a better understanding of using the axios library to fetch and consume data. Also got a better understanding of how to fetch the data and display that same data using ChartJS. Lastly, this is the first project I have created where I used a Java, ReactJS and SQL stack which was super cool because you normally see people using the MERN stack. I like Java.',
      tech: 'Java, ReactJS, Spring boot, Thymeleaf, Lombok, SQL, CSS',
      github: 'https://github.com/DylanL96/teslastat'
    },
  ];
};