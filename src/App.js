import React from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  return <>
  <Provider store = {store}>
   <div style={{width: "150px",margin: "0 auto"}}>
      <TodoInput/>
      <TodoList/>
      </div></Provider>
  </>    
}

export default App;