import styled from "styled-components"

export const StyledPage = styled.div`
    height:100%;
    width:100%;
    background:blue;
    display:flex;
    justify-content:center;
    text-align:center;
    font-family: 'Yomogi', cursive,Arial, Helvetica, sans-serif;
`

export const ModalBackGround = styled.div`
    opacity:0.7;
    background:black;
    position:absolute;
    top:0;
    left:0;
    height:100vh;
    width:100vw;
    z-index:1;

`


export const GameModal = styled.div<{flexDirection:string;}>`
    position:absolute;
    display:flex;
    flex-direction:${(props)=>props.flexDirection};
    justify-content:center;
    align-items:center;
    top:30%;
    left:30%;
    height:50vh;
    width:30vw;
    z-index:2;
    background:red;

`