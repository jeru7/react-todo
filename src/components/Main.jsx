import Menu from './Menu.jsx'
import Display from './Display.jsx'
import { useEffect, useState } from 'react'

function Main() {
  // states: manage task
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  // states: modals
  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)

  // states: icon visibility
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  // states: task tracker
  const [currentTask, setCurrentTask] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  // handler: edit task
  const editHandler = (editedTask) => {
    const updatedTasks = [...tasks]
    updatedTasks[currentIndex] = editedTask
    setTasks(updatedTasks)
    setToggleEdit(false)
  }

  // handler: delete task
  const deleteHandler = (taskIndex) => {
    const newList = tasks.filter((_, index) => index !== taskIndex)
    setTasks(newList)
    if (newList.length === 0) {
      setShowDelete(false)
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // handler: add toggle
  const handleToggleAdd = () => {
    setToggleAdd((prevBool) => !prevBool)
  }

  // handler: edit toggle
  const handleToggleEdit = (task, index) => {
    setCurrentTask(task)
    setCurrentIndex(index)
    setToggleEdit((prevBool) => !prevBool)
  }

  // handler: add task
  const handleAddTask = (task) => {
    setTasks((prevTask) => [...prevTask, task])
  }

  // handler: toggle delete icon
  const handleShowDelete = () => {
    setShowDelete((prevBool) => !prevBool)
  }

  // handler: toggle edit icon
  const handleShowEdit = () => {
    setShowEdit((prevBool) => !prevBool)
  }

  return (
    <>
      <div className='main_container'>
        <Display
          tasks={tasks}
          isEmpty={tasks.length === 0}
          showDelete={showDelete}
          showEdit={showEdit}
          handleToggleEdit={handleToggleEdit}
          deleteHandler={deleteHandler}
          setTasks={setTasks}
        />
        <Menu
          handleToggleAdd={handleToggleAdd}
          isEmpty={tasks.length === 0}
          handleShowDelete={handleShowDelete}
          handleShowEdit={handleShowEdit}
          showDelete={showDelete}
          showEdit={showEdit}
        />
        {toggleAdd && (
          <AddModal
            handleToggleAdd={handleToggleAdd}
            handleAddTask={handleAddTask}
          />
        )}
        {toggleEdit && (
          <EditModal
            currentTask={currentTask}
            handleToggleEdit={handleToggleEdit}
            editHandler={editHandler}
          />
        )}
      </div>
    </>
  )
}

function AddModal({ handleToggleAdd, handleAddTask }) {
  // states: input
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [checked, setChecked] = useState(false)

  const handleAdd = () => {
    if (title && description) {
      handleAddTask({ title, description, checked })
      handleToggleAdd()
    }
  }

  const handleTitleChange = (event) => {
    const currentValue = event.target.value
    if (currentValue.length > 16) {
      return
    }
    setTitle(currentValue)
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
          onChange={(e) => handleTitleChange(e)}
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

function EditModal({ currentTask, handleToggleEdit, editHandler }) {
  const [title, setTitle] = useState(currentTask.title)
  const [description, setDescription] = useState(currentTask.description)

  useEffect(() => {
    setTitle(currentTask.title)
    setDescription(currentTask.description)
  }, [currentTask])

  const handleEdit = () => {
    if (title && description) {
      editHandler({ title, description })
    }
  }

  const handleTitleChange = (event) => {
    const currentValue = event.target.value
    if (currentValue.length > 16) {
      return
    }
    setTitle(currentValue)
  }

  return (
    <>
      <div className='addModal_container'>
        <input
          type='text'
          className='text_input'
          id='title'
          placeholder='Example Title'
          value={title}
          onChange={(e) => handleTitleChange(e)}
        />
        <textarea
          className='text_input'
          id='description'
          placeholder='Example Description...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className='buttons_container'>
          <button id='cancelBtn' onClick={handleToggleEdit}>
            Cancel
          </button>
          <button id='editBtn' onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
      <div className='modal_overlay'></div>
    </>
  )
}

export default Main
