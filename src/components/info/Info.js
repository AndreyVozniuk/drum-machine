import React from 'react'
import InfoItem from './InfoItem'
import './Info.css'

export default function Info({commands}) {
  function copyHandler(text){
    navigator.clipboard.writeText(text)
    .then(() => { 
      alert('Copied!')
    })
    .catch(err => {
      console.log('Something went wrong', err)
    })
  }

  return <div className='info'>
    <div className='info-title'>Latest sound commands</div>
    <hr />
    {commands.map(el => {
      return <InfoItem command={el} copyHandler={copyHandler}/>
    })}
  </div>
}