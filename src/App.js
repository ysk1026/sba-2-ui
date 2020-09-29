import React from 'react';
// import TodoInput from './components/TodoInput'
// import TodoList from './components/TodoList'
import store from './store'
import { Provider } from 'react-redux'
import Signup from './components/Signup'

const App = () => {
  return <>
  <Provider store = {store}>
   <div style={{width: "1000px",margin: "0 auto"}}>
      <Signup/>
      {/* <TodoInput/> */}
      {/* <TodoList/> */}
      </div></Provider>
  </>    
}

export default App;