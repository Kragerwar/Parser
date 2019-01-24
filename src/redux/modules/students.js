import _ from 'lodash'
import { createAction , handleActions } from 'redux-actions'
import { resolve, request, reject } from 'redux-promised'


// ------------------------------------
// Constants
// ------------------------------------
export const NAMESPACE = 'students'
export const GET_STUDENTS = NAMESPACE+'/'+'GET_STUDENTS'
export const REVERSE_STUDENTS = NAMESPACE+'/'+'REVERSE_STUDENTS'

const url  = 'http://www.mocky.io/v2/5c49a1cf32000048310b5999'


// ------------------------------------
// Actions
// ------------------------------------
const getStudents = () => {
    return{
        type: GET_STUDENTS,
        meta: { promise: true },
        payload: fetch(url, {
            method: 'GET',
            mode:'cors'
        }).then(response=>response.json())
    }
}

export const reverseStudents  = createAction(REVERSE_STUDENTS)


export const actions = {
    getStudents,
    reverseStudents
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [resolve(GET_STUDENTS)]: (state, { payload }) => {
        return{...state, data:payload, dataFethcing:false}
    },
    [reject(GET_STUDENTS)]: (state, { payload }) => ({...state, data:null, dataFethcing:false}),
    [request(GET_STUDENTS)]: (state, { payload }) => ({...state, data:null, dataFethcing:true}),
    [REVERSE_STUDENTS]:state => {return {...state, reversed:!state.reversed}}
},{reversed:false})

// ------------------------------------
// Helpers
// ------------------------------------



