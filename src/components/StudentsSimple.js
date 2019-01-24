import React, { Component } from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

import { studentsSelector } from './../redux/selectors/studentsSelector'

class Students extends Component {
    render() {
        const {pupils} = this.props
        return pupils ?
            <div>
                {
                    _.map(pupils, pupil=><div key={pupil.name}>{pupil.name} - {pupil.age}</div>)
                }
            </div>
             :
            <div>Loading...</div>
    }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    pupils:studentsSelector(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)