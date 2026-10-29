
const {student} = require("../data/data.js");

//Function eXPRESS

const alldata = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: student
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
};

const getsingledata = (req, res) => {
    try {
        let studentId = parseInt(req.params.id);
        let student = student.find(t => t.id === studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: `Students not found with id ${studentId}`
            });
        }

        res.status(200).json({
            success: true,
            body: student,
            message: `Student Data Fetched with id ${studentId}`
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something wrong",
            error: err.message
        });
    }
};

const createblog = (req, res) => {
    try {
        let body = req.body;
        if (!body.name || 
            !body.age || 
            !body.course) {
            return res.status(400).json({
                success: false,
                message: "Please provide name, age and course"
            });
        }

        let newStudent = {
            name:body.name,
            age:body.age,
            course:body.course,
            id: Date.now()
        };

        student.push(newStudent);

        res.status(201).json({
            success: true,
            data: newStudent
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
};

const deleteblog = (req, res) => {
    try {
        let studentId = parseInt(req.params.id);
        let studentIndex = student.findIndex(t => t.id === studentId);

        if (studentIndex === -1) {
            return res.status(404).json({
                success: false,
                message: `Students not found with id ${studentId}`
            });
        }

        student.splice(studentIndex, 1);

        res.status(200).json({
            success: true,
            message: `Student deleted successfully with id ${studentId}`
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
};

const updateblog = (req, res) => {
    try {
        let studentId = parseInt(req.params.id);
        let studentIndex = student.findIndex(t => t.id === studentId);

        if (studentIndex === -1) {
            return res.status(404).json({
                success: false,
                message: `Students not found with id ${studentId}`
            });
        }

        let updatedStudent = {
            ...student[studentIndex],
            ...req.body,
            id: student[studentIndex].id
        };

        student[studentIndex] = updatedStudent;

        res.status(200).json({
            success: true,
            data: updatedStudent
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
};

module.exports = {
    alldata,
    getsingledata,
    createblog,
    deleteblog,
    updateblog
};
