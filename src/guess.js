//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Result from './result';

// componentDidMount
// componentWillUnmount
// componentDidUpdate


function Guess() {
  const [guessedNumber,setGuessedNumber] = useState(0);
  const [myNumber,setMyNumber] = useState(0);
  const [result,setResult] = useState(''); // HIGH, LOW, CORRECT
  const handleSubmit = (e) => {
    if(guessedNumber > myNumber)
    {
      setResult('LOW')
    }
    else if(guessedNumber < myNumber)
    {
      setResult('HIGH')
    }
    else if(guessedNumber === myNumber)
    {
      setResult('CORRECT')
    }

  }
  const handleOnChange = (e) => {
  setMyNumber(parseInt(e.target.value))
  }
  useEffect(()=>{
    const number= Math.random()
    setGuessedNumber(parseInt(number*100))
  },[])

  return (
    <div>
      <div className='caption'>
        Guess the number between 1 to 100:
      </div>  
      <div className='number-box'>
        <input className="number" onChange={handleOnChange} type="number"/>
      </div>
      <div className="button-box">
        <button className="guess" name="Guess" onClick={handleSubmit} value="submit">Guess</button>
      </div>
      <div className='result'>
        <Result value={result} />
      </div>
    </div>
  );
}

export default Guess;
