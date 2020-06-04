import React, { Component } from 'react';
import NavabarAdmin from './../NavbarAdmin';
import LeftAdmin from './../LeftAdmin';
import Category from './Category';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchCategoryRequest } from '../../../actions/category';

class CategoryList extends Component {
    showCategory(categories) {
        var list = null;
        if (categories.length > 0) {
            list = categories.map((category, index) => {
                return (<Category key={index}
                    stt={index}
                    category={category}/>)
            })
        }
        return list;
    }

    componentWillMount() {
        this.props.fetchCategory();
    }
    render() {
        var { categories } = this.props;
        return(
            <div>
                <NavabarAdmin />
               <div className="themed-container" fluid="sm" style={{height: '600px'}}>
                    <div className="row" style={{height: '600px'}}>
                        <div className="col-3" style={{backgroundColor:'#d0a772'}}>
                            <LeftAdmin />
                        </div>
                        <div className="col-9" >
                            <div className="container">
                                <h1 className="mt-3">Quản lý loại sản phẩm</h1>
                                <Link type="button" className="btn btn-info btn-sm mb-3" to="/admin/category/create/0">Thêm loại sản phẩm</Link>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="text-center">STT</th>
                                            <th className="text-center">Tên loại sản phẩm</th>
                                            <th className="text-center">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.showCategory(categories)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        fetchCategory: () => {
            dispatch(actFetchCategoryRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CategoryList);