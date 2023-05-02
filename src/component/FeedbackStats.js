import React, { useContext }  from 'react'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackStats() {
  const {feedback} = useContext (FeedbackContext)
    //Calculatin Average
    let average = feedback.reduce((acc, cur) =>{
        return acc + cur.rating
    }, 0) / feedback.length
    average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='flex shadow-2xl bg-slate-400 my-2'>
      <h4 className= 'font-bold text-blue-600 mx-2'>{feedback.length} Reviews</h4>
      <h4 className='font-bold'>Average Rating:{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}


export default FeedbackStats
