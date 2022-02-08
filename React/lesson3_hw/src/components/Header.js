import React from 'react';

import "./Header.css"

const Header = ({dispatch, state}) => {

    const submitCat = (e) => {
        e.preventDefault();
        if (e.target.catName.value.length) {
            dispatch({type: 'ADD_CAT', payload: e.target.catName.value});
        }
        e.target.reset();
    }

    const submitDog = (e) => {
        e.preventDefault();
        if (e.target.dogName.value.length) {
            dispatch({type: 'ADD_DOG', payload: e.target.dogName.value});
        }
        e.target.reset();
    }

    return (
        <div className={'header'}>
            <>
                <form onSubmit={submitCat}>
                    <input type={"text"} placeholder={'Add cat'} name={'catName'}/>
                    <button>add</button>
                </form>
            </>
            <>
                <form onSubmit={submitDog}>
                    <input type={"text"} placeholder={'Add dog'} name={'dogName'}/>
                    <button>add</button>
                </form>
            </>
        </div>
    );
};

export default Header;