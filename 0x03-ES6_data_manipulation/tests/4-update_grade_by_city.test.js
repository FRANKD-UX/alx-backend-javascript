import updateStudentGradeByCity from "../4-update_grade_by_city.js";
import getListStudents from "../0-get_list_students.js";

describe('updateStudentGradeByCity', () => {
  test('updates student grades for a specific city', () => {
    const students = getListStudents();
    const grades = [
      { studentId: 1, grade: 86 },
      { studentId: 5, grade: 97 }
    ];
    const result = updateStudentGradeByCity(students, 'San Francisco', grades);
    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]);
  });

  test('sets grade to N/A if not found in grades list', () => {
    const students = getListStudents();
    const grades = [{ studentId: 5, grade: 97 }];
    const result = updateStudentGradeByCity(students, 'San Francisco', grades);
    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
      { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]);
  });

  test('returns an empty array if no students in the specified city', () => {
    const students = getListStudents();
    const grades = [{ studentId: 1, grade: 86 }];
    const result = updateStudentGradeByCity(students, 'New York', grades);
    expect(result).toEqual([]);
  });

  test('uses filter and map functions', () => {
    const filterSpy = jest.spyOn(Array.prototype, 'filter');
    const mapSpy = jest.spyOn(Array.prototype, 'map');
    const students = getListStudents();
    const grades = [{ studentId: 1, grade: 86 }];
    updateStudentGradeByCity(students, 'San Francisco', grades);
    expect(filterSpy).toHaveBeenCalled();
    expect(mapSpy).toHaveBeenCalled();
    filterSpy.mockRestore();
    mapSpy.mockRestore();
  });
});
