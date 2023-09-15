import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import HomeKongPromo from './images/Hong-Kong-Promo-1.jpeg'; 
import ThailandPromo from './images/Thailand-Promo-1.jpeg'; 

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Adventures!</h1> 
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem a
              src={HomeKongPromo}
              text='Explore the bustling city of Hong Kong'
              label='City Life'
              path='/Hong_Kong'
              />
              <CardItem 
              src={ThailandPromo}
              text='Explore the beautiful nature of Thailand'
              label='Nature'
              path='/Thailand'
              />
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Cards;