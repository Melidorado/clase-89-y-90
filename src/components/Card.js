import './Card.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const Card = ({img, title, price, type, rating}) => {

    const ratingStars = (rating) => {
        const rate = []
        for (let i = 0; i < rating; i++) {
            rate.push(<StarRoundedIcon key={title + i} className="star"/>)
        }
        if (rate.length < 5) {
            const rest = 5 - rate.length
            for (let i = 0; i < rest; i++) {
                rate.push(<StarOutlineRoundedIcon key={title + i + rest} className="star"/>)
            }
            return (
                <div>{rate}</div>
            )
        }
        else {
            return(
                <div>{rate}</div>
            )
        }
       
        
    }
    
    return (
        <div className="card">
            <div className="image__container">
                <img src={img} alt={title}></img>
            </div>
            <div className="content__container">
                <div className="title-type-rating__container">
                    <h4 className="title">{title}</h4>
                    <p className="type">{type}</p>
                    <div className="rating">{ratingStars(rating)}</div>
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