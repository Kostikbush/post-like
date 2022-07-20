import './App.css';
import { useSelector } from 'react-redux';
import Comments from './Components/Comments';
import Likes from './Components/Likes';
import Spin from './Components/SpinLoader';
import Title from './Components/Title';


function App() {
  const error = useSelector(state => state.appReducer.error);
  return (
    <div className="App">
      <div className="wrap">
      <Spin/>
        <div className="card">
        {error && (
          <div className='error-message'>{error}</div>
        )}
          <div className="card-image">
            <img className='image' src="https://surfbali.ru/wp-content/uploads/2010/02/C71I6932.jpg" alt='izi' />
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
