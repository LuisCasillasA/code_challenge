const StudentContoller = require("../../lib/controllers/StudentController");

describe("Unit test for StrudentController", () =>{
    test("1. Get all students", () =>{
        const allStudents = StudentContoller.getAllStudents();
        expect(allStudents.length).toBe(51);
    });
    test("2. Get certified students emails", () =>{
        const emailStudents = StudentContoller.getEmailsCertifiedStudents();
        expect(emailStudents.length).toBe(29);
    });
});