import React from 'react';

const Spend = ({spend})=>(
    <li className="list-spend"> 
        <h4 className="spend">{spend.namespend}    <span className="value-spend">    $ {spend.quantity}</span></h4>
    </li>
);
export default Spend;