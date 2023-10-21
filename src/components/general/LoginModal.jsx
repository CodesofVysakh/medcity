import React, { useEffect } from "react";

function LoginModal({setIsModal}) {
    useEffect(() => {  
        document.body.style.overflow = 'hidden';
    },[]);
    return (
        <section id="login-modal">
            <div className="overlay"
                onClick={() => setIsModal(false)}
            ></div>
            <div className="login-container">
                <h3>Enquire Now</h3>
                <form action="/action_page.php">
                    <label for="name">Name</label>
                    <br />
                    <input type="text" id="name" name="name" placeholder="Name"/>
                    <br />
                    <label for="phone">Phone Number</label>
                    <br />
                    <input type="text" id="phone" name="phone" placeholder="Phone Number"/>
                    <br />
                    <label for="questions">Questions</label>
                    <br />
                    <input type="text" id="questions" name="questions" placeholder="Questions"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
}

export default LoginModal;
