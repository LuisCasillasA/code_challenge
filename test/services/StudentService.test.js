const StudentService = require("./../../lib/services/StudentService");

describe("Unit test for StudentService", () =>{
    test("1. Get emails certified students", () =>{
        const students = [{haveCertification: true, email: "certifiedstudent@gmail.com"}, {haveCertification: false, email: "nocertifiedstudent@gmail.com"}];
        const emailStudents = StudentService.getEmailsCertifiedStudents(students);
        expect(emailStudents.length).toBe(1);
    });
    test("2. Get all students with credits greater than 500", () =>{
        const students = [{credits: 200}, {credits:600}, {credits: 501}];
        const studentsGreater = StudentService.getStudentsCreditsGreater(students, 500);
        expect(studentsGreater.length).toBe(2);
    });
});