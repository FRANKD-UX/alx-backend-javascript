/**
 * Returns students located in a specific city
 * @param {Array} students - List of student objects
 * @param {String} city - City to filter by
 * @returns {Array} Array of student objects located in the specified city
 */
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
