// containing CategoryForm component
import React from 'react'

class CategoryForm extends React.Component {
  constructor(props) {
    super(props)

    // this is where category model goes:
    this.state = {
      title: props.category ? props.category.title : '',
      id: props.category ? props.category.id : null,
      timestamp: props.category ? props.category.timestamp : null,
      budget: props.category ? props.category.budget : '',

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Budget Category"
          value={this.state.title}
          onChange={this.handleChange} />
        <input
          type="number"
          name="budget"
          placeholder="$ Amount"
          value={this.state.budget}
          onChange={this.handleChange}
        />

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}

export default CategoryForm;