import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.expense ? props.expense.name : '',
      id: props.expense ? props.expense.id : null,
      timestamp: props.expense ? props.expense.timestamp : null,
      categoryId: props.category ? props.category.id : '',
      price: props.expense ? props.expense.price : 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state))
    if (this.props.toggle) this.props.toggle();
  }

  render() {
    return (
      <form className="expense-form"
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="expense"
          value={this.state.name}
          onChange={this.handleChange} />

        <input
          type="number"
          name="price"
          placeholder="$ Amount"
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button type="submit"> {this.props.buttonText}</button>
      </form>
    )
  }

}
export default ExpenseForm;