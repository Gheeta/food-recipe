import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function ChefCard({chief}) {
  return (
    <div className='chief-card'>
    
        <img src={chief.img} alt="" />
    
        <div className='chief-card-info'>
            <h3 className='chief-card-name'>{chief.name}</h3>
            <p className='chief-recipe-count'>Recipes: <b>{chief.recipesCount}</b></p>
            <p className='chief-cuisine'>Cuisine: <b>{chief.cuisine}</b></p>
            <p className='chief-icons'>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>

            </p>
        </div>

    </div>
  )
}
