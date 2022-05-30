import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product.jsx";
import Pagination from "./Pagination.jsx";
import axios from "axios";
import {ChakraProvider} from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  const [formArr, setFormArr] = useState([])
  // const [form, setForm] = useState("");
  
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(3);

  useEffect(() => {
    let items = async () => {
      let res = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
      console.log(res.data);
      setFormArr(res.data);
      // console.log("heyyyy", formArr)
    }
    items();
  }, [page, limit])

  return (
    <Flex>
      <AddProduct/>
      <Grid>
        {formArr.map((el) => {
        // console.log(el.title)
        <Product key={el.id} title={el.title} category={el.category} gender={el.gender} imageSrc={el.imageSrc} price={el.price} el={el}/>
        console.log(el.title)
        })}</Grid>
      <Pagination formArr={formArr} page={page} limit={limit} />
    </Flex>
  );
};

export default Products;
