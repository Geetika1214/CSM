import React from 'react';
import Container from '../Components/Container'; // Import your Container component
import InputField from '../Components/InputField'; // Import your InputField component
import Button from '../Components/Button'; // Import your Button component
// import { useHistory } from 'react-router-dom'; // For navigation

const ForgotPassword = () => {
    // const history = useHistory(); // For navigation to Sign In page

    // const handleResetPassword = (e) => {
    //     e.preventDefault();
    //     // Logic to handle password reset goes here
    // };

    return (
        <Container>
            <h2 className="text-2xl font-bold text-center mb-6">Forgot Your Password?</h2>

            <form  className="space-y-4">
                {/* Email Input */}
                <InputField 
                    type="email" 
                    placeholder="Enter your email" 
                />

                {/* Reset Password Button */}
                <Button text="Reset Password" />
                <Button text="Back to Sign In"/>
            </form>

            
           
        </Container>
    );
};

export default ForgotPassword;
