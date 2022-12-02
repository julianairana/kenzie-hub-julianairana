import styled from "styled-components";

export const HomeContainer = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 25px;

`
export const HomeNavBar = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        font-family: 'Inter', sans-serif;
        height: 32px;
        width: 55px;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        background: #212529;
        border-radius: 4px;
        color: #F8F9FA;
        font-size: 12px;
        font-weight: 600;
        line-height: 28px;
        text-align: center;
    }
`

export const HomeHeader = styled.div`
        width: 100%;
        height: 118px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-top: 1px solid #212529;
        border-bottom: 1px solid #212529;

        h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        color: #F8F9FA;
        margin-left: 105px;
    }

       span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: #868E96;
        margin-top: 5px;
        margin-right: 104px;
    }
`

export const HomeCards = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;

        div {
        width: 100%;   
        display: flex;
        align-items: baseline;
        justify-content: space-around;
        }

        h3 {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        color: #F8F9FA;  
        margin-left: 7px;
        }

        button {
        height: 32px;
        width: 32px;
        background: #212529;
        border-radius: 4px;    
        margin-right: 7px;
        }

        .divUl {
            display: flex;
            justify-content: center;
            width: 54%;
            margin: auto;
        }

        ul {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        margin-top: 30px;
        background: #343B41;
        border-radius: 4px;
        padding: 12px 0px 12px 0px;
        }

        li{
        width: 92%;
        height: 43px ;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px;
        background: #121214;
        margin: auto;
        margin-top: 8px;
        margin-bottom: 8px;
        }

        .divSpan {
            display: flex;
            width: auto;
            align-items: flex-start;
            gap: 5px;
        }

        span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: #868E96;
        margin-top: 5px;
       
    }

    .buttonTrash {
        height: 32px;
        width: 32px;
        border-radius: 4px;    
        margin-right: 7px;
        background: transparent;
    }

 

`