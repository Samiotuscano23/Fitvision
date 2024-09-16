import OpenAI from "openai";
import dotenv from 'dotenv';
import { Router } from "express";
import chatData from '../model/chatData.js';

dotenv.config();

const router = new Router();

const openai = new OpenAI({
   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

router.post('/api/chat', async (req, res) => {
   const { prompt } = req.body;
   try {
      const response = await openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         messages: [
            {
               role: "user",
               content: prompt
            }
         ],
         temperature: 1,
         max_tokens: 256,
         top_p: 1,
         frequency_penalty: 0,
         presence_penalty: 0,
      });
      const newChatData = new chatData({
         username: "Dhvanik",
         question: prompt,
         answer: response.choices[0].message.content
      })
      const save = await newChatData.save();
      return res.status(200).json({ "message": response.choices[0].message.content });
   } catch (error) {
      return res.status(500).json({ status: 'error', message: 'Error requesting AI bot.' });
   }
})

router.get('/api/history/:user', async (req, res) => {
   const user = req.params.user;
   try {
      const chat = await chatData.find({ username: user });

      return res.status(200).json({ status: 'success', message: 'Chats found', Chat: chat });
   } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Error in finding chat.' });
   }
});

router.delete('/api/history/:user',async (req, res) => {
   const username = req.params.user;
   try {
      const result = await chatData.deleteMany({ username: username });

      if (result.deletedCount === 0) {
         return res.status(404).json({ status: 'error', message: 'No chat history found for the specified user.' });
      }

      return res.status(200).json({ status: 'success', message: 'Chat history deleted successfully.' });
   } catch (err) {
      return res.status(500).json({ status: 'error', message: 'Error in deleting history.' });
   }
})

export default router;