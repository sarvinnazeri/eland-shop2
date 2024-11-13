"use client"
import React from 'react';
import ProductDetails from '../productdetail/page';
async function getData(x) {
  const res = await fetch('https://fakestoreapi.com/products/' + x);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({ params }) {
  const data = await getData(params.slug);

  return (
    <ProductDetails data={data} />
  );
}
