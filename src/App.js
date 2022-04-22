import React from "react";
import CreateBurger from "./Burger/CreateBurger";

export default function App() {
  return (
    <div className="App">
      <CreateBurger
        burgerStack={[
          'Lettuce',
          'Meat',
          'Tomatoes',
          'Cheese',
          'Lettuce',
          'Tomatoes',
          'Pickles',
          'Tomatoes',
          'Lettuce',
          'Cheese',
          'Meat'
        ]}
      />
    </div>
  );
}