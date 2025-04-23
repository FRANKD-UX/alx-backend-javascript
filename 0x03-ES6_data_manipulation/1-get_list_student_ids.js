/**
 * Returns an array of student ids from a list of student objects
 * @param {Array} students - List of student objects
 * @returns {Array} Array of student ids
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
