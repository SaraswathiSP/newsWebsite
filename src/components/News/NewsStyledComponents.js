import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai'


export const NewsContainer = styled.div`
display:flex;
flex-direction:column;

`

export const TotalNews = styled.ul`
background-image: url("");
background-color:#EDE4E0;
display:flex;
flex-wrap:wrap;
justify-content:center;
width:100vw;
margin-top:-3px;
`


export const CategoryContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height:80px;
background-image:url("https://media.istockphoto.com/id/1328182974/video/4k-global-earth-map-rotating-digital-world-breaking-news-studio-loop-background.jpg?s=640x640&k=20&c=rSa1fIMB4jYYUmL_E7RIZy_UXNmf1DJEqz-9QZ7JL0M=");
width:100vw;

`

export const InputContainer = styled.div`
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 240px;
  `
  
  export const Input = styled.input`
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    width: 100%;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #D9E8D8;
    color: #0d0c22;
    box-shadow: 0 0 5px #C1D9BF, 0 0 0 10px #f5f5f5eb;
    transition: .3s ease;
    &::placeholder {
        color: #777;
      }
    @media screen and (max-width:480px){
        width:250px;
`

export const Icon = styled.svg`
    position: absolute;
    left: 1rem;
    fill: #777;
    width: 1rem;
    height: 1rem;
`


export const SearchIconContainer = styled.div`
background-color:#fff;
height:45px;
border:none;
width:45px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
export const SearchIcon = styled(AiOutlineSearch)`
font-size:35px;
color:#000;

`

export const SelectContainer = styled.select`
height: 40px;
line-height: 28px;
width:250px;
height:45px;
background-color:#C99B3B;
border:none;
border-radius:5px;
color:#fff;
font-size:15px;
font-family:"Roboto",sans-serif;
padding:15px;
@media screen and (max-width:468px){
  width:180px;
}
`

export const Option = styled.option`
height:20px;
color: #fff;
width:150px;

`
