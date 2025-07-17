import { useState } from "react";
import Pizza from "./Pizza";

const Order = () => {
  const [type, setType] = useState("pepperoni");
  const [size, setSize] = useState("M");

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat Pizza</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <span>
              <input
                checked={size === "S"}
                type="radio"
                name="pizza-size"
                value="S"
                id="pizza-s"
                onChange={(e) => setSize(e.target.value)}
              />
              <label htmlFor="pizza-s">Small</label>
            </span>
            <span>
              <input
                checked={size === "M"}
                type="radio"
                name="pizza-size"
                value="M"
                id="pizza-m"
                onChange={(e) => setSize(e.target.value)}
              />
              <label htmlFor="pizza-m">Medium</label>
            </span>
            <span>
              <input
                checked={size === "L"}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-l"
                onChange={(e) => setSize(e.target.value)}
              />
              <label htmlFor="pizza-l">Large</label>
            </span>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza
              name="pepperoni"
              description="Pepperoni pizza"
              image="/public/pizzas/pepperoni.webp"
            />
            <p>$13.37</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
