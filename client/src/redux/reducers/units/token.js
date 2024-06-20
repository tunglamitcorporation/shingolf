import { getType, unitsAction } from '../../actions/index.jsx'

const token = '';

const tokenReducer = (state = token, action) => {
    switch (action.type) {
        case getType(unitsAction.tokenRefresh):
            return action.payload;
        default:
            return state;
    }
}

export default tokenReducer;
