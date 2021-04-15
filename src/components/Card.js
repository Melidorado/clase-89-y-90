import './Card.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Rating from './Rating';

const Card = ({img, title, price, type, rating}) => {
    
    return (
        <div className="card">
            <div className="image__container">
                <img src={img} alt={title}></img>
            </div>
            <div className="content__container">
                <div className="title-type-rating__container">
                    <h4 className="title">{title}</h4>
                    <p className="type">{type}</p>
                    <Rating
                    rating={rating}
                    title={title}
                    />
                </div>
                <div className="price__container">
                    <p className="price">{`$ ${price}`}</p>
                    <ShoppingCartIcon className="shop"/>
                </div>
            </div>
        </div>
    )
}

export default Card;