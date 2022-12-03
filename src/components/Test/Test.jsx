import React from 'react';

const Test = ({condicion}) => {
    return(
        <>
        { condicion ? <h2>Hola</h2> : <h2>Adiós</h2> }    
        </>
    )

}

export default Test;
