// containing indexForm component this is the array 

import React from 'react';

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
        <button id="delete-button" onClick={this.handleClick}>x</button>
        <h4>{this.props.category.title}</h4>
        <p>{this.props.category.timestamp.toString()}</p>
        <p><em>${this.props.category.budget}</em></p>
        {this.props.children}
      </div>
    );
  }

}

export default CategoryItem