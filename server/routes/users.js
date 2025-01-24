const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log the request body

    // Validate the request body
    const { error } = validate(req.body);
    if (error) {
      console.log('Validation error:', error.details[0].message);
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check if user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log('User already exists:', user);
      return res.status(409).send({ message: "User with given email already Exist!" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    console.log('Salt generated:', salt);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log('Password hashed successfully');

    // Save the user to the database
    await new User({ ...req.body, password: hashPassword }).save();
    console.log('User created successfully');

    // Send success response
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error('Error in /api/users:', error); // Log the error
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;