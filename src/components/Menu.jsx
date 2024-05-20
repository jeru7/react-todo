import { useState } from 'react'

function Menu({
  handleToggleAdd,
  isEmpty,
  handleShowEdit,
  handleShowDelete,
  showEdit,
  showDelete,
}) {
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
          disabled={isEmpty || showDelete}
          onClick={handleShowEdit}
        />
        <Button
          name='delBtn'
          text='DELETE'
          disabled={isEmpty || showEdit}
          onClick={handleShowDelete}
        />
      </div>
    </div>
  )
}

function Button({ name, text, onClick, disabled }) {
  return (
    <button
      className={`${name} ${disabled ? 'disabledBtn' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  )
}

export default Menu
