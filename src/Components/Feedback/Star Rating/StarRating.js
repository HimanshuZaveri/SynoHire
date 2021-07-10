import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import classes from './StarRating.module.css';

const StarRating = (props) => {
    const arr = [1, 2, 3, 4, 5];
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    return (
        <div className={props.className}>
            {arr.map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label> 
                        <input 
                            type = 'radio' 
                            name='rating' 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue) } 
                            /> 
                        <FaStar 
                            className={classes.star} 
                            size='25px' 
                            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(ratingValue)}    
                        /> 
                    </label>
                )
            })}
        </div>
    );
};

export default StarRating;
