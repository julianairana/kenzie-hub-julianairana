import styled from "styled-components";

export const Login = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    div {
        height: 70%;
        width:  60%;
        max-width: 369px;
        border-radius: 4px;
        padding: 42px 0px 42px 0px;
        background: #212529;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #F8F9FA;
    }

    form {
        width: 85%;
        gap: 15px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    label {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;
        color: #F8F9FA;
    }
    
    input {
        font-family: 'Inter', sans-serif;
        width: 100%;
        height: 40px;
        background: #343B41;
        border: 1.2px solid #F8F9FA;
        border-radius: 4px;
        color: #F8F9FA;
        padding: 0px 10px 0px 15px;
    }
    
    button {
        font-family: 'Inter', sans-serif;
        width: 100%;
        height: 40px;
        background: #FF577F;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        margin-top: 5px;
        color: #FFFFFF;
    }

    span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: #868E96;
        margin-top: 5px;
    }

    a {
        font-family: 'Inter', sans-serif;
        width: 85%;
        height: 40px;
        border-radius: 4px;
        background: #868E96;
        text-align: center;
        margin-top: 21px;
        padding: 5px; 
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
        color: #F8F9FA;

    }
`