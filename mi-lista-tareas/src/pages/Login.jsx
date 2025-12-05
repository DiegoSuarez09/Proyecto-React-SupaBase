import { useState } from 'react'
import { supabase } from '../supabase/client'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            const result = await supabase.auth.signInWithOtp({
                email,
            });
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                navigate("/");
            }
        };
        checkUser();
    }, [navigate]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                name="email"
                 placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Login;