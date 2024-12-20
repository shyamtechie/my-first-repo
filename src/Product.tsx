export default function Products() {
    const data = [
      { name: 'Ramu', email: 'ramu@gmail.com', company: 'IBM', salary: 45000 },
      { name: 'Raju', email: 'raju@gmail.com', company: 'HP', salary: 55000 },
      { name: 'Ramya', email: 'ramya@gmail.com', company: 'TCS', salary: 65000 },
      { name: 'shyam ', email: 'ramya@gmail.com', company: 'TS', salary: 6000 }

    ];
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.company}</td>
                <td>{person.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
 