import getListStudents from "../0-get_list_students.js";

describe('getListStudents', () => {
  test('returns the correct list of students', () => {
    const students = getListStudents();
    expect(students).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });

  test('returns an array', () => {
    const students = getListStudents();
    expect(Array.isArray(students)).toBe(true);
  });

  test('contains objects with the correct structure', () => {
    const students = getListStudents();
    students.forEach(student => {
      expect(student).toHaveProperty('id');
      expect(student).toHaveProperty('firstName');
      expect(student).toHaveProperty('location');
      expect(typeof student.id).toBe('number');
      expect(typeof student.firstName).toBe('string');
      expect(typeof student.location).toBe('string');
    });
  });
});
