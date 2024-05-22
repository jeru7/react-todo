import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

function Display({
  tasks,
  isEmpty,
  showEdit,
  showDelete,
  handleToggleEdit,
  deleteHandler,
  setTasks,
}) {
  const containerStyle = isEmpty
    ? {
        justifyContent: 'center',
        alignItems: 'center',
      }
    : {}

  const toggleChecker = (index) => {
    const newList = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, checked: !task.checked }
      }
      return task
    })
    setTasks(newList)
  }

  return (
    <div className='display_container' style={containerStyle}>
      {tasks.length === 0 ? (
        <p>LIST IS CURRENTLY EMPTY</p>
      ) : (
        <ul className='list_container'>
          {tasks.map((task, index) => (
            <li className='tasks' key={index}>
              <div className='task--details'>
                {task.checked ? (
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className='checkboxIcon'
                    onClick={() => toggleChecker(index)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSquare}
                    className='checkboxIcon'
                    onClick={() => toggleChecker(index)}
                  />
                )}
                <p className='taskTitle' title={task.description}>
                  {task.title}
                </p>
              </div>
              <div className='task--buttons'>
                {showDelete ? (
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='delIcon'
                    onClick={() => deleteHandler(index)}
                  />
                ) : (
                  ''
                )}
                {showEdit ? (
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className='editIcon'
                    onClick={() => handleToggleEdit(task, index)}
                  />
                ) : (
                  ''
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Display
