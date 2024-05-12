import Menu from './Menu.jsx'
import Display from './Display.jsx'
import { useState } from 'react'

function Main() {
  // TODO: add modal

  // TODO: task object

  // checks if the task list is empty
  const [isEmpty, setIsEmpty] = useState(true)
  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)

  return (
    <>
      <div className='main_container'>
        <Display />
        <Menu />
        <AddModal />
        <EditModal />
      </div>
    </>
  )
}

function AddModal() {
  return (
    <>
      <div className='addModal_container'>
        <input
          type='text'
          className='text_input'
          id='title'
          placeholder='Title'
        />
        <textarea
          className='text_input'
          id='description'
          placeholder='Description...'
        />
        <div className='buttons_container'>
          <button id='cancelBtn'>Cancel</button>
          <button id='addBtn'>Add</button>
        </div>
      </div>
      <div className='modal_overlay'></div>
    </>
  )
}

function EditModal() {
  return (
    <>
      <div className='addModal_container'>
        <input
          type='text'
          className='text_input'
          id='title'
          placeholder='Example Title'
        />
        <textarea
          className='text_input'
          id='description'
          placeholder='Example Description...'
        />
        <div className='buttons_container'>
          <button id='cancelBtn'>Cancel</button>
          <button id='editBtn'>Edit</button>
        </div>
      </div>
      <div className='modal_overlay'></div>
    </>
  )
}

export default Main
