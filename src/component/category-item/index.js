// containing indexForm component this is the array 

import React from 'react';
import CategoryForm from '../category-form'

class CategoryItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.destroy(this.props.category);
  }
  render() {
    return (
      <div className="category-item">
        <h4>{this.props.category.title}</h4>
        <p><em>${this.props.category.budget}</em></p>
        <button id="delete-button" onClick={this.handleClick}>DELETE</button>
        {this.props.children}
      </div>
    );
  }

}

export default CategoryItem