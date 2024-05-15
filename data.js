const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
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

document.addEventListener("DOMContentLoaded", function () {
  const menuContainer = document.getElementById("menu-container");
  const pizzasContainer = document.getElementById("pizzas");
  // დაუვარე თითოეულ ობიქეტს მასივში
  pizzaData.forEach((pizza) => {
    // შევქმენი თითოეული ობიექტისთვსი საკუთარი კონტეინერი
    const pizzaItem = document.createElement("div");
    pizzaItem.classList.add("pizza");

    // შევქნენი თითოეული სურათისთვის img  ტეგი
    const pizzaImage = document.createElement("img");
    pizzaImage.src = pizza.photoName;
    pizzaImage.alt = pizza.name;
    pizzaItem.appendChild(pizzaImage);

    // თითოეული პიცის დასახელება
    const pizzaName = document.createElement("h3");
    pizzaName.textContent = pizza.name;
    pizzaItem.appendChild(pizzaName);

    // თითოეული პიცის ინგრედიენტები
    const pizzaIngredients = document.createElement("p");
    pizzaIngredients.textContent = "Ingredients: " + pizza.ingredients;
    pizzaItem.appendChild(pizzaIngredients);

    // ფასი
    const pizzaPrice = document.createElement("p");
    pizzaPrice.textContent = "Price: $" + pizza.price;
    pizzaItem.appendChild(pizzaPrice);

    // თუ პიცა გაყიდულია მაშინ შექიმნება დამატებითი ტეგი სასა ეწერება რომ გაყიდულიას
    if (pizza.soldOut) {
      const soldOutTag = document.createElement("span");
      soldOutTag.textContent = "Sold Out";
      soldOutTag.classList.add("sold-out");
      pizzaItem.appendChild(soldOutTag);
    }

    // ვამატებთ მთავრ კონტეინერში თითოეულi პიცის კონტეინერს.
    pizzasContainer.appendChild(pizzaItem);
    menuContainer.appendChild(pizzasContainer);
  });

  const footerContainer = document.getElementById("footer");
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const messageParagraph = document.createElement("p");
  messageParagraph.classList.add("order");

  if (isOpen === true) {
    messageParagraph.textContent = `We're open from ${openHour}:00 to ${closeHour}:00. Come visit us or order online.`;
  } else {
    messageParagraph.textContent = "We are Closed";
  }

  footerContainer.appendChild(messageParagraph);


  const orderBtn = document.createElement('button');
  orderBtn.classList.add("btn");
  orderBtn.innerText = "Order";

  console.log(orderBtn)

  footerContainer.appendChild(orderBtn)
});

