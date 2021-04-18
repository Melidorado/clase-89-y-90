import './App.scss';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import Products from './components/Products';
import { useState } from 'react';

const products = [
  {
    title: 'Coombes',
    type: 'Lounge',
    price: 2600,
    rating: 4,
    img: 'https://i.imgur.com/ZAxMGG5.png',
    category: 'furniture',
    color: 'gray',
    collection: 'classic',
  },
  {
    title: 'Keeve Set',
    type: 'Table & Chairs',
    price: 590,
    rating: 4,
    img: 'https://i.imgur.com/tT8sFIs.jpeg',
    category: 'furniture',
    color: 'wood',
    collection: 'modern',
  },
  {
    title: 'Nillè',
    type: 'Armchair',
    price: 950,
    rating: 5,
    img: 'https://i.imgur.com/Vx1cZY0.png',
    category: 'furniture',
    color: 'orange',
    collection: 'classic',
  },
  {
    title: 'Blanko',
    type: 'Side table',
    price: 90,
    rating: 4,
    img: 'https://i.imgur.com/N1Bf4ox.jpg',
    category: 'furniture',
    color: 'white',
    collection: 'modern',
  },
  {
    title: 'Momo',
    type: 'Shelves',
    price: 890,
    rating: 4,
    img: 'https://i.imgur.com/AlKxDE4.jpeg',
    category: 'auxiliars',
    color: 'wood',
    collection: 'classic',
  },
  {
    title: 'Penemillè',
    type: 'Chair',
    price: 120,
    rating: 4,
    img: 'https://i.imgur.com/pmANPjN.jpeg',
    category: 'furniture',
    color: 'white',
    collection: 'modern',
  },
  {
    title: 'Kappu',
    type: 'Shelves',
    price: 420,
    rating: 4,
    img: 'https://i.imgur.com/s2rsPa1.jpg',
    category: 'auxiliars',
    color: 'wood',
    collection: 'classic',
  },
];

const App = () => { 
  const [productsApp, setProductsApp] = useState(products)

  const filterProductosInput = (valorDelInput) => {
    const filterProducts = products.filter(product => 
      product.title.toLowerCase().includes(valorDelInput) || 
      product.type.toLowerCase().includes(valorDelInput))
    setProductsApp(filterProducts)
  }

  const collectionFilter = (value) => {
    const filterProducts = products.filter(product => 
        product.collection === value)
        setProductsApp(filterProducts)
  }

  const colorFilter = (value) => {
    const filterProducts = products.filter(product => 
        product.color === value)
      setProductsApp(filterProducts)
  } 

  const categoryFilter = (value) => {
    const filterProducts = products.filter(product => 
        product.category === value)
        setProductsApp(filterProducts)
  }

  const priceFilter = (priceArray) => {
    const filterProducts = products.filter( product => 
        product.price >= priceArray[0] && product.price <= priceArray[1])
        setProductsApp(filterProducts)
  }

  const resetProductsArray = () => {
    setProductsApp(products)
  }

  return (
  <>
  <Nav />
  <SearchBar filterProductosInput={filterProductosInput}/>
  <Products 
  products={productsApp}
  collectionFilter={collectionFilter}
  colorFilter={colorFilter}
  categoryFilter={categoryFilter}
  priceFilter={priceFilter}
  resetProductsArray={resetProductsArray}
  />
  </>
  )
}

export default App;
