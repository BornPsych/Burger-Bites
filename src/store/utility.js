export const updateObject = (oldState,updatedThings) => {
    return{
        ...oldState,
        ...updatedThings
    }
}