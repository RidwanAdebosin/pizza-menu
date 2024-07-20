import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
     <Header/>
     <Menu/>
     <Footer/>
    </div>
  );
}

const Header = () => {
return (
  <header className="header">
    <h1 >Fast React Pizza Co.</h1>
  </header>
)
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;


  return (
  <main className="menu">
  <h2>Our Menu</h2>
  {
    numPizzas > 0 ? (
      <>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
      <ul className="pizzas">
  {pizzas.map((pizza) =>  
    <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut} key={pizza.name}/>
    )}
  </ul>
    </>
    ) : (
      <p>We're working on our menu, please check back</p>
    )

  }
  </main>
  )
};


const Pizza = ({name, ingredients, photoName, price, soldOut}) => {
  // if (soldOut) return null;
  return(
    <li className={`pizza ${soldOut ? "sold-out" : null}  `}>
        <img src={photoName} alt={photoName}/>
        <div>

        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ?  "SOLD OUT" : price}</span>
        
        </div>
    </li>
  )
};

const Footer = () => { 
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return(
    <footer className="footer"> 
      {isOpen ? (
      <Order closeHour={closeHour}/>
      ) :
      (<div className="order">
            <p>We're closed. Come back by {openHour}:00.</p>
          </div>
        )
  }
  </footer>
  )
};


const Order = ({closeHour}) => {

  return(
      <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
      </div> 
  )
}











const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
  <App/>
</React.StrictMode>);
