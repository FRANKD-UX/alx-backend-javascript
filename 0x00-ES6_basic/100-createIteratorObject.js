export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.keys(report.allEmployees)) {
    for (const employee of report.allEmployees[department]) {
      employees.push(employee);
    }
  }
  
  return employees;
}
