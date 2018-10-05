import { SET_CURRENT_MEMBER } from './../constants/ActionType';
import api from '../utils/axios';
import setAuthorizationToken from './../utils/setAuthorizationToken';
import { toastr as Toast } from 'react-redux-toastr'
import * as Loading from './Loading';


export const loginMemberRequest = (userInfo) => {
    return dispatch => {
        api.post('auth/login', userInfo)
            .then(res => {
                let token = res.data.data.access_token;
                console.log(token);
                localStorage.setItem('accessToken', token);
                setAuthorizationToken(token);

                getUser().then(user => {
                    dispatch(setCurrentMember(user));
                })
                Toast.success('Thông báo', 'Đăng nhập thành công!');
                dispatch(Loading.changeLoadingStatus(false));
            }).catch(err => {
                console.log(err);
                Toast.error('Có lỗi xảy ra', err.response.data.message);
                dispatch(Loading.changeLoadingStatus(false));
            });
    }
}
export const setCurrentMember = (user) => ({ type: SET_CURRENT_MEMBER, user });

export function getUser() {
    return api.get('auth/user')
        .then(res => {
            return res.data;
        }).catch(err => {
            Toast.error('Có lỗi xảy ra', err.response.data.message);
        });
}