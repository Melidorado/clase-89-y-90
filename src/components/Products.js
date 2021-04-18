import Card from './Card';
import Filters from './Filters';
import './Products.scss';

const Products = ({products, collectionFilter, colorFilter, categoryFilter, priceFilter, resetProductsArray}) => {

    return (
        <div className="productContainer">
            <Filters 
            collectionFilter={collectionFilter}
            colorFilter={colorFilter}
            categoryFilter={categoryFilter}
            priceFilter={priceFilter}
            resetProductsArray={resetProductsArray}
            />
            {products.map( (product, i) => {
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