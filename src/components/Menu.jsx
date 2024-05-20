import { useState } from 'react'

function Menu({ handleToggleAdd, isEmpty }) {
  return (
    <div className='menu_container'>
      <div className='menu--top'>
        <p>TODO APP</p>
      </div>
      <div className='menu--bottom'>
        <Button name='addBtn' text='ADD' onClick={handleToggleAdd} />
        <Button
          name='editBtn'
          text='EDIT'
          checker={isEmpty ? 'disabledBtn' : ''}
        />
        <Button
          name='delBtn'
          text='DELETE'
          checker={isEmpty ? 'disabledBtn' : ''}
        />
      </div>
    </div>
  )
}

function Button({ name, text, checker, onClick }) {
  return (
    <button className={name + ' ' + checker} onClick={onClick}>
      <p>{text}</p>
    </button>
  )
}

export default Menu
