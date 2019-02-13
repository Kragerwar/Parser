//import _ from 'lodash'

/*export const studentsSelector = state => {
    return state.students.reversedFlag ?  _.reverse(_.clone(state.students.data)) : _.clone(state.students.data)
}*/
export const coinSelector = state => state.coin;

//export const studentsReversedSelector = state => _.reverse(state.students.data) || []
export const isFetchingSelector = state => state.coin;
