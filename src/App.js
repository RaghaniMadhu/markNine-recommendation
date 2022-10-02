import React, { useState } from "react";
import "./styles.css";

const foodDB = {
  Paneer: [
    {
      name: "Paneer Tikka",
      description: "Paneer Roasted in Tandoor"
    },
    {
      name: "Palak Paneer",
      description: "Healthy Paneer loaded with Spinach"
    },
    {
      name: "Chilli Paneer",
      description: "Fusion of Indian and Chinese Cuisine"
    }
  ],
  Mushroom: [
    {
      name: "Mushroom Soup",
      description: "Mushrooms in Creamy Soup"
    },
    {
      name: "Mushroom Pasta",
      description: "Sautéed Mushrooms with Pasta"
    },
    {
      name: "Stuffed Portobello Mushrooms",
      description: "Large Open Cap Stuffed Mushrooms"
    }
  ],
  Soya: [
    {
      name: "Soya Chunk Fry",
      description: "Marinated & Fried Soya Chunks"
    },
    {
      name: "Aloo Soya Chunk Curry",
      description: "Aloo and Soya made in Indian Curry"
    },
    {
      name: "Soyabean Chilli",
      description: "Marinated & Fried Soya Chunks in Chilli Sauce"
    }
  ]
};

const dishes = Object.keys(foodDB);

export default function App() {
  const [selectedDish, setselectedDish] = useState("Paneer");

  function dishClickHandler(dish) {
    setselectedDish(dish);
  }

  return (
    <div className="App">
      <div className="header">
        <div className="title">Food Recommendation</div>
      </div>
      <div>
        {dishes.map((dish) => {
          if (selectedDish === dish) {
            return (
              <button
                className="buttonDishes selectedButtonDishes"
                onClick={() => dishClickHandler(dish)}
              >
                {dish}
              </button>
            );
          }
          return (
            <button
              className="buttonDishes"
              onClick={() => dishClickHandler(dish)}
            >
              {dish}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        {foodDB[selectedDish].map((dish, index) => {
          if (index % 2 === 0) {
            return (
              <section className="section section-alt container-left">
                <div className="dish-name">{dish.name}</div>
                <hr />
                <div className="dish-description">
                  Description: {dish.description}
                </div>
              </section>
            );
          }
          return (
            <section className="section section-alt-2 container-left">
              <div className="dish-name">{dish.name}</div>

              <hr />
              <div className="dish-description">
                Description: {dish.description}
              </div>
            </section>
          );
        })}
      </div>

      <div className="footer">
        <div className="footer-header">About</div>
        <p>
          This App recommends you some famous dishes made out of protein-rich
          Paneer, Soya & vitamin-rich Mushroom
        </p>
      </div>
    </div>
  );
}
