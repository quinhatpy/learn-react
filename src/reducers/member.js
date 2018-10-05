import { LOGIN_MEMBER } from './../constants/ActionType';

const initialState = {
    id: 0,
    name: '',
    email: '',
    password: '',
    avatar: '',
    phone: '',
    address: '',
    roleId: 0
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_MEMBER: {
            console.log(action);
            return { ...state }
        }

        default:
            return state
    }
}
