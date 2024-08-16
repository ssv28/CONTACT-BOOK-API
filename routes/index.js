let express = require('express');
let router = express.Router();
let Admin = require('../model/admin');
let User = require('../model/user');
let Contact = require('../model/contact')
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


//SIGN UP
router.post('/admin/signup', async function (req, res, next) {
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

});


//LOG IN
router.post('/admin/login', async function (req, res, next) {
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

});


//ALL DATA FIND
router.get('/admin/find', async function (req, res, next) {
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

});


//FIND ONE
router.get('/admin/findid/:id', async function (req, res, next) {
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
});


//DELETE DATA
router.delete('/admin/delete/:id', async function (req, res, next) {
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
});


//UPDATE DATA
router.patch('/admin/update/:id', async function (req, res, next) {
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
});



//===============================================================================================================



//SIGN UP
router.post('/user/signup', async function (req, res, next) {
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
router.post('/user/login', async function (req, res, next) {
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
router.get('/user/find', async function (req, res, next) {
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
router.get('/user/findid/:id', async function (req, res, next) {
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
router.delete('/user/delete/:id', async function (req, res, next) {
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
router.patch('/user/update/:id', async function (req, res, next) {
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



//==================================================================================================================



//CREATE DATA
router.post('/contact/create', async function (req, res, next) {
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

});


//ALL DATA FIND
router.get('/contact/find', async function (req, res, next) {
  try {

    let userFind = await Contact.find()

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

});


// //FIND ONE
router.get('/contact/findid/:id', async function (req, res, next) {
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
});


//DELETE DATA
router.delete('/contact/delete/:id', async function (req, res, next) {
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
});


//UPDATE DATA
router.patch('/contact/update/:id', async function (req, res, next) {
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
});



module.exports = router;
