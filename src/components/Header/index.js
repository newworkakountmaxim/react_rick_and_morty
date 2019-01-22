import React from 'react';
import './style.css'


function Header(props) {
    const {title,sub_title,sub_title_hidden} = props;
    return(
        <section className="Header ">
            <h1 className="Home__Title">{title}</h1>
            <div className="Home__SubTitleWrapper">
                <h2 className="Home__SubTitle">{sub_title}</h2>
                <h2 className="Home__HiddenSubTitle">{sub_title_hidden}</h2>
            </div>
        </section>
    )
}

export default Header;