export const todoReducer = (state = [], action) => {
    // ? reducer recibe una accion y un estado

    switch (action.type) {
        // ? action add entonces regresamos un nuevo estado + el payload que seria la nueva tarea
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return state.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo);
        case 'toggle-old':
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            });
    
        default:
            return state;
    }
}