const StudentContoller = require("./../controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Welcome to Visual Partnert Students Api"});
});

app.listen(port, () => {
    console.log(`Visual Partnet Students API in localhost:${port}`);
});

app.get("/v1/students", (request, response) =>{
    const allStudents = StudentContoller.getAllStudents();
    response.json(allStudents);
});

app.get("/v1/students/certification/email", (request, response) =>{
    const certifiedStudentsEmail = StudentContoller.getEmailsCertifiedStudents();
    response.json(certifiedStudentsEmail);
});

app.get("/v1/students/:credits", (request, response) =>{
    const credits = request.params.credits;
    const studentsGreater = StudentContoller.getStudentsCreditsGreater(credits);
    response.json(studentsGreater);
});