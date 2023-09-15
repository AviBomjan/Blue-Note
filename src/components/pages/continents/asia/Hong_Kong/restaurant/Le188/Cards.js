import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
        <h1>Top Attractions of Hong Kong</h1> 
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
              
            </ul>
            <ul className='cards__items'>
              
            </ul>
          </div>
        </div>
      
      <h1>Best Restaurants in Hong Kong</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            
          </ul>
          <ul className='cards__items'>
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;