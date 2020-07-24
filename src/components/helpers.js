export const checkBudget =(budget, remaining)=>{
    let clas;

    if((budget/4)> remaining){
        clas='remainig-red';
    } else if ((budget/2)> remaining){
        clas='remaining-yellow';
    }else{
        clas='remainig-green';
    }
    return clas;
}