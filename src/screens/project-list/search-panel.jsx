import React from "react"

export const SearchPanel = ({ users, param, setParam }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setParam({
      ...param,
      [name]: value
    })
  }

  return (
    <form action="">
      <div>
        <input type="text"
               name="personId"
               value={param.name}
               onChange={e => handleOnChange(e)} />
        <select name="name"
                value={param.personId}
                id=""
                onChange={e => handleOnChange(e)}>
          <option value=" ">Manager</option>
          {
            users.map(user => <option value={user.id}>{user.name}</option>)
          }
        </select>
      </div>
    </form>
  )
}