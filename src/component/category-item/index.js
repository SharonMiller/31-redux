// containing indexForm component this is the array 

import React from 'react';
import CategoryForm from '../category-form'


class CategoryItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryEdit: false,
    }


    this.handleDelete = this.handleDelete.bind(this)
    this.toggleCategoryEdit = this.toggleCategoryEdit.bind(this)
  }
  handleDelete(e) {
    this.props.destroy(this.props.category);
  }

  toggleCategoryEdit() {
    this.setState({ categoryEdit: !this.state.categoryEdit })
  }
  render() {
    return (
      <section onDoubleClick={this.toggleCategoryEdit}>
        {this.state.categoryEdit ?
          <CategoryForm
            buttonText="update category"
            onComplete={this.props.onComplete}
            category={this.props.category}
            toggle={this.toggleCategoryEdit} /> :
          <div>
            <p>{this.props.category.title}</p>
            <p>${this.props.category.budget}</p>
            <button onClick={this.handleDelete}> X </button>



          </div>
        }
      </section>
    )
  }
};

export default CategoryItem;
