import Card from './Card';
import Filters from './Filters';
import './Products.scss';
import { useState } from 'react';

const Products = ({products}) => {

    console.log(products)

    const [productsFilter, setProductsFilter] = useState(products)

    const collectionFilter = (value) => {
        const filterProducts = products.filter(product => 
            product.collection === value)
            setProductsFilter(filterProducts)
    }

    const colorFilter = (value) => {
        const filterProducts = products.filter(product => 
            product.color === value)
            setProductsFilter(filterProducts)
    }

    const categoryFilter = (value) => {
        const filterProducts = products.filter(product => 
            product.category === value)
            setProductsFilter(filterProducts)
    }

    const priceFilter = (priceArray) => {
        const filterProducts = products.filter( product => 
            product.price >= priceArray[0] && product.price <= priceArray[1])
            setProductsFilter(filterProducts)
    }

    const resetProductsArray = () => {
        setProductsFilter(products)
    }

    console.log(productsFilter)

    return (
        <div className="productContainer">
            <Filters 
            collectionFilter={collectionFilter}
            colorFilter={colorFilter}
            categoryFilter={categoryFilter}
            priceFilter={priceFilter}
            resetProductsArray={resetProductsArray}
            />
            {productsFilter.map( (product, i) => {
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