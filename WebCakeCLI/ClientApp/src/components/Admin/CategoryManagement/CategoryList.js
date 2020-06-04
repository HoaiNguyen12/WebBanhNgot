import React, { Component } from 'react';
import NavabarAdmin from './../NavbarAdmin';
import LeftAdmin from './../LeftAdmin';
import Category from './Category';
import { NavLink } from 'react-router-dom';
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
                        <div className="col-2" style={{ backgroundColor: '#d0a772' }}>
                            <div className="position-fixed col-2 pl-0">
                                <LeftAdmin />
                            </div>
                        </div>
                        <div className="col-10" >
                            <div className="container">
                                <h1 className="mt-3 pb-20">Quản lý loại sản phẩm <NavLink className="btn-info float-right btn-sm" to="/admin/category/create/0" >Thêm sản phẩm</NavLink>
                                </h1>
                                <h1/>
                                <table className="table table-striped table-bordered pt-20">
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
        categories: state.categories,
        login: state.login
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