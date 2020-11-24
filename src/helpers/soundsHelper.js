import boomSound from '../sounds/boom.mp3'
import clapSound from '../sounds/clap.mp3'
import pianoOneSound from '../sounds/piano_1.mp3'
import pianoTwoSound from '../sounds/piano_2.mp3'
import pshSound from '../sounds/psh.mp3'
import tshSound from '../sounds/tsh.mp3'

const boomSnd = new Audio(boomSound)
const clapSnd = new Audio(clapSound)
const pianoOneSnd = new Audio(pianoOneSound)
const pianoTwoSnd = new Audio(pianoTwoSound)
const pshSnd = new Audio(pshSound)
const tshSnd = new Audio(tshSound)

function playSound(sound){
  sound.pause()
  sound.currentTime = 0
  sound.play()
}

export function soundSelection(value) {
  value = value.length === 1 ? value = `Key${value}` : value
  switch(value){
    case 'KeyQ': playSound(boomSnd); break
    case 'KeyW': playSound(clapSnd); break
    case 'KeyE': playSound(pianoOneSnd); break 
    case 'KeyA': playSound(pianoTwoSnd); break 
    case 'KeyS': playSound(pshSnd); break
    case 'KeyD': playSound(tshSnd); break 
    default: return 
  }
}
