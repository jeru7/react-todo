import { useState } from 'react'

function Menu() {
  const [disable, setDisable] = useState(true)

  return (
    <div className='menu_container'>
      <div className='menu--top'>
        <p>TODO APP</p>
      </div>
      <div className='menu--bottom'>
        <Button name='addBtn' text='ADD' />
        <Button
          name='editBtn'
          text='EDIT'
          checker={disable ? 'disabledBtn' : ''}
        />
        <Button
          name='delBtn'
          text='DELETE'
          checker={disable ? 'disabledBtn' : ''}
        />
      </div>
    </div>
  )
}

function Button({ name, text, checker }) {
  return (
    <button className={name + ' ' + checker}>
      <p>{text}</p>
    </button>
  )
}

export default Menu
