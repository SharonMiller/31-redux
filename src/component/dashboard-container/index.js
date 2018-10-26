// containing Dashboard component
'use strict';

import React from 'react';
import { connect } from 'react-redux';

import {
  categoryCreate,
  categoryUpdate,
  categoryReset,
  categoryDelete
} from '../../actions/category-actions';
import CategoryItem from '../category-item/index';


// get form component
import CategoryForm from '../category-form/index';


class DashboardContainer extends React.Component {

  componentDidMount() {
    console.log('__DASHBOARD__', this)

    // this.props.categoryCreate({ title: 'groceries' });
  }

  render() {
    return (
      <main id="dashboard-container">
        <h2>Budget Dashboard</h2>
        <CategoryForm buttonText='Create' onComplete={this.props.categoryCreate} />
        <h3>Budget Categories</h3>
        <ul>
          {this.props.categories.map(category => {
            return <li key={category.id}>
              <CategoryItem category={category} destroy={this.props.categoryDelete} onComplete={this.props.categoryUpdate}>
              </CategoryItem>
            </li>
          })}
        </ul>
      </main>
    )
  }
}



export const mapStateToProps = state => {
  return {
    categories: state
  }
};

export const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    categoryReset: category => dispatch(categoryReset(category)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);