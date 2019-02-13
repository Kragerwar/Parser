//import _ from 'lodash'
import { /*createAction ,*/ handleActions } from 'redux-actions'
import { resolve, request, reject } from 'redux-promised'


// ------------------------------------
// Constants
// ------------------------------------
export const NAMESPACE = 'coin';
export const GET_COIN = NAMESPACE+'/GET_COIN';

//const url = 'http://www.mocky.io/v2/5c4aea223400006d00269735';

const url = ' http://km.softbistro.online:20080/coins/ ';

// ------------------------------------
// Actions
// ------------------------------------
const getCoin= () => {
    return{
        type: GET_COIN,
        meta: { promise: true },
        payload: fetch(url, {
            method: 'GET',
            mode:'cors'
        }).then(response=>response.json())
    }
};

//export const addStudents  = createAction(ADD_STUDENTS);

//export const deleteStudents  = createAction(DELETE_STUDENTS);

export const actions = {
    getCoin
};




// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [resolve(GET_COIN)]: (state, { payload }) => {console.log('got request',payload);return {...state, data:payload, dataFethcing:false}},
    [reject(GET_COIN)]: (state, { payload }) => { console.log('reject request',payload); return {...state, data:null, dataFethcing:false, err:payload}},
    [request(GET_COIN)]: (state) => { console.log('sending request'); return {...state, data:null, dataFethcing:true}},
    //[ADD_STUDENTS]:(state, s) => { console.log(s); state.data.push(s.payload);return {...state, data: _.clone(state.data)}},
    //[DELETE_STUDENTS]: (state, { payload }) => { return{...state, data: _.filter(state.data, user=>user.id!==payload)}}
}, {reversedFlag:false}
)

// ------------------------------------
// Helpers
// ------------------------------------



