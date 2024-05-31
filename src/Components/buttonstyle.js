import style  from "styled-components";

export const Button = style.button`
padding: 10px;
border-radius: 20px;
outline: none;
background-color: black;
color: white;
text-decoration: none;
min-width: 220px;
border: none;
border: 3px solid black;
transition: 0.4s background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 3px solid black;
    transition: 0.3s background ease-in;
}
`;