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
}) {
  const containerStyle = isEmpty
    ? {
        justifyContent: 'center',
        alignItems: 'center',
      }
    : {}

  return (
    <div className='display_container' style={containerStyle}>
      {tasks.length === 0 ? (
        <p>LIST IS CURRENTLY EMPTY</p>
      ) : (
        <ul className='list_container'>
          {tasks.map((task, index) => (
            <li className='tasks' key={index}>
              <div className='task--details'>
                <FontAwesomeIcon icon={faSquare} className='checkboxIcon' />
                <p className='taskTitle'>{task.title}</p>
                <p className='taskDesc'>{task.description}</p>
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
