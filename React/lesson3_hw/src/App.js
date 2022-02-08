import React, {useReducer} from 'react';

import Buttons from "./components/Buttons";
import reducer from "./reducerFunction";

const App = () => {

const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});

    return (
        <div>
            first counter: {state.counter1} <Buttons dispatch={dispatch} name={'counter1'} field={state.counter1}/>
            second counter: {state.counter2}  <Buttons dispatch={dispatch} name={'counter2'} field={state.counter2}/>
            third counter: {state.counter3}  <Buttons dispatch={dispatch} name={'counter3'} field={state.counter3}/>
        </div>
    );
};

export default App;