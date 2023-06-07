document.addEventListener("DOMContentLoaded", function(event) {
    const pizzaContainer = document.getElementById("pizza-container");
  
    const pizzas = [
      {
        title: "Pizza 1",
        name: "Margherita",
        toppings: "Tomato, mozzarella, basil",
        size: "Medium",
        cost: "R110.99"
      },
      {
        title: "Pizza 2",
        name: "Pepperoni",
        toppings: "Tomato, mozzarella, pepperoni",
        size: "Large",
        cost: "R120.99"
      },

      {
        title: "Pizza 3",
        name: "Pepperoni deluxe",
        toppings: "Tomato, mozzarella, pepperoni, garlic",
        size: "Large",
        cost: "R159.99"
      },

      {
        title: "Pizza 4",
        name: "Supreme",
        toppings: "Tomato, mozzarella, salami, pepperoni, garlic, chili",
        size: "Large",
        cost: "R167.99"
      },

      {
        title: "Pizza 5",
        name: "BBQ Chicken",
        toppings: "Tomato, mozzarella, Chicken, BBQ sauce, onion",
        size: "Large",
        cost: "R139.99"
      },

      {
        title: "Pizza 6",
        name: "4 cheeses",
        toppings: "Tomato, mozzarella, Feta, Blue Cheese, Goat Cheese",
        size: "Large",
        cost: "R159.99"
      },

      {
        title: "Pizza 7",
        name: "Sea Food",
        toppings: "Tomato, mozzarella, Onion, Garlic, Calamari",
        size: "Large",
        cost: "R129.99"
      },

      {
        title: "Pizza 8",
        name: "Hawaiian",
        toppings: "Tomato, mozzarella, ham, pineapple",
        size: "Large",
        cost: "R179.99"
      },
      
    ];
  
    // pizza cards
    pizzas.forEach(function(pizza) {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = pizza.title;
  
      const name = document.createElement("div");
      name.classList.add("card-value");
      name.innerHTML = "<span>Name:</span> " + pizza.name;
  
      const toppings = document.createElement("div");
      toppings.classList.add("card-toppings");
      toppings.innerHTML = "<span>Toppings:</span> " + pizza.toppings;
  
      const size = document.createElement("div");
      size.classList.add("card-value", "card-size");
      size.innerHTML = "<span>Size:</span> " + pizza.size;
  
      const cost = document.createElement("div");
      cost.classList.add("card-value", "card-cost");
      cost.innerHTML = "<span>Cost:</span> " + pizza.cost;
  
      card.appendChild(title);
      card.appendChild(name);
      card.appendChild(toppings);
      card.appendChild(size);
      card.appendChild(cost);
  
      pizzaContainer.appendChild(card);
    });
  });
  