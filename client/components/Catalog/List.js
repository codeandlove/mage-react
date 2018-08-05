import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/products';

import Product from './Product/Product';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_page: 1,
            page_size: 5,
        }

    }

    componentDidMount() {
        this.loadNextPage();
    }

    loadNextPage = () => {
        const {current_page, page_size} = this.state;

        this.props.loadProducts(
            {
                current_page: current_page,
                page_size: page_size
            },
            () => {
                this.setState(s => {
                    return {
                        current_page: s.current_page + 1
                    }
                });
            }
        );
    };

    render() {

        const {products} = this.props;

        return (
            <div className="catalog">
                {
                    (!products.items) ? '' : (
                        <div className="grid grid-4">
                            {products.items.map((item, i) => {
                                return (
                                    <Product data={item} key={`Product-item-${i}`} />
                                )
                            })}
                        </div>
                    )
                }
                <button onClick={this.loadNextPage}>Load next page</button>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);