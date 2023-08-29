import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterAppWithContext from './counterapp-useContext-reactTracked/CounterAppWithUserContext'
import TodoReactTracked from './counterapp-useContext-reactTracked/CounterAppReactTracked'
import TodoList from './ToDoAppWithReactTrackedAnduseReducer/TodoList'
import { Provider } from './ToDoAppWithReactTrackedAnduseReducer/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1>Hellooooo</h1>
       <CounterAppWithContext />
        <TodoReactTracked /> */}

        <Provider>
          <TodoList />
        </Provider>
      </div>
    </>
  )
}

export default App
