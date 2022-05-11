class StudentService{
    static getEmailsCertifiedStudents(students){
        const certifiedStudents = students.filter((student) => student.haveCertification === true);
        return certifiedStudents.map((student) => student.email);
    }

    static getStudentsCreditsGreater(students, credits){
        return students.filter((student) => student.credits > credits);
    }
}

module.exports = StudentService;