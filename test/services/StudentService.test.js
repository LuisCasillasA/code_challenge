describe("Unit test for StudentService", () =>{
    test("1. Get emails certified students", () =>{
        const students = [{haveCertification: true, email: 'certifiedstudent@gmail.com'}, {haveCertification: false, email: 'nocertifiedstudent@gmail.com'}]
        const emailStudents = StudentsService(students);
        expect(emailStudents.length).toBe(1);
    });
});