import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";

const ProductList = ({ category }: { category: string }) => {
  const [product, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
