import React, { Fragment, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import clientAxios from '../../config/axios';
import projectContext from '../../context/projects/projectContext';
import BudgetContext from '../../context/budget/budgetContext';

const BudgetQuestion = ({ saveBudget, saveRemaining, updateQuestion }) => {


    //definiendo el state
    const [quantity, saveQuantity] = useState(0);
    // const [error, saveError] = useState(false)


    //funcion que lee el preuspuesto
    const defineBudget = e => {
        saveQuantity(e.target.value)
    }

    const addBudget = async budget => {
        try {
            const result = await axios.post('/api/budget', budget);
            console.log(result);

        } catch (error) {
            console.log(error);
        }
    }

    //submit para definir el presupuesto
    const onSubmit = e => {
        e.preventDefault();

        //validar
        // if (quantity<1 || isNaN(quantity)){
        //    saveError(true);
        //    return;
        //}
        //si se  pasa la validacion
        // saveError(false);
        addBudget()
        saveBudget(quantity);
        saveRemaining(quantity);
        updateQuestion(false);
    }

    ///////////////////

    // //extraer si un proyecto esta activo
    // const projectsContext = useContext(projectContext);
    // const { project } = projectsContext;





    // //state del formulario
    // const [budgett, saveBudget] = useState({
    //     budget: 0,

    // });

    // //extraer el nombre del proyecto 
    // const { budget } = budgett;


    // //si no hay proyecto selecionado
    // if (!project) return null;

    // //array destructuring para extarer el proyecto actual
    // const [currentProject] = project;

    // //leer los valores del formulario
    // const handleChange = e => {
    //     saveBudget({
    //         ...budgett,
    //         [e.target.budget]: e.target.value
    //     })
    // }


    // const onSubmit = e => {
    //     e.preventDefault();


    //     budgett.project = currentProject._id;
    //     addBudget(budgett);


    //     //obtener y filtrar lss tareas del proyecto actual
    //     getBudgets(currentProject.id);


    //     //reiniciar el form 
    //     saveBudget({
    //         budget: 0
    //     })


    // }

    return (
        <Fragment>
            <h2>Asignar presupuesto</h2>
            <form
                onSubmit={onSubmit}
                className="form-budget"
            >
                <input
                    type="number"
                    className="input-text-budget"
                    placeholder="Ingresa le presupuesto"
                    onChange={defineBudget}
                // value={budget}

                />

                <input
                    type="submit"
                    className="btn btn-primary btn-budget"
                    value="Asignar"
                />

            </form>

        </Fragment>

    );
}
export default BudgetQuestion;