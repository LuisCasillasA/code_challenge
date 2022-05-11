class StudentService{
    static getEmailsCertifiedStudents(students){
        const certifiedStudents = students.filter((student) => student.haveCertification === true);
        return certifiedStudents.map((student) => student.email);
    }
}

module.exports = StudentService;