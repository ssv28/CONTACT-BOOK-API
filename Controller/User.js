let User = require('../model/user');
const bcrypt = require('bcrypt');

exports.UserSignup =  async function (req, res, next) {
    try {
  
      req.body.password = await bcrypt.hash(req.body.password, 10)
      let userCreate = await User.create(req.body)
  
      res.status(200).json({
        status: "Success",
        message: "User Create SuccessFully!",
        data: userCreate
  
      })
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }

exports.UserLogin = async function (req, res, next) {
    try {
  
      let userFind = await User.findOne({ email: req.body.email })
      if (!userFind) throw new Error("User Not Found!")
  
      let passwordCompare = await bcrypt.compare(req.body.password, userFind.password)
      if (!passwordCompare) throw new Error("Password Invalid!")
  
  
      res.status(200).json({
        status: "Success",
        message: "User Login SuccessFully!",
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
  
      let userFind = await User.find()
  
      res.status(200).json({
        status: "Success",
        message: "User Found SuccessFully!",
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
  
      let userFind = await User.findById(req.params.id)
  
      res.status(200).json({
        status: "Success",
        message: "User Find SuccessFully!",
        data: userFind
  
      })
  
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: error.message
      })
    }
  }

exports.UserDelete =  async function (req, res, next) {
    try {
  
      await User.findByIdAndDelete(req.params.id)
  
      res.status(200).json({
        status: "Success",
        message: "User Delete SuccessFully!",
      })
  
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: error.message
      })
    }
  }

exports.UserUpdate = async function (req, res, next) {
    try {
  
      console.log("===>>>", req.body);
  
      req.body.password = await bcrypt.hash(req.body.password, 10)
      let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      console.log(req.params.id);
      console.log("~~~~~~>>>>", req.body);
  
      console.log(">>>>>", updatedUser);
  
      res.status(200).json({
        status: "Success",
        message: "User Update SuccessFully!",
        data: updatedUser
      })
  
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: error.message
      })
    }
  }