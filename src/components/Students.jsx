import React from 'react'
import Student from './Student'
import './students.css'

const students = () => {
  const students = [
    {
      name: 'Jeremy Dits',
      department: 'Science',
      finalGrade: '86',
      status: 'Pass',
    },

    {
      name: 'Maudy Dits',
      department: 'Science',
      finalGrade: '97',
      status: 'Pass',
    },

    {
      name: 'Jay Ann',
      department: 'Arts',
      finalGrade: '60',
      status: 'Fail',
    },
    {
      name: 'Christine',
      department: 'Commerce',
      finalGrade: '83',
      status: 'Pass',
    },
    {
      name: 'Chona Dits',
      department: 'Science',
      finalGrade: '92',
      status: 'Pass',
    },
    {
      name: 'Harfiel',
      department: 'Commerce',
      finalGrade: '90',
      status: 'Pass',
    },
    {
      name: 'Hardiel',
      department: 'Arts',
      finalGrade: '85',
      status: 'Pass',
    },
    {
      name: 'Seth',
      department: 'Science',
      finalGrade: '61',
      status: 'Fail',
    },
    {
      name: 'Eddy',
      department: 'Arts',
      finalGrade: '79',
      status: 'Pass',
    },
    {
      name: 'Donnie',
      department: 'Commerce',
      finalGrade: '86',
      status: 'Pass',
    },
  ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>department</th>
            <th>finalGrade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student
              index={index}
              name={student.name}
              department={student.department}
              finalGrade={student.finalGrade}
              status={student.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default students
