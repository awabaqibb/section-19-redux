import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const foodItems = [
    {
      itemId: 1,
      price: 12.99,
      quantity: 1,
      totalPrice: 12.99,
      description: "this is a random product",
      name: "Pizza",
    },
    {
      itemId: 2,
      price: 8.49,
      quantity: 1,
      totalPrice: 8.49,
      description: "this is a random product",
      name: "Burger",
    },
    {
      itemId: 3,
      price: 14.99,
      quantity: 1,
      totalPrice: 14.99,
      description: "this is a random product",
      name: "Spaghetti Carbonara",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {foodItems.map((item) => (
          <ProductItem
            key={item.itemId}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
