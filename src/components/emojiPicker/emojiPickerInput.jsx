import React, {useRef} from 'react'
import EmojiPicker from './emojiPicker'

function EmojiPickerInput() {
    const refInput = useRef(null); //Permite obtener la referencia de un nodo HTML
    function handleClick(){
        refInput.current.focus(); //se usan funciones de javascript normal
    }
  return (
    <div>
        <input type="text" ref={refInput} />
        <EmojiPicker ref={refInput} />
    </div>
  )
}

export default EmojiPickerInput