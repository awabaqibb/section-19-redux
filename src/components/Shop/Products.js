import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const foodItems = [
    {
      id: 1,
      title: "Pizza",
      description: "Delicious pizza with various toppings.",
      price: 12.99,
    },
    {
      id: 2,
      title: "Burger",
      description: "Juicy burger with cheese and veggies.",
      price: 8.49,
    },
    {
      id: 3,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta with bacon and eggs.",
      price: 14.99,
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {foodItems.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
