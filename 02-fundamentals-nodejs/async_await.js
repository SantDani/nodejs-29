const employees = [
    {
        id: 1,
        name: 'Fernando'
    },
    {
        id: 2,
        name: 'Linda'
    },
    {
        id: 3,
        name: 'Karen'
    }
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    },
    {
        id: 3,
    }
];

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        const employee = employees.find(e => e.id === id)?.name;
        (employee)
            ? resolve(employee)
            : reject(`No employee exists with id ${id}`);
    });
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(s => s.id === id)?.salary;
        (salary)
            ? resolve(salary)
            : reject(`No salary exists with id ${id}`);
    });
}

// async transforma una function a una promesa que se recoge con .then
// el await solo se puede utiliza dentro de funciones async 

/**
 * ! ERRORS 
 *  UnhandledPromiseRejectionWarning: Unhandled promise rejection, 
 *      se da cuando no se gestiona un error de una promesa o funcion async
 * 
 * */

getInfoUser = async (id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(id);

        return `The salary from employee: ${employee} is ${salary}`
    } catch (error) {
        return error;   // * correct execution and go by .then, we handle exception
        //throw error;    // * incorrect execution and go by .catch  we dont handle exception
    }
}

const idEmployee = 3;

getInfoUser(idEmployee)
    .then(msg => console.log(msg))
    .catch(error => console.log(error));