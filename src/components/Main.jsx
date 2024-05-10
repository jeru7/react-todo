import Menu from './Menu.jsx'
import Display from './Display.jsx'
import { useState } from 'react'

function Main() {
  // TODO: add modal

  // TODO: task object

  // checks if the task list is empty
  const [isEmpty, setIsEmpty] = useState(true)

  return (
    <div className='main_container'>
      <Display />
      <Menu />
      <AddModal />
    </div>
  )
}

function AddModal() {
  return <></>
}

export default Main
