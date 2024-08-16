var express = require('express');
var router = express.Router();
let User = require('../model/user');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'User' });
});


//SIGN UP
router.post('/signup', async function (req, res, next) {
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

});


//LOG IN
router.post('/login', async function (req, res, next) {
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

});


//ALL DATA FIND
router.get('/find', async function (req, res, next) {
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

});


//FIND ONE
router.get('/findid/:id', async function (req, res, next) {
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
});


//DELETE DATA
router.delete('/delete/:id', async function (req, res, next) {
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
});


//UPDATE DATA
router.patch('/update/:id', async function (req, res, next) {
  try {

    console.log("===>>>", req.body);

    req.body.password = await bcrypt.hash(req.body.password, 10)
    let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true})
    console.log(req.params.id);
    console.log("~~~~~~>>>>",req.body);

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
});


module.exports = router;
