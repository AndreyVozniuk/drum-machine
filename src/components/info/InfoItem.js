import React from 'react'

export default function InfoItem({command, copyHandler}) {
  return <div className='info-item'>
    <span>{command.toUpperCase()}</span> 
    <button className='info-btn' onClick={ () => copyHandler(command.toUpperCase()) }>Copy</button>
  </div>
}