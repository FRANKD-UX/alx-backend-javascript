import getListStudentIds from "../1-get_list_student_ids.js";
import getListStudents from "../0-get_list_students.js";

describe('getListStudentIds', () => {
  test('returns an empty array if argument is not an array', () => {
    expect(getListStudentIds("hello")).toEqual([]);
    expect(getListStudentIds(123)).toEqual([]);
    expect(getListStudentIds({})).toEqual([]);
    expect(getListStudentIds(null)).toEqual([]);
    expect(getListStudentIds(undefined)).toEqual([]);
  });

  test('returns an array of ids from a list of student objects', () => {
    const students = getListStudents();
    expect(getListStudentIds(students)).toEqual([1, 2, 5]);
  });

  test('uses the map function', () => {
    const mapSpy = jest.spyOn(Array.prototype, 'map');
    const students = getListStudents();
    getListStudentIds(students);
    expect(mapSpy).toHaveBeenCalled();
    mapSpy.mockRestore();
  });
});
