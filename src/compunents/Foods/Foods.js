import React from 'react';
import './Foods.css';

const Foods = (props) => {
    const { img, name, description, price } = props.foods;
    return (
        <div>
            <div className="foods">
                <div className="food-cart">
                    <img src={img} alt="" />
                    <h4>{name}</h4>
                    <h5>{description}</h5>
                    <h3>${price}</h3>
                </div>
            </div>
            
        </div>
    );
};

export default Foods;