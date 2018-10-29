// containing indexForm component this is the array 

import React from 'react';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form/index';
import ExpenseItem from '../expense-item/index';

import DropZone from '../dropzone/index'


class CategoryItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryEdit: false,
      expenseEdit: false,
      expenseCreate: false,
    }


    this.handleDelete = this.handleDelete.bind(this);
    this.toggleCategoryEdit = this.toggleCategoryEdit.bind(this);
    this.toggleExpenseCreate = this.toggleExpenseCreate.bind(this);
    this.handleDropzoneComplete = this.handleDropzoneComplete.bind(this);
  }

  handleDropzoneComplete(err, expense) {
    if (err)
      return console.error(err);

    this.props.actions.expenseDelete(expense);

    expense.categoryId = this.props.category.id;

    this.props.actions.expenseCreate(expense);
  }

  handleDelete(e, category) {
    this.props.actions.categoryDelete(category)
  }

  toggleCategoryEdit() {
    //add an if statement target.category
    this.setState({ categoryEdit: !this.state.categoryEdit })
  }

  toggleExpenseCreate() {
    this.setState({ expenseCreate: !this.state.expenseCreate })
  }

  render() {
    return (
      <section onDoubleClick={this.toggleCategoryEdit} className="budget-item">

        <h4>Category</h4>
        {this.state.categoryEdit ?
          <CategoryForm
            buttonText="update category"
            onComplete={this.props.actions.categoryUpdate}
            category={this.props.category}
            toggle={this.toggleCategoryEdit} /> :

          <div>
            <DropZone onComplete={this.handleDropzoneComplete}>
              <button onClick={(ev) => this.handleDelete(ev, this.props.category)}>x</button>
              <button onClick={this.toggleExpenseCreate}>+ expense</button>
              <p>{this.props.category.title}: <span>${this.props.category.budget}</span></p>

              {this.state.expenseCreate ?
                <ExpenseForm
                  onComplete={this.props.actions.expenseCreate}
                  buttonText="create expense"
                  category={this.props.category}
                  toggle={this.toggleExpenseCreate} /> :
                undefined
              }

              {this.props.expenses.length ?
                <aside className="expense-list">

                  <h4>Expenses</h4>
                  {this.props.expenses.map(expense => {
                    return <ExpenseItem
                      key={expense.id}
                      expense={expense}
                      category={this.props.category}
                      actions={this.props.actions} />
                  })}

                </aside> :
                undefined
              }
            </DropZone>
          </div>
        }

      </section>
    )
  }
}

export default CategoryItem;