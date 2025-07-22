import { useEffect, useState } from "react";
import Pizza from "./Pizza";

const Order = () => {
  const [pizzaTypes, setPizzaTypes] = useState([])
  const [type, setType] = useState("bbq_ckn");
  const [size, setSize] = useState("M");

  const selectedPizza = pizzaTypes?.find(({ id }) => id === type)
  const pizzaPrice = selectedPizza?.sizes?.[size]

  useEffect(() => {
    async function fetchPizzaTypes() {
      const res = await fetch('http://localhost:5173/api/pizzas')
      const data = await res.json()
      setPizzaTypes(data)
    }
    fetchPizzaTypes()
  }, [])

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
              {
                pizzaTypes?.map(({ name, id }) => <option key={id} value={id}>{name}</option>)
              }
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
              name={selectedPizza?.name}
              description={selectedPizza?.description}
              image={selectedPizza?.image}
            />
            <p>${pizzaPrice}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
