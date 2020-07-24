import React, { Fragment } from 'react';
import {checkBudget} from '../helpers';

const ControlBudget = ({budget, remaining}) => {
    return (
        <Fragment>
            {/* <div className="">
            Presupuesto : ${budget}    
            </div> 
            <div className={checkBudget(budget, remaining)}>*/}
            <div className={checkBudget(budget, remaining)} >
           
             <h1>Disponible ${(Intl.NumberFormat().format(remaining))}</h1>
            </div>

        </Fragment>
    )
}
export default ControlBudget;