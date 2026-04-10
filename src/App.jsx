import Greeting from './components/Greeting/Greeting.jsx'
import Message from './components/Message/Message.jsx'
import Button from './components/Button/Button.jsx'
import './App.css'

function App() {
 const handleButtonClick = () => {
    console.log("Кнопка натиснута! Працює.");
  };

  return (
    <>
      <div className="App">
      <Greeting name="Боб" />
      <Message text="Це довільне повідомлення ." />
      <Button onClick={handleButtonClick} />
    </div>
    </>
  )
}

export default App
