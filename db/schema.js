const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    subjects: [
        {
            name: {
                type: String,
                required: true,
            },
        },
    ],
    class: {
        type: String,
        required: true,
    },
    society: [ mongoose.Schema.Types.Mixed ],
    year: {
        type: String,
        required: true,
    },
}, {strict: false});

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
