export const increment =(payload) =>{
    return{
        type: 'INCREMENT',
        payload: payload
    }
}

export const decrement =(payload) =>{
    return{
        type: 'DECREMENT',
        payload: payload
    }
}

export const resetAll =() =>{
    return{
        type: 'RESET'
    }
}

export const deleteRecord =(payload) =>{
    return{
        type: 'DELETE',
        payload: payload
    }
}