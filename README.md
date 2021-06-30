# food-menu

## Pre-requisites: <br>

<ul>
  <li> NodeJS - You can install nodeJS from https://nodejs.org/en/download/ </li>
</ul>


## Project SetUp: <br>

<ul> 
  <li> Clone the project </li>
  <li> Open cmd in the root folder of the project and run <code> npm i </code> to install all the dependencies. </li>
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
        image: "biryani.jpg",
        count: 5
      }]
    </code> </br> </br>
    Model: </br>
    <em> id </em> - category id </br>
    <em> name </em> - category name </br>
    <em> image </em> - imag src of category </br>
    <em> count </em> - count of restaurants serving that category </br>  </br>
  </li>
  <li> <strong> /api/categories/:id </strong> - To fetch list of all restaurants serving selected category of food. </br>
  Example Value: <br>
    <code> 
      [{
        id: 1,
        name: "Aroma House",
        image: "biryani.jpg",
        open: true,
        rating: 3.0
      }]
    </code> </br> </br>
    Model: </br>
    <em> id </em> - restaurant id </br>
    <em> name </em> - restaurant name </br>
    <em> image </em> - imag src of category selected </br>
    <em> open </em> - restaurant's open status </br>
    <em> rating </em> - restaurant's rating </br>
  </li>
</ol>

## Sample Output: </br>

<ul>
  <li> Categories (1st Page): </br> 
  Description: <br>
  The first page of the website should show all categories fetched from the api ( <em> /api/categories </em> ) as shown in the below image.
  <p>
    <img src="SampleOutput/categories.PNG" width="700" height="350"/>
  </p>
  </li>
  </br>
  <li> Restaurants serving Biryani(2nd Page): </br> 
   Description: <br>
   On click event of any category e.g. Brilliant Biryanis, the website should show all restaurants serving biryanis fetched from the api ( <em> /api/categories/:id </em> ) as      shown in the below image. 
  <p>
    <img src="SampleOutput/restaurants.PNG" width="700" height="350"/>
  </p>
  </li>
</ul>
