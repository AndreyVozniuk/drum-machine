import React, {useContext} from 'react'
import {SoundItemCtx} from '../app/App'
import {soundSelection} from '../../helpers/soundsHelper'
import './SoundItem.css'

export default function SoundItem({text, disabled}) {
  const keyPress = useContext(SoundItemCtx)
  
  return <button 
  className={text.toLowerCase() === keyPress ? 'sound-item sound-item_pressBg' : 'sound-item sound-item_defaultBg'} 
  disabled={disabled}
  onClick={e => soundSelection(e.target.innerHTML)}
  >
    {text}
  </button>
}