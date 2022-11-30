export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            //throw new Error('Action.type = ABC no esta implementada')
             return [...initialState, action.payload];
    
        default:
            return initialState;
    }
}