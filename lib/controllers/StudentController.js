const Reader = require('./../utils/Reader')

class StudentContoller{
    static getAllStudents(){
        const students = Reader.readJsonFile('visualpartners.json');
        return students;
    }
}

module.exports = StudentContoller;