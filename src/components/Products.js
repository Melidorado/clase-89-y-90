import Card from './Card';
import Filters from './Filters';
import './Products.scss';
import { useState } from 'react';

const Products = ({products}) => {

    const [array, setArray] = useState(products)

    const collectionFilter = (value) => {
        const filterProducts = products.filter(product => 
            product.collection === value)
          setArray(filterProducts)
    }

    const colorFilter = (value) => {
        const filterProducts = products.filter(product => 
            product.color === value)
          setArray(filterProducts)
    }

    const categoryFilter = (value) => {
        const filterProducts = products.filter(product => 
            product.category === value)
          setArray(filterProducts)
    }

    return (
        <div className="productContainer">
            <Filters 
            collectionFilter={collectionFilter}
            colorFilter={colorFilter}
            categoryFilter={categoryFilter}
            />
            {array.map( (product, i) => {
                return (
                <Card 
                key={`idTarjeta-${i}`} 
                img={product.img} 
                title={product.title} 
                type={product.type} 
                price={product.price}
                rating={product.rating}
                />
                )
            })}

        </div>
    )
}

export default Products;