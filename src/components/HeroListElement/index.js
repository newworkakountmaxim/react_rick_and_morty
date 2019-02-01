import React from 'react';

import {Link} from 'react-router-dom';

function HeroListElement(props) {

    const {id, image, name, status, species, gender, origin, location} = props.hero;
    const nolink = props.nolinkmore;

    return(
        <article className="CharacterCard__Wrapper">
            <div data="card header" className="CharacterCard__ImgWrapper">
                <div className="card-image">
                    <img src={image} alt={name}/>
                </div>
                <div className="CharacterCard__Title">
                    <h2 className="CharacterCard__Name">{name}</h2>
                    <p className="CharacterCard__Description">id: {id} - created a year ago</p>
                </div>
            </div>
            <div data="card info" className="CharacterCard__InfoWrapper">
                <div className="CharacterCard__TextWrapper"><span>STATUS</span><p>{status}</p>
                </div>
                <div className="CharacterCard__TextWrapper"><span>SPECIES</span><p>{species}</p></div>
                <div className="CharacterCard__TextWrapper"><span>GENDER</span><p>{gender}</p>
                </div>
                <div className="CharacterCard__TextWrapper"><span>ORIGIN</span><p>{origin.name}</p></div>
                <div className="CharacterCard__TextWrapper"><span>LAST LOCATION</span>
                    <p>{location.name}</p>
                </div>
                {
                    nolink? '' :
                        <div className="CharacterCard__TextWrapper">
                            <Link to={`/personage/${id}`}>Show more...</Link>
                        </div>
                }
            </div>
        </article>
    )
}

export default HeroListElement;