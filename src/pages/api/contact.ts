//will keep this if in the future i want to switch to use backend for the contact sumbit forms 
//api will come in handy


import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '@/lib/firebase'
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method != 'POST'){
        return res.status(405).json({ error: 'Method now allowed'});
    }
    
    const { email, message } = req.body;

    if(!email || !message){
        return res.status(400).json({ error: "Missing email or message"});
    }

    try{
        const docRef = await addDoc(collection(db, 'messages'), {
            email, message, timeStamp: serverTimestamp(),
        });

        
        return res.status(200).json({ id: docRef, message: 'Message Received!'});
    } catch(error) {
        return res.status(500).json({ error: 'Failed to save message'});
    }
}
