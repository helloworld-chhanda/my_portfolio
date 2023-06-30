//import logo from './logo.svg';
import './App.css';
import Guess from './guess';
import ResumeImage from './image/resume.png';


function App() {
  

  return (
    <div>
      <div className='image'>
        {/*<img src={ResumeImage}  alt='resume'/>*/}
        Hello !
        I am Chhanda Naskar.
      </div>
      <div className='button'>
        <button>Download Resume</button>
      </div>
      <div>
        <Guess />
      </div>
    </div>
  );
}

export default App;
