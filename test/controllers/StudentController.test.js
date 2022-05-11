const StudentContoller = require('../../lib/controllers/StudentController')

describe("Unit test for StrudentController", () =>{
    test("1. Get all students", () =>{
        const allStudents = StudentContoller.getAllStudents();
        expect(allStudents.length).toBe(51);
    });
});