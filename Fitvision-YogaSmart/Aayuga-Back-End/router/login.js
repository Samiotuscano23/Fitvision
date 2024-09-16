import { Router } from "express";
import User from '../model/user.js';
import bcrypt from 'bcryptjs';
import cookieParser from "cookie-parser";
import express from 'express';
import jwt from 'jsonwebtoken';

const router = new Router();

router.use(express.json());
router.use(cookieParser());

const authenticateToken = (req, res, next) => {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
   if (token == null) return res.status(401).json({message:"Unauthorized user!"});

   jwt.verify(token, process.env.JWT_TOKEN_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: "Refuse to authorize!" });
      req.user = user;
      next();
   });
};

router.post('/api/login', async (req, res) => {
   const { username, password } = req.body;
   if (!(username && password)) {
      return res.status(400).json({ message: 'Please provide both username and password.' });
   }
   try {
      const user = await User.findOne({ username: username });
      console.log("Hello, " + user.username);
      if (!user) return res.status(400).json({ staus: 'error', message: 'User not found!' });
      if ((!(await bcrypt.compare(password, user.password)))) {
         return res.status(400).json({ status: 'error', message: 'Invalid password!' });
      }
      else {
         console.log("Hello")
         const token = jwt.sign({
            id: user._id,
            username: user.username
         },
            process.env.JWT_TOKEN_KEY,
            {
               expiresIn: "2h"
            }
         );

         const options = {
            expires: new Date(Date.now() + 2 * 60 * 60 * 1000)
         }
         user.password = undefined;
         return res.status(200).cookie("Token", token, options).json({ status: 'ok', message: 'Login successful', user: user, token: token });
      }
   }
   catch (err) {
      return res.status(400).json({ status: 'error', message: 'Error occures.' });
   }
});

router.get('/api/user/profile', authenticateToken, async (req, res) => {
   try {
      const user = await User.findById(req.user.id);
      if (!user) {
         return res.status(404).json({ message: "User not found" });
      }
      res.json({ user });
   } catch (error) {
      res.status(500).json({ message: "Internal server error" });
   }
});

export default router;