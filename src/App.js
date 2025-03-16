import './App.css';
import CommentsList from './components/CommentsList';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message text="Привет, это мой первый компонент Message!" />
      <CommentsList />
    </div>
  );
}

export default App;
