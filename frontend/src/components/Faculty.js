import React from 'react';

const facultyData = [
  {
    id: 1,
    name: "Dr. Anitha Reddy",
    department: "Computer Science and Engineering",
    facultyId: "8025",
    email: "anitha.reddy@kluniversity.in",
    phone: "+91 9876543210",
    research: "Artificial Intelligence, Machine Learning",
    officeHours: "Mon-Fri, 2:00 PM - 4:00 PM",
    hours: "20", 
    attendancePercentage: 85,
  },
  {
    id: 2,
    name: "Dr. Ravi Kumar",
    department: "Computer Science and Engineering",
    facultyId: "5585",
    email: "ravi.kumar@kluniversity.in",
    phone: "+91 9876543211",
    research: "Power Systems, Renewable Energy",
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
    officeHours: "Mon-Fri, 4:00 PM - 6:00 PM",
    hours: "19",
    attendancePercentage: 87,
  }
];

function Faculty() {
  return (
    <div className="container mt-4 p-4 rounded shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center text-primary mb-4">Faculty Information</h1>
      <h2 className="text-center text-danger mb-4">MY FACULTY FOR THIS SEMESTER</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Name Of the Faculty</th>
              <th scope="col">Department</th>
              <th scope="col">Faculty ID</th>
              <th scope="col">Contact</th>
              <th scope="col">Research Interests</th>
              <th scope="col">Office Hours</th>
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
                  <strong>Email:</strong> {faculty.email}<br />
                  <strong>Phone:</strong> {faculty.phone}
                </td>
                <td>{faculty.research}</td>
                <td>{faculty.officeHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Faculty;
