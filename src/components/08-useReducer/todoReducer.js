export const todoReducer = (state = [], action) => {
    // ? reducer recibe una accion y un estado

    switch (action.type) {
        // ? action add entonces regresamos un nuevo estado + el payload que seria la nueva tarea
        case 'add':
            return [...state, action.payload];
    
        default:
            return state;
    }
}