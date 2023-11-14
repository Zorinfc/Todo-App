import React, { Component } from 'react'



class Deneme extends Component {
  render() {
    return (
        <form>
        <div className="container">
          <h1>Todo Input</h1>
          <div className="container-with-border">
            <input type="text" placeholder="New Todo" id="todoInput" />
            {/* <i class="icon fa-solid fa-book"></i>  */}
            <button type="button" id="todoAdd">
              {" "}
              Add new task
            </button>
          </div>
          <div className="container-without-border">
            <h1>Todo List</h1>
            <div className="button-group">
              <button>All</button>
              <button>Done</button>
              <button>Todo</button>
            </div>
          </div>
          <div className="todo-list">
            <div className="todo">
              <p id="todoDescription" name="test-desc">
                Learn ReactJs basis
              </p>
              <div className="action-group">
                <input type="checkbox" name="checkbox-test" id="checkboxId" />
                <i className="fa-solid fa-pen" />
                <i className="fa-solid fa-trash" />
              </div>
            </div>
            <div className="todo">
              <p id="todoDescription" name="test-desc">
                Practice ReactJs
              </p>
              <div className="action-group">
                <input type="checkbox" name="checkbox-test" id="checkboxId" />
                <i className="fa-solid fa-pen" />
                <i className="fa-solid fa-trash" />
              </div>
            </div>
            <div className="todo">
              <p id="todoDescription" name="test-desc">
                Learn Redux
              </p>
              <div className="action-group">
                <input type="checkbox" name="checkbox-test" id="checkboxId" />
                <i className="fa-solid fa-pen" />
                <i className="fa-solid fa-trash" />
              </div>
            </div>
            <div className="todo">
              <p id="todoDescription" name="test-desc">
                Code portfolio in React
              </p>
              <div className="action-group">
                <input type="checkbox" name="checkbox-test" id="checkboxId" />
                <i className="fa-solid fa-pen" />
                <i className="fa-solid fa-trash" />
              </div>
            </div>
            <div className="todo">
              <p id="todoDescription">Learn React Native</p>
              <div className="action-group">
                <input type="checkbox" name="" id="checkboxId" />
                <i className="fa-solid fa-pen" />
                <i className="fa-solid fa-trash" />
              </div>
            </div>
          </div>
          <div className="footer button-group">
            <button type="button">Delete Done Tasks</button>
            <button type="button">Delete All Tasks</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Deneme;