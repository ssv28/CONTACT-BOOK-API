let Admin = require('../model/admin');
const bcrypt = require('bcrypt');

exports.AdminSignup = async function (req, res, next) {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 10)
        let userCreate = await Admin.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Admin Create SuccessFully!",
            data: userCreate

        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.AdminLogin = async function (req, res, next) {
    try {

        let userFind = await Admin.findOne({ email: req.body.email })
        if (!userFind) throw new Error("User Not Found!")
        let passwordCompare = await bcrypt.compare(req.body.password, userFind.password)
        if (!passwordCompare) throw new Error("Password Invalid!")


        res.status(200).json({
            status: "Success",
            message: "Admin Login SuccessFully!",
            data: userFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindData = async function (req, res, next) {
    try {

        let userFind = await Admin.find()

        res.status(200).json({
            status: "Success",
            message: "Admin Found SuccessFully!",
            data: userFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindId = async function (req, res, next) {
    try {

        let userFind = await Admin.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Admin Find SuccessFully!",
            data: userFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.AdminDelete = async function (req, res, next) {
    try {

        await Admin.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Admin Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.AdminUpdate = async function (req, res, next) {
    try {

        req.body.password = await bcrypt.hash(req.body.password, 10)
        let userUpdate = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).json({
            status: "Success",
            message: "Admin Update SuccessFully!",
            data: userUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}