const express = require("express");
const router = express.Router();
const Student = require("../db/schema");


router.get("/", (req, res) =>
{
    res.send("This is home")
})

router.post("/create", async (req, res) =>
{
    const { name, contact, subjects, class_, year, society } = req.body;

    try
    {

        const newStudent = Student({
            name,
            contact,
            subjects,
            class: class_,
            year, society
        })

        await newStudent.save();

        return res.status(200).json(newStudent);

    }
    catch (err)
    {
        console.log(err)
        return res.send("not done")
    }


})

module.exports = router;