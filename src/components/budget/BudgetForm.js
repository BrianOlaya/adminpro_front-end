// import React, { useContext, useState, Fragment } from 'react';
// import projectContext from '../../context/budget/budgetContext';
// import BudgetContext from '../../context/budget/budgetContext';




// const BudgetForm = () => {

//     //extraer si un proyecto esta activo
//     const projectsContext = useContext(projectContext);
//     const { project } = projectsContext;

//     //obtener la funcion del context de tarea
//     const budgetsContext = useContext(BudgetContext);
//     const { getBudget, addBudget, validateBudget, } = budgetsContext;

//     //state del formulario
//     const [budget, saveBudget] = useState({
//         name: '',

//     });

//     console.log(budget);



//     //extraer el nombre del proyecto 
//     const { name } = budget;

//     console.log(name)
//     //si no hay proyecto selecionado
//     if (!project) return null;

//     //array destructuring para extarer el proyecto actual
//     const [currentProject] = project;

//     //leer los valores del formulario
//     const handleChange = e => {
//         saveBudget({
//             ...budget,
//             [e.target.name]: e.target.value
//         })
//     }



//     const onSubmit = e => {
//         e.preventDefault();

//         //validar 
//         if (name.trim() === '') {
//             validateBudget();
//             return;
//         }


//         //agregar la nueva tarea al state de tareas
//        // budget.project = currentProject._id;
//         addBudget(budget);



//         //obtener y filtrar lss tareas del proyecto actual
//       //  getBudget(currentProject.id);


//         //reiniciar el form 
//         saveBudget({
//             name: ''
//         })


//    }

//     return (

//         <div>
//             <h2>Asignar presupuesto</h2>
//             <form
//                onSubmit={onSubmit}
//                 className="form-budget"
//             >
//                 <input
//                     type="number"
//                     className="input-text-budget"
//                     placeholder="Ingresa le presupuesto"
//                     onChange={handleChange}
//                    name="name"
//                    value={name}

//                 />

//                 <input
//                     type="submit"
//                     className="btn btn-primary btn-budget"
//                     value="Asignar"
//                 />

//             </form>

//         </div>

//     );
// };
// export default BudgetForm;









































































// // import React, { Fragment, useState, useContext } from 'react';// como formulario de tareas
// // import projectContext from '../../context/projects/projectContext';
// // import BudgetContext from '../../context/budget/budgetContext';

// // const BudgetForm = () => {

// //     //extraer si un proyecto esta activo
// //     const projectsContext = useContext(projectContext);
// //     const { project } = projectsContext;

// //     //obtener la funcion del context de prepuspuesto
// //     const budgetsContext = useContext(BudgetContext);
// //     const { addBudget, getBudgetTotal  } = budgetsContext;


// //     //state del formulario
// //     const [budget, saveBudget] = useState({
// //         name: 0

// //     });

// //     // extarel el budget del budgetProject
// //     const { name } = budget;
// //     console.log(name);
// //     //si no hay proyecto selecionado
// //     if (!project) return null;

// //     //array destructuring para extarer el proyecto actual
// //     const [currentProject] = project;
// //     console.log(currentProject)
// //     //leer los valores del formulario
// //     const handleChange = e => {
// //         saveBudget({
// //             ...budget,
// //             [e.target.name]: e.target.value
// //         })
// //     }
// // console.log(budget);

// //     const onSubmit = e => {
// //         e.preventDefault();



// //        budget.project=currentProject._id
// //        addBudget(budget);

// //         //obtener budget
// //         getBudgetTotal(currentProject.id)

// //         //reiniciar el form
// //         // saveBudget({
// //         //     budget:''
// //         // })

// //     }

// //     return (
// //         <Fragment>
// //             <h2>Asignar presupuesto</h2>
// //             <form
// //                 onSubmit={onSubmit}
// //                 className="form-budget"
// //             >
// //                 <input
// //                     type="number"
// //                     className="input-text-budget"
// //                     placeholder="Ingresa le presupuesto"
// //                     onChange={handleChange}
// //                     name="name"
// //                     value={name}

// //                 />

// //                 <input
// //                     type="submit"
// //                     className="btn btn-primary btn-budget"
// //                     value="Asignar"
// //                 />

// //             </form>

// //         </Fragment>

// //     );

// // }

// // export default BudgetForm;