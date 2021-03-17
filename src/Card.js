import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons'
import './Card.scss';

const Card = ({img, title, price, type, rating, isAvailable, onSale}) => {
    const onSaleLine = "On Sale!"
    const noAvailable = "no-available"
    
    const ratingStars = (rating) => {
        const rate = []
        for (let i = 0; i < rating; i++) {
            rate.push(<FontAwesomeIcon icon={faStar}/>)
        }
        if (rate.length < 5) {
            const rest = 5 - rate.length
            for (let i = 0; i < rest; i++) {
                rate.push(<FontAwesomeIcon icon={faStarRegular}/>)
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
            <div className="price__container">
                <p className="price">{price}</p>
                <FontAwesomeIcon icon={faCartPlus}/>
            </div>
            <div className="title-type-rating__container">
                <div>
                    <div className="title-on-sale">
                        <p className="title">{title}</p>
                        <span className="on-sale">{onSale && onSaleLine}</span>
                    </div>
                    <p className="type">{type}</p>
                </div>
                <div className="rating">{ratingStars(rating)}</div>
            </div>
            <div className={isAvailable ? "" :noAvailable}>
            </div>
        </div>
    )
}

export default Card;