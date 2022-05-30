import React from "react";
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from '@chakra-ui/react'


const Product = ({key, title, category, gender, imageSrc, price, el}) => {
  console.log(title);
  // TODO: Remove below const and instead import them from chakra

  const Text = () =>  <div />;
  const Image = () => <div />;
  const Box = () => <div />;
  const Stack = () => <div />;
  const Heading = () => <div />;
  const Tag = () => <div />;
  const TagLabel = () => <div />;

  

  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={imageSrc} />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>

  );
};

export default Product;
