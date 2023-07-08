import { useState } from "react";
import Products from "./Product";
import products from "../Data/db";
import Recommended from "./Recommended";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Navigation from './Nav';
import { Link } from "react-router-dom";
import Pagination from './Pagination'
import Bread from './Bread'

function Filter() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.location.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, newPrice, title }) =>
          category === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice ,location}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          location={location}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
    {/* <Link to='/home/Main'> */}
      <Navigation query={query} handleInputChange={handleInputChange} />
      {/* <Bread/> */}
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      <Pagination></Pagination>
    {/* </Link> */}

    </>
  );
}

export default Filter;

