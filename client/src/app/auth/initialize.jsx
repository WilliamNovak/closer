import { setUser } from './actions'
import { USER } from '../../consts'

export const sessions = (store) => {
    const user = window.sessionStorage.getItem(USER)
    if (user) {
        store.dispatch(setUser(JSON.parse(user)))
    }
}
