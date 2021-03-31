import Card from './Card';
import './Products.scss';

const Products = ({products}) => {
    return (
        <div className="productContainer">
            {/* <Filters /> */}
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