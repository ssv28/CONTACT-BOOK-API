let Contact = require('../model/contact')
const bcrypt = require('bcrypt');

exports.ContactCreate = async function (req, res, next) {
    try {

        let userCreate = await Contact.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Contact Create SuccessFully!",
            data: userCreate

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

        let userFind = await Contact.find().populate("userId")

        res.status(200).json({
            status: "Success",
            message: "Contact Found SuccessFully!",
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

        let userFind = await Contact.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Contact Find SuccessFully!",
            data: userFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ContactDelete = async function (req, res, next) {
    try {

        await Contact.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Contact Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ContactUpdate = async function (req, res, next) {
    try {

        console.log(req.body);

        let userUpdate = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(userUpdate);

        res.status(200).json({
            status: "Success",
            message: "Contact Update SuccessFully!",
            data: userUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}