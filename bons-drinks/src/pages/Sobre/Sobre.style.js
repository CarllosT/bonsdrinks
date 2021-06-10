import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #555
`

export const SobreWrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    height: 100vh;
    background-color: #555

    margin-top: 20px;

    img{
        width: 400px;
    }

    p{
        width: 400px;
    }
`