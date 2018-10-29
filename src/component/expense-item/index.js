'use strict';

import React from 'react';
import ExpenseForm from '../expense-form';
import Draggable from '../draggable';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expenseEdit: false
    };

    this.toggleExpenseEdit = this.toggleExpenseEdit.bind(this);

  }

  toggleExpenseEdit() {
    this.setState({ expenseEdit: !this.state.expenseEdit })
  }

  render() {
    return (
      <section  >
        <div>
          {!this.state.expenseEdit ?
            <Draggable dataTransferItem={this.props.expense}>
              <div>
                <button onClick={() => this.props.actions.expenseDelete(this.props.expense)}>x</button>
                <button onClick={this.toggleExpenseEdit}>edit</button>
                <p>{this.props.expense.name}: <span>${this.props.expense.price}</span></p>
                {this.props.children}
              </div>
            </Draggable> :
            <ExpenseForm
              onComplete={this.props.actions.expenseUpdate}
              buttonText="update expense"
              category={this.props.category}
              expense={this.props.expense}
              toggle={this.toggleExpenseEdit} />
          }
        </div>
      </section>
    )
  };
};

export default ExpenseItem;