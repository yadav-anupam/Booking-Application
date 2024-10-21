import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);


async function createUser(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
        await User.create({ name, email, password : hashedPassword });
        return res.status(201).json({ user : "user Created" });
    }
    catch (error) {
        return res.status(500).json({ error : error.message });
    }
}  

async function loginUser(req, res) {
    const { email, password } = req.body;
    const secret = process.env.JWTPRIVATEKEY;

    try {
        const user = await User.findOne({ email });
        if (user) {
            const authenticated = bcrypt.compareSync(password, user.password);
            if (authenticated) {
                jwt.sign({ email : user.email, id:user._id, name : user.name}, secret , { } , (err , token) => {
                    if (err) {
                        return res.status(500).json({ error : err.message });
                    }
                    return res.status(200).cookie('token' , token).json({ name :user.name , email : user.email , id : user._id });
                });
                
            }
            else {
                return res.status(401).json({ user : "not authenticated" });
            }
        }   
        else {
            return res.status(404).json({ user : "User not found" });   
        }
    }
    catch (error) {
        return res.status(500).json({ error : error.message });
    }
}

async function logoutUser(req, res) {
    try {
        return res.status(200).clearCookie('token').json({ user : "Logged out" });
    }
    catch (error) {
        return res.status(500).json({ error : error.message });
    }
}

function getUser(req, res) {
    const token = req.cookies.token;
    jwt.verify(token , process.env.JWTPRIVATEKEY , (err , decoded) => {
        if (err) {
            return res.status(500).json({ error : err.message });
        }
        return res.status(200).json({ email : decoded.email , name : decoded.name , id : decoded.id });
    });
}

export { createUser , loginUser , getUser , logoutUser };
