function Menu() {
  return (
    <div className='menu_container'>
      <div className='menu--top'>
        <p>TODO APP</p>
      </div>
      <div className='menu--bottom'>
        <Button name='addBtn' text='ADD' />
        <Button name='editBtn' text='EDIT' />
        <Button name='delBtn' text='DELETE' />
      </div>
    </div>
  )
}

function Button({ name, text }) {
  return (
    <button className={name}>
      <p>{text}</p>
    </button>
  )
}

export default Menu
