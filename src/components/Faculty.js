import React from 'react';
import Attendence from './Attendence';

// Updated faculty data to include hours and attendancePercentage
const facultyData = [
  {
    id: 1,
    name: "Dr. Anitha Reddy",
    department: "Computer Science and Engineering",
    facultyId: "8025",
    email: "anitha.reddy@kluniversity.in",
    phone: "+91 9876543210",
    research: "Artificial Intelligence, Machine Learning",
    publications: "link_to_publications",
    officeHours: "Mon-Fri, 2:00 PM - 4:00 PM",
    hours: "20", // Teaching hours per week
    attendancePercentage: 85, // Attendance percentage
  },
  {
    id: 2,
    name: "Dr. Ravi Kumar",
    department: "Computer Science and Engineering",
    facultyId: "5585",
    email: "ravi.kumar@kluniversity.in",
    phone: "+91 9876543211",
    research: "Power Systems, Renewable Energy",
    publications: "link_to_publications",
    officeHours: "Mon-Fri, 3:00 PM - 5:00 PM",
    hours: "18",
    attendancePercentage: 90,
  },
  {
    id: 3,
    name: "Dr. Sangeetha Menon",
    department: "Computer Science and Engineering",
    facultyId: "5258",
    email: "sangeetha.menon@kluniversity.in",
    phone: "+91 9876543212",
    research: "Thermodynamics, Fluid Mechanics",
    publications: "link_to_publications",
    officeHours: "Mon-Fri, 11:00 AM - 1:00 PM",
    hours: "22",
    attendancePercentage: 88,
  },
  {
    id: 4,
    name: "Dr. Rajesh Sharma",
    department: "Computer Science and Engineering",
    facultyId: "2999",
    email: "rajesh.sharma@kluniversity.in",
    phone: "+91 9876543213",
    research: "Structural Engineering, Sustainable Construction",
    publications: "link_to_publications",
    officeHours: "Mon-Fri, 10:00 AM - 12:00 PM",
    hours: "15",
    attendancePercentage: 92,
  },
  {
    id: 5,
    name: "Dr. Priya Nair",
    department: "Computer Science and Engineering",
    facultyId: "1748",
    email: "priya.nair@kluniversity.in",
    phone: "+91 9876543214",
    research: "Wireless Communication, Signal Processing",
    publications: "link_to_publications",
    officeHours: "Mon-Fri, 4:00 PM - 6:00 PM",
    hours: "19",
    attendancePercentage: 87,
  }
];

function Faculty() {
  return (
    <div className="container mt-4" style={{ backgroundColor: 'blue', color: 'white', padding: '20px', borderRadius: '10px' }}>
      <h1 className="text-center mb-4" style={{ color: 'yellow' }}>Faculty Information</h1>
      <h2 className="text-center mb-4" style={{ color: 'red' }}>MY FACULTY FOR THIS SEMESTER</h2>
      <table className="table table-hover" style={{ backgroundColor: 'white', color: 'black' }}>
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Name Of the Faculty</th>
            <th scope="col">Department</th>
            <th scope="col">Faculty ID</th>
            <th scope="col">Contact</th>
            <th scope="col">Research Interests</th>
            <th scope="col">Publications</th>
            <th scope="col">Office Hours</th>
            <th scope="col">Attendance Info</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty, index) => (
            <tr key={faculty.id}>
              <th scope="row">{index + 1}</th>
              <td>{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.facultyId}</td>
              <td>
                {faculty.email}<br />{faculty.phone}
              </td>
              <td>{faculty.research}</td>
              <td>
                <a href={faculty.publications} target="_blank" rel="noopener noreferrer">View Publications</a>
              </td>
              <td>{faculty.officeHours}</td>
              {/* Integrate Attendence component */}
              <td>
                <Attendence
                  hours={faculty.hours}
                  attendancePercentage={faculty.attendancePercentage}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Faculty;
