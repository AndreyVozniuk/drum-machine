import React, {useEffect} from 'react'
import {soundSelection} from '../../helpers/soundsHelper'
import './SoundCommand.css'

export default function SoundCommand({setInputFocus, setCommand, command, disabled, setDisabled, setLatestCommand}) {
  useEffect(() => {
    if(disabled){
      const BPM = 120
      const ms = Math.round((60 / BPM) * 1000)
      const commands = command.replaceAll(' ', '').split('')
      let index = 0

      const interval = setInterval(() => {
        soundSelection(commands[index].toUpperCase())
        index++

        if(commands.length === index) index = 0
      }, ms)

      return () => {
        clearInterval(interval)
        setCommand('')
        setLatestCommand(cmd => [...cmd, command])
      }
    }
  }, [disabled])

  function buttonHandler(){
    if(command){
      setDisabled(value => !value) 
    }else{
      alert('Your input is empty, please enter command ;)')
    }
  }

  return <div className='sound-command'>
    <input placeholder='enter sound command here' 
    onFocus={() => setInputFocus(true)}  
    onBlur={() => {setInputFocus(false)}}
    onChange={e => setCommand(e.target.value)}
    disabled={disabled}
    value={command}
    />
    <button onClick={buttonHandler}>{disabled ? 'Stop' : 'Play'}</button>
  </div>
}
