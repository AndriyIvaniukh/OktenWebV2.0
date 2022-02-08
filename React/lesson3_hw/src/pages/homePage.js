import React, {useReducer} from 'react';

import Header from "../components/Header";
import AninalsList from "../components/AninalsList";
import reducer from "./reducerFunction";

const HomePage = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div>
            <Header dispatch={dispatch} state={state}/>
            <AninalsList dispatch={dispatch} state={state}/>
        </div>
    );
};

export default HomePage;