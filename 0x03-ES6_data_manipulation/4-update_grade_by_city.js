/**
 * Updates student grades for students in a specific city
 * @param {Array} students - List of student objects
 * @param {String} city - City to filter by
 * @param {Array} newGrades - List of grade objects with studentId and grade
 * @returns {Array} Array of student objects with updated grades
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
