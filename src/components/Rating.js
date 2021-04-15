import './Rating.scss';

import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const Rating = ({rating, title}) => {

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

    return (
        <div className="rating">{ratingStars(rating)}</div>
    )
}

export default Rating;