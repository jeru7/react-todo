import Menu from './Menu.jsx'
import Display from './Display.jsx'
import { useState } from 'react'

function Main() {
  // TODO: add modal

  // TODO: task object

  // states: manage task
  const [tasks, setTasks] = useState([])

  // states: tasklist states
  const [isEmpty, setIsEmpty] = useState(true)

  // states: modals
  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)

  // handler: add toggle
  const handleToggleAdd = () => {
    setToggleAdd((prev) => !prev)
  }

  // handler: add task
  const handleAddTask = (task) => {
    setTasks((prevTask) => [...prevTask, task])
  }

  return (
    <>
      <div className='main_container'>
        <Display tasks={tasks} />
        <Menu handleToggleAdd={handleToggleAdd} />
        {toggleAdd && (
          <AddModal
            handleToggleAdd={handleToggleAdd}
            handleAddTask={handleAddTask}
          />
        )}
        {/* <EditModal /> */}
      </div>
    </>
  )
}

function AddModal({ handleToggleAdd, handleAddTask }) {
  // states: input
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = () => {
    if (title && description) {
      handleAddTask({ title, description })
      handleToggleAdd()
    }
  }

  return (
    <>
      <div className='addModal_container'>
        <input
          type='text'
          className='text_input'
          id='title'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='text_input'
          id='description'
          placeholder='Description...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className='buttons_container'>
          <button id='cancelBtn' onClick={handleToggleAdd}>
            Cancel
          </button>
          <button id='addBtn' onClick={handleAdd}>
            Add
          </button>
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
