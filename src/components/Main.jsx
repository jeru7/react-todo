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

  const handleToggleAdd = () => {
    setToggleAdd((prev) => !prev)
  }

  return (
    <>
      <div className='main_container'>
        <Display />
        <Menu handleToggleAdd={handleToggleAdd} />
        {toggleAdd && <AddModal handleToggleAdd={handleToggleAdd} />}
        {/* <EditModal /> */}
      </div>
    </>
  )
}

function AddModal({ handleToggleAdd }) {
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
          <button id='cancelBtn' onClick={handleToggleAdd}>
            Cancel
          </button>
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
