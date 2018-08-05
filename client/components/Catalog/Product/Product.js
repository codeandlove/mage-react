import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../../actions/media';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {sku} = this.props.data;

        this.props.loadMedia(sku);
    }

    render() {

        const {data} = this.props;

        return (
            <div className="product-item">
                <div className="product-item-media">
                    <img src="" alt="" />
                </div>

                <strong className="product-item-name">
                    {data.name}
                </strong>

                <p className="product-item-price price">
                    {data.price}
                </p>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        media: state.media
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);