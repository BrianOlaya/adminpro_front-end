import React, { useState, useEffect } from 'react';
import BudgetQuestion from './BudgetQuestion'
import FormBudget from './FormBudget';
import ListSpends from './ListSpends';
import ControlBudget from './ControlBudget';



function Budget() {

    //definir el state
    const [budget, saveBudget] = useState(0);
    const [remaining, saveRemaining] = useState(0);
    const [showquestion, updateQuestion] = useState(true);
    const [spends, saveSpends] = useState([]);
    const [spend, saveSpend] = useState({});
    const [createspend, saveCreateSpend] = useState(false)

    //use effect que actualiza el restante
    useEffect(() => {
        if (createspend) {

            // agrega el nuevo presupuesto
            saveSpends([
                ...spends,
                spend
            ]);

            //resta el nuevo presupuesto
            const budgetRemaining = remaining - spend.quantity;
            saveRemaining(budgetRemaining);
            //resetear a false 
            saveCreateSpend(false);
        }
    }, [spend, createspend, spends, remaining])
    /////////////////////////

    //const budget = '';

    return (
        <div className="budget shadow">


            <div className="tasks-list">
                {showquestion ?
                    (
                        <BudgetQuestion
                            saveBudget={saveBudget}
                            saveRemaining={saveRemaining}
                            updateQuestion={updateQuestion}
                        />
                    ) :
                    (
                        <div className="box-budget">
                            <div className="item-budget">
                                <FormBudget
                                    saveSpend={saveSpend}
                                    saveCreateSpend={saveCreateSpend}
                                />
                            </div>

                            <div className="item-budget">

                                <ControlBudget

                                    budget={budget}
                                    remaining={remaining}
                                />
                                <ListSpends
                                    spends={spends}
                                />

                            </div>
                        </div>

                    )
                }

            </div>

        </div>
    );
}

export default Budget;