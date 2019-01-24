import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from './../redux/modules/students'
import _ from 'lodash'

import { studentsSelector, isFetchingSelector } from './../redux/selectors/studentsSelector'

class Students extends Component {
    componentDidMount(){
        this.props.getStudents()
    }
    render() {
        const {pupils, isFetching} = this.props
        return pupils && !isFetching ?
            <div>
                {
                    _.map(pupils, pupil=><div key={pupil.name}>{pupil.name} - {pupil.age}</div>)
                }
                <button onClick={this.handleClick.bind(this)}>Reverse</button>
            </div>
             :
            <div>Loading...</div>
    }

    handleClick(){
        this.props.reverseStudents()
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    pupils:studentsSelector(state),
    isFetching:isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)