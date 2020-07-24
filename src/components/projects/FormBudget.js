import React, { useState } from 'react';
import shortid from 'shortid';

const FormBudget = ({ saveSpend, saveCreateSpend }) => {

    const [namespend, saveNameSpend] = useState('');
    const [quantity, saveQuantity] = useState(0);


    const addSpend = e => {
        e.preventDefault();

        //construir  el gasto
        const spend = {
            namespend,
            quantity,
            id: shortid.generate() //PENDIENTE POR ASIGNAR ID CON MONGO        
        }
        console.log(spend);

        //pasar el gasto al componente principal
        saveSpend(spend);
        saveCreateSpend(true);

        //resetear el formulario
        saveNameSpend('');
        saveQuantity(0)
    }
    return (
        <form
            onSubmit={addSpend}
        >
            <div className="form-budget-camp">
                <h3>Nombre del gasto</h3>
                <input
                    type="text"
                    className=""
                    placeholder="Ej. Materia prima"
                    value={namespend}
                    onChange={e => saveNameSpend(e.target.value)}
                />
            </div>

            <div className="form-budget-camp">
                <h4 >Costo asignado</h4>
                <input
                    type="number"
                    className=""
                    placeholder="Ej. 50000"
                    value={quantity}
                    onChange={e => saveQuantity(e.target.value)}
                />
            </div>

            <input
                type="submit"
                className=""
                value="Agregar"
            />

        </form>

    )
}

export default FormBudget;