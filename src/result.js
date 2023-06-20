import React from 'react'

function Result(props) 
{
    const result = props.value;
    console.log(props)
    return(
        <div>
            {
          (result==='HIGH') ? (
            <div>
              Your number is Higher
            </div>
          ) : (result==='LOW') ? (
            <div>
              Your number is Lower
            </div>  
          ) : (result==='CORRECT') ? (
            <div>
              Your number is CORRECT
            </div>
          ) : null
        }
        </div>
    )

}
export default Result