const reducer = (state, action) => {
    const name = action.payload.name;
    const field = action.payload.field;

    switch (action.type){
        case 'inc':
            return state= {...state, [name]: field + 1};
        case 'dec':
            return state= {...state, [name]: field - 1};
        case 'reset':
            return state= {...state, [name]: action.payload.default};
        default:
            console.log('wrong');
    }
}

export default reducer;