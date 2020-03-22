import React, { useState, useEffect } from 'react';

function Foods () {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://drive.google.com/open?id=1uecCZcs4boIc2WFLlygqW7loc6Rfkmkh')
        .then(res => res.json())
        .then(data => setFoods(data));
        console.log(foods);
    },[ ])
    return (
        <div>
            <h4>Food Quantiti: {foods.length}</h4>
            <h4>foods Name : {foods.name}</h4>
        </div>
    );
};

export default Foods;