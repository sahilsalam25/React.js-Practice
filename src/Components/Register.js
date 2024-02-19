import React from 'react';
import Styled from 'styled-components';

export default function Register
    (props) {
    const StyledButton = Styled.button`
        display:block;
        padding:10px 5px;
        background-color:#2196F3;
        color:white;
        width:100%;
        font-size:large;
        border:none;
        border-radius:15px;
        margin-top:15px;
        `;
    const StyledRegisterContainer = Styled.div`
        width:650px;
        border-radius:15px;
        font-size:large;
        border:2px solid black;
        &:hover{
            box-shadow:1px 1px 7px yellow;
        }
        @media(min-width:0px) and (max-width:600px){
            width:350px;
        }
        `
    // return (
    // <StyledRegisterContainer className='container card p-3 mt-2 register-container'>
    //     <form onSubmit={props.submit}>
    //         <div className='form-group'>
    //             <label htmlFor='name'>Name

    //             </label>
    //             <input type='text' name='name' className='form-control' />
    //         </div>
    //         <div className='form-group'>
    //             <label htmlFor='email'>Email

    //             </label>
    //             <input type='email' name='email' className='form-control' required />
    //         </div>
    //         <div className='form-group'>
    //             <label htmlFor='password'>Password

    //             </label>
    //             <input type='password' name='password' className='form-control' required />
    //         </div>
    //         <button type='submit' className='btn btn-primary'>Submit</button>
    //         <StyledButton type='button'>Login</StyledButton>
    //     </form>

    // </StyledRegisterContainer>
    // )
}
