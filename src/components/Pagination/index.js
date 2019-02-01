import React from 'react';

import './style.css';
import PaginationElement from "../PaginationElement";

function Pagination(props) {

    const {pagenum=1, info} = props;
    //console.log(`isdisabled:: ${isdisabled}`);
    return(
            <nav>
                <ul className = "Pagination__Nav">
                    <PaginationElement linkText={info.prev} linkName="Prev" link={+pagenum-1}/>
                    <li><a href="#">{pagenum}</a></li>
                    <PaginationElement linkText={info.next} linkName="Next" link={+pagenum+1}/>
                </ul>
            </nav>
    )
}

export default Pagination;