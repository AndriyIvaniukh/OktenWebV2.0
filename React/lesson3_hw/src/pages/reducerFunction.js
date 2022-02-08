const reducer = (state, action) => {

    switch (action.type){
        case 'ADD_CAT':
            return {...state,  cats:[...state.cats, {name: action.payload}] };
        case 'ADD_DOG':
            return {...state,  dogs:[...state.dogs, {name: action.payload}] };
        case 'DELETE_CAT':
            return {...state,  cats:[...state.cats.filter(cat => cat.name !== action.payload)] };
        case 'DELETE_DOG':
            return {...state,  dogs:[...state.dogs.filter(dog => dog.name !== action.payload)] };
        default:
            return state;
    }

    return state;
}

export default reducer;