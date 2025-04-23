/**
 * Returns the sum of all student ids
 * @param {Array} students - List of student objects
 * @returns {Number} Sum of all student ids
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
