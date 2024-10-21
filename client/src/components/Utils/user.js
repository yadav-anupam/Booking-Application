import axios from 'axios';

async function registerUser (event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
        const createdUser = await axios.post('/api/user/register', {
            name,
            email,
            password
        });
        if(createdUser){
            alert('User created successfully');
            console.log(createdUser);
        }
        else{
            alert('User not created');
        }
        
    } catch (error) {
        alert(`Error: ${error}`);
    }
}

async function loginUser (email , password) {
    
    try {
        const user = await axios.post('/api/user/login', {
            email,
            password
        });
        if(user){
            return user;
        }
        else{
            alert('User not found');
        }
    } catch (error) {
        alert(error);
    }
}



export { registerUser  , loginUser };