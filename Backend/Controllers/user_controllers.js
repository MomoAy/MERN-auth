import asyncHandler from "express-async-handler";

import User from "../Models/user_model.js";

//@desc Auth user/set token
//route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" })
});

//@desc Register user
//route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  };

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  };

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  };

  // res.status(200).json({ message: "Register User" });
});

//@desc Logout user
//route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" })
});

//@desc Get user profile
//route GET /api/users/profile
//@access Private(need a token)
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" })
});

//@desc Update user profile
//route POST /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" })
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };