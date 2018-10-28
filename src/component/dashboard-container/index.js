// containing Dashboard component
'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as utils from '../../lib/util'

import {
  categoryCreate,
  categoryUpdate,
  categoryReset,
  categoryDelete
} from '../../actions/category-actions';
import CategoryItem from '../category-item/index';

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../actions/expense-actions';


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
        <CategoryForm buttonText='Create' onComplete={this.props.actions.categoryCreate} />
        <h3>Budget Categories</h3>
        {utils.renderIf(this.props.categories,
          <div>
            {this.props.categories.map(item =>
              <CategoryItem key={item.id} category={item} actions={this.props.actions} expenses={this.props.expenses[item.id]} />)}
          </div>
        )}

      </main>
    )
  }
}



export const mapStateToProps = state => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  }
};

export const mapDispatchToProps = (dispatch, getState) => {
  return {
    actions: {
      categoryCreate: category => dispatch(categoryCreate(category)),
      categoryUpdate: category => dispatch(categoryUpdate(category)),
      categoryDelete: category => dispatch(categoryDelete(category)),
      expenseCreate: expense => dispatch(expenseCreate(expense)),
      expenseUpdate: expense => dispatch(expenseUpdate(expense)),
      expenseDelete: expense => dispatch(expenseDelete(expense)),
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);