'use strict'

import React from 'react';
import CategoryForm from '../category-form'

class UpdateItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.categoryUpdate(this.props.category);
  }
  render() {
    return (
      <div className="update-item">
        <button id="update">UPDATE</button>
        {this.props.children}
      </div>
    );
  }

}

export default UpdateItem