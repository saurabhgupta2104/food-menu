# food-menu

## Pre-requisites: <br>

<ul>
  <li> NodeJS - You can install nodeJS from https://nodejs.org/en/download/ </li>
</ul>

## How to start the server: <br>

<ul>
  <li> Open cmd in the root folder of the project and type <code> npm start </code> </li>
</ul>

## Endpoints: <br>

<ol>
  <li> <strong> /api/categories </strong> - To fetch list of all categories of food. <br>
    Example Value: <br>
    <code> 
      [{
        id: 1,
        name: "biryani",
        image: "biryani.jpg"
      }]
    </code>
  </li>
  <li> <strong> /api/categories/:id </strong> - To fetch list of all restaurants serving selected category of food. </br>
  Example Value: <br>
    <code> 
      [{
        id: 1,
        name: "Aroma House",
        image: "biryani.jpg",
        open: true
      }]
    </code>
  
  </li>
</ol>
