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
import UpdateItem from '../category-update/index';

// get form component
import CategoryForm from '../category-form/index';


class DashboardContainer extends React.Component {

  componentDidMount() {
    console.log('__DASHBOARD__', this)

    // this.props.categoryCreate({ title: 'groceries' });
  }

  render() {
    return (
      <main className="dashboard-container">
        <h2> Budget Dashboard </h2>
        <CategoryForm
          buttonText='add to budget'
          onComplete={this.props.categoryCreate} />
        <h2> Budget Categories </h2>
        {console.log(this.props.categories)}
        <ul>
          {this.props.categories.map(category => {
            return <li key={category.id}>

              <CategoryItem
                category={category}
                destroy={this.props.categoryDelete}
                title={category.title}
                budget={category.budget}>
                <UpdateItem buttonText="Update"
                  category={category}
                  onComplete={this.props.categoryUpdate} />

              </CategoryItem>

            </li>

          })}
        </ul>
      </main>
    )
  }

}

const mapStateToProps = state => {
  return {
    categories: state
  }
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    categoryReset: category => dispatch(categoryReset(category)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);