import React, { Component } from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

import { coinSelector } from '../redux/selectors/coinSelector'

class Coin extends Component {
    render() {
        const {root} = this.props
        return root ?
            <div>
                {
                    _.map(root, root=><div key={root.name}>{root.name}</div>)
                }
            </div>
             :
            <div>Loading...</div>
    }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    root:coinSelector(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Coin)