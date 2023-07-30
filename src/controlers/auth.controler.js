import { createUser } from "../services/user.service";

 export const registration = async (req,res) => {
    const payload = req.body;
    await createUser(payload)
    return res.json({message:"created"})

}

export const login = async(req,res) => {
    const payload = req.body;
    const token = await loginUser(payload);
    return res.json({token})

} 