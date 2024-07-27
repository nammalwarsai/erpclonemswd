import React, { useState } from 'react';

const Courses = () => {
  // Updated list of courses
  const [courses, setCourses] = useState([
    {
      name: "DAA",
      code: "23ad2010",
      credits: 4,
      department: "CSE"
    },
    {
      name: "MSWD",
      code: "23CS2010",
      credits: 4,
      department: "CSE"
    },
    {
      name: "AOOP",
      code: "23ad2010",
      credits: 4,
      department: "CSE"
    },
    {
      name: "CTOOD",
      code: "23CT0010",
      credits: 4,
      department: "CSE"
    },
    {
      name: "DBMS",
      code: "23CS2020",
      credits: 6,
      department: "CS IT"
    }
  ]);

  return (
    <div className="container ">
      <h1 className="h1inCourses">Coures for 2024-2025 ODD SEMISTER</h1>
      <ul className="list-group mt-4">
        {courses.map((course, index) => (
          <li key={index} className="list-group-item">
            <strong>Name:</strong> {course.name}<br />
            <strong>Code:</strong> {course.code}<br />
            <strong>Credits:</strong> {course.credits}<br />
            <strong>Offering Department:</strong> {course.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
