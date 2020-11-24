import React, {useEffect, useState, useCallback, createContext} from 'react'
import {soundSelection} from '../../helpers/soundsHelper'
import SoundItem from '../sound-item/SoundItem'
import SoundCommand from '../sound-command/SoundCommand'
import Info from '../info/Info'
import './App.css'

export const SoundItemCtx = createContext()

function App() {
  const [keyPress, setKeyPress] = useState()
  const [inputFocus, setInputFocus] = useState(false)
  const [command, setCommand] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [latestCommand, setLatestCommand] = useState([])

  const keyboardHandler = useCallback((e) => {
    if(!inputFocus){
      soundSelection(e.code)
      setKeyPress(e.key)
    }
  }, [inputFocus])

  useEffect(() => {
    if(!disabled){
      document.addEventListener('keydown', keyboardHandler)
      document.addEventListener('keyup', () => setKeyPress(''))
    }

    return () => {
      document.removeEventListener('keydown', keyboardHandler)
    }
  }, [keyboardHandler, disabled])

  return <div className='app'>
    <div className='content'>
      <div className='main-content'>
        <div className='sound-items'>
          <SoundItemCtx.Provider value={keyPress}>
            <SoundItem text='Q' disabled={disabled}/>
            <SoundItem text='W' disabled={disabled}/>
            <SoundItem text='E' disabled={disabled}/>
            <SoundItem text='A' disabled={disabled}/>
            <SoundItem text='S' disabled={disabled}/>
            <SoundItem text='D' disabled={disabled}/>
          </SoundItemCtx.Provider>
        </div>
        <Info commands={latestCommand}/>
      </div>
      <SoundCommand 
      setInputFocus={setInputFocus} 
      setCommand={setCommand} 
      command={command}
      disabled={disabled}
      setDisabled={setDisabled}
      setLatestCommand={setLatestCommand}
      />
    </div>
  </div>
}

export default App
