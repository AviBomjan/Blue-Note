import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

import HorseRacePromo from './images/Horse-Race-1.jpeg';
import BigBuddhaPromo from './images/Big-Buddha.jpeg';
import VictoriaPeakPromo from './images/Victoria-Peak-1.jpeg';

import DisneyLandPromo from './images/Hong-Kong-Disneyland-1.jpeg';
import CheungChauPromo from './images/Cheung-Chau-1.jpeg';
import LKFNightClubPromo from './images/lkf-nightclub-1.jpeg';
import CantoneseOperaPromo from './images/Cantonese-Opera-1.jpeg';

import MonKeeCafePromo from './images/Mon-Kee-Cafe-Promo-1.jpg'
import SingHeungYuenPromo from './images/Sing-Heung-Yuen-Promo-1.jpeg';
import BigJJPromo from './images/Big-JJ-Promo-1.jpeg';
import AustraliaDairyCompanyPromo from './images/Australia-Dairy-Company-Promo-1.png';
import Le188Promo from './images/Le188-1.jpeg';

function Cards() {
  return (
    <div className='cards'>
        <h1>Top Attractions of Hong Kong</h1> 
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
              <CardItem 
                src={HorseRacePromo}
                text='Happy Valley Racecourse &emsp;&emsp;&emsp;&emsp;'
                label='Horse Racing'
                // path='/Hong_Kong_Island'
              />
              <CardItem 
                src={BigBuddhaPromo}
                text='Big Buddha &emsp;&emsp;&emsp;&emsp;'
                label='Spiritual Experience'
                // path='/New_Territories'
              />
              <CardItem 
                src={VictoriaPeakPromo}
                text='Victoria Peak &emsp;&emsp;&emsp;&emsp;'
                label='City Exploration'
                // path='/New_Territories'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem 
                src={DisneyLandPromo}
                text='Disney Land (Hong Kong) &emsp;&emsp;'
                label='Amusement Park'
                // path='/Hong_Kong_Island'
              />
              <CardItem 
                src={CheungChauPromo}
                text='Cheung Chau &emsp;&emsp;'
                label='Island Exploration'
                // path='/New_Territories'
              />
              <CardItem 
                src={LKFNightClubPromo}
                text='Lan Kwai Fong &emsp;&emsp;'
                label='Night Life'
                // path='/New_Territories'
              />
              <CardItem 
                src={CantoneseOperaPromo}
                text='Xiqu Centre &emsp;&emsp;'
                label='Chinese Opera'
                // path='/New_Territories'
              />
            </ul>
          </div>
        </div>
      
      <h1>Best Restaurants in Hong Kong</h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Le188Promo}
              text='Le 188° Restaurant & Lounge'
              label='Contemporary'
              path='/Le_188'
            />
            <CardItem
              src={MonKeeCafePromo}
              text='Mon Kee Cafe (Quarry Bay, Tsim Sha Tsui, Wan Chai)'
              label='Cafe'
              path='/Hong_Kong'
            />
            <CardItem
              src={BigJJPromo}
              text='Big JJ (Central)'
              label='Seafood Hotpot'
              path='/Thailand'
            />
            <CardItem
              src={AustraliaDairyCompanyPromo}
              text='Australia Dairy Company (Jordan)'
              label='Dinner'
              path='/Hong_Kong'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={SingHeungYuenPromo}
              text='Sing Heung Yuen(Central)'
              label='Restaurant'
              path='/Thailand'
            />
            
            <CardItem
              src='{ThailandPromo}'
              text='Traditional Steamed Vermicelli Rice (???)'
              label='???'
              path='/Thailand'
            />
            <CardItem
              src='{ThailandPromo}'
              text='Wah Fai (???)'
              label='???'
              path='/Thailand'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;