import { Router } from "express";
import Pose from "../model/pose.js"

const router = new Router();

router.get('/api/poses', async (req, res) => {
   console.log(req);
   try {
      const poses = await Pose.find();
      return res.status(200).json({ status: 'OK', message: 'Success', Poses: poses });
   } catch (err) {
      return res.status(404).json({ status: 'error', message: 'Error occures to load data!' });
   }
});

router.get('/api/poses/:title', async (req, res) => {
   const title = req.params.title;
   try {
      const pose = await Pose.findOne({ title: title });
      return res.status(200).json({ status: 'OK', message: 'Found pose', Pose: pose });
   } catch (err) {
      return res.status(404).json({ status: "error", message: err.message });
   }
});

export default router;