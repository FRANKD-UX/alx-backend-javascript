import getStudentsByLocation from "../2-get_students_by_loc.js";
import getListStudents from "../0-get_list_students.js";

describe('getStudentsByLocation', () => {
  test('returns students located in a specific city', () => {
    const students = getListStudents();
    const sfStudents = getStudentsByLocation(students, 'San Francisco');
    expect(sfStudents).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });

  test('returns an empty array if no students in the specified city', () => {
    const students = getListStudents();
    const nyStudents = getStudentsByLocation(students, 'New York');
    expect(nyStudents).toEqual([]);
  });

  test('returns an empty array if students list is empty', () => {
    const emptyStudents = getStudentsByLocation([], 'San Francisco');
    expect(emptyStudents).toEqual([]);
  });

  test('uses the filter function', () => {
    const filterSpy = jest.spyOn(Array.prototype, 'filter');
    const students = getListStudents();
    getStudentsByLocation(students, 'San Francisco');
    expect(filterSpy).toHaveBeenCalled();
    filterSpy.mockRestore();
  });
});
