import React from 'react'
import { useContext } from 'react';
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
function FeedbackItem({item}) { 
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  
return (

  <Card revesre= 'true'>
    <div className='text-left px-2'>{item.rating}</div>
    <div className='text-end space-x-1'>
    <button onClick={()=> deleteFeedback(item.id)} className=' rounded-3xl ' ><FaTimes  /></button>
    <button>
      <FaEdit onClick={()=> editFeedback(item)}/>
    </button>
    </div>
     <div >
      {item.text}
     </div>
  </Card>
  )
}

export default FeedbackItem
