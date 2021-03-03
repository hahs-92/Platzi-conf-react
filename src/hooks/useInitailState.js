import { useState } from 'react'

//INITIAL STATE - INFO
import initialState from '../initialState'

const useInitialState = () => {
    const [ state, setState ] = useState(initialState)

    const addToCart = payload  => {
        setState({
            ...state,
            cart: [ ...state.cart, payload ]
        })
    }

    const removeFormCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id )
        })
    }

    return {
        addToCart,
        removeFormCart,
        state
    }
}

export default useInitialState