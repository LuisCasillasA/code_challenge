const StudentService = require("./../services/StudentService");
const Reader = require("./../utils/Reader");

class StudentContoller{
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return students;
    }

    static getEmailsCertifiedStudents(){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getEmailsCertifiedStudents(students);
    }

    static getStudentsCreditsGreater(credits){
        const students = Reader.readJsonFile("visualpartners.json");
        return StudentService.getStudentsCreditsGreater(students, credits);
    }
}

module.exports = StudentContoller;