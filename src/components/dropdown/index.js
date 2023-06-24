import React from 'react'

const Dropdown = ({ variant="", links=[], button="" }) => {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="" id="dropdown-basic">
        <VscAccount />
        {
            button
        }

    </Dropdown.Toggle>

    <Dropdown.Menu>
        {
            links.length ?
            links.map((item, i) =>  {
               return  <Dropdown.Item key={i} href={}>Action</Dropdown.Item>
            })
            : null
        }
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
  )
}

export default Dropdown