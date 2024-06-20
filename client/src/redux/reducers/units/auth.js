
import { authAction, getType } from '../../actions/index.jsx';

const initialState = {
    user: [],
    isLoggedIn: false,
    isAdmin: false,
    isSupport: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case getType(authAction.login):
            return {
                ...state,
                isLoggedIn: true
            }
        case getType(authAction.getUser):
            return {
                ...state,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin,
                isSupport: action.payload.isSupport,
            }
        default:
            return state
    }
}

export default authReducer;