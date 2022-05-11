describe("Unit test for StudentService", () =>{
    test("1. Get emails certified students", () =>{
        const students = [{haveCertification: true,}, {haveCertification: false}]
        const emailStudents = StudentsService(students);
        expect(emailStudents.length).toBe(1);
    });
});