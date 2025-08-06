import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './components/MyComponent';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
      <div>
        Hello world with Minh Thang
          <MyComponent></MyComponent>
      </div>
  );
}

export default App;
