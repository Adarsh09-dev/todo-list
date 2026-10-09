import React, { Component } from 'react'
import "./TodoApp.css";

class TodoApp extends Component {

  state = {
    input: "",
    items: []
  };

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  storeItems = event => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: "",
    });

  };

  deleteitem = key => {
    //  const allitems = this.state.items;

    //  allitems.splice(key, 1);

    //  this.setState({
    //   items:allitems,
    //  })

    // another option

    this.setState({
      items: this.state.items.filter((data, index) => index !== key)
    })
  }


  render() {
    const { input, items } = this.state;

    console.log(items);


    return (
      <div className="todo-container">

        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input type="text" value={input} onChange={this.handleChange} placeholder='Enter Items.....' name="" id="" />

        </form>

        <ul>

          {items.map((data, index) => (
            <li key={index}> {data}
              <span className='del-icon' onClick={() => this.deleteitem(index)} ><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#6B0F24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></span>
            </li>
          ))}

        </ul>
      </div>
    );
  }
}

export default TodoApp;