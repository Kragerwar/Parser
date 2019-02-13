import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from '../redux/modules/coin'
import _ from 'lodash'
import { coinReversedSelector, isFetchingSelector } from '../redux/selectors/coinSelector'

class ReverseCoin extends Component {
    render() {
        const {pupils, isFetching} = this.props;
        return pupils && !isFetching ?
            _.map(root, root=><div key={root.name}>{root.name}</div>) :
            <div>Loading...</div>
    }
}

const mapDispatchToProps = {
    ...actions
};

const mapStateToProps = (state) => ({
    pupils:coinReversedSelector(state),
    isFetching:isFetchingSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ReverseCoin)