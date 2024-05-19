function Display({ tasks }) {
  return (
    <div className='display_container'>
      {tasks.length === 0 ? (
        <p>LIST IS CURRENTLY EMPTY</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <p>{task.title}</p>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Display
