import getStudentIdsSum from "../3-get_ids_sum.js";
import getListStudents from "../0-get_list_students.js";

describe('getStudentIdsSum', () => {
  test('returns the sum of all student ids', () => {
    const students = getListStudents();
    expect(getStudentIdsSum(students)).toBe(8); // 1 + 2 + 5 = 8
  });

  test('returns 0 if students list is empty', () => {
    expect(getStudentIdsSum([])).toBe(0);
  });

  test('uses the reduce function', () => {
    const reduceSpy = jest.spyOn(Array.prototype, 'reduce');
    const students = getListStudents();
    getStudentIdsSum(students);
    expect(reduceSpy).toHaveBeenCalled();
    reduceSpy.mockRestore();
  });
});
