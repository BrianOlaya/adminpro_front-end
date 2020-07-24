import React from 'react';
import Spend from './Spend'


const ListSpends =({spends})=>(
    <div className="title-spends">
        <h3>Listado de gastos</h3>
            {spends.map(spend=>(
                <Spend
                  spend={spend}
                />
            ))}
    </div>

)
export default ListSpends;
 