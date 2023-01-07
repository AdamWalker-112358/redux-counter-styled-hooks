export default function useLocalStorage() {
    return store => next => action => {
        next(action)
        window.localStorage.setItem('state',JSON.stringify(store.getState()))
    }
}