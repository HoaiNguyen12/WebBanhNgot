import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actGetCategoryRequest, actAddCategoryRequest, actEditCategoryRequest } from '../../../actions/category';

class categoryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: 0,
            categoryName: ''
        };
    }

    componentDidMount() {
        console.log(this.props.match);
        const { type, id } = this.props?.match?.match?.params;
            //console.log(this.props,'props')
            if (type === 'edit') {
                this.props.fetchCategory(id);
                //this.setState({ file: "images/" + this.props.products.productImage }); // API lấy sản phẩm qua id
                //this.setState({ product : this.props.product })
            }
        
        //var id = useParams();
        //console.log(id);

    }

    SaveCategory() {
        if (this.state.categoryId == 0) {
            console.log(this.state, "create");
            this.props.addCategory(this.state);
        }
        else {
            console.log(this.state, "edit");
            this.props.editCategory(this.state);
        }
        window.open('/admin/categoryList','_self');
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name; //txtName, txtPhone
        var value = target.value;
        console.log(name + " " + value, "change")
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditCategory) {
            var { itemEditCategory } = nextProps;
            this.setState({
                categoryId: parseInt(itemEditCategory.categoryId),
                categoryName: itemEditCategory.categoryName
            });

            console.log(this.state, "receive");
        }
    }

    render() {
        console.log(this.props);
        return(
            <div className="container p-5">
                <h1 style={{textAlign: 'center'}}>Thêm loại sản phẩm</h1>
                <form >
                    <div className="form-group">
                        <label style={{ fontSize: '18px' }}>Tên loại sản phẩm: </label>
                        <input type="text" value={this.state.categoryName} name="categoryName" onChange={this.onChange} className="form-control" required />
                    </div>
                    <Link className="btn btn-primary mr-2" to="/admin/categoryList">Quay Lại</Link>
                    <button type="button" className="btn btn-primary" onClick={() => this.SaveCategory()}>Lưu Lại</button>
                </form>
            </div>
        )
    }
}

var mapStateToProps = state => {
    return {
        itemEditCategory: state.itemEditCategory
    }
}

var mapDispathToProps = (dispatch, props) => {
    return {
        fetchCategory: (id) => {
            dispatch(actGetCategoryRequest(id));
        },
        addCategory: (id) => {
            dispatch(actAddCategoryRequest(id));
        },
        editCategory: (category) => {
            dispatch(actEditCategoryRequest(category));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(categoryForm);