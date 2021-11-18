import React from 'react';

const Modal = () => {
    return (
        <div>
            <div class= "form-control">
            <label for="email" >Email</label>
            <input type="email"></input>
            </div>
              
            <div class= "form-control">
            <label for="password" >Password</label>
            <input type="password"></input>
            </div>

            <button class="btn" id="submit-btn">Submit</button>

        </div>
    )
};

export default Modal;
