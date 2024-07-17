import React from 'react'

const Student = ({ index, name, department, finalGrade, status }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{finalGrade}</td>
      <td>{status}</td>
    </tr>
  )
}

export default Student
