import React from 'react';

import {Link} from 'react-router-dom';

function Error404(props) {

    return(
        <h1>404 not found <Link to={`/`}>Return HOME</Link></h1>
    )
}

export default Error404;