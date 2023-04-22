import CodeDisplay from "./components/CodeDisplay"
import MessagesDisplay from "./components/MessagesDisplay"

const App = () => {
  return (
    <div className="app">
      <MessagesDisplay/>
      <input/>
      <CodeDisplay/>
      <div className="button-container">
        <button id="get-query">Get Query</button>
        <button id="clear-chat">Cleat Chat</button>
      </div>
    </div>
  )
}

export default App
