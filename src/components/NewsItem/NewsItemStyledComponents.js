import styled from 'styled-components'
import {AiOutlineArrowRight} from 'react-icons/ai'


export const NewsList = styled.li`
min-height:300px;
width:350px;
list-style: none;
margin:15px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border:1px solid #C99B3B;
&:hover {
    border: 2px solid #13005A;
  transform: scale(1.05);
}
&:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
`

export const NewsImage = styled.img`
width:100%;
height:145px;

`
export const AboutNews = styled.div`
margin-left:10px;
`


export const NewsTitle = styled.h2`
font-size:15px;
`

export const NewsDescription = styled.p`
font-size:12px;
`
export const MoreInfoContainer = styled.div`
display:flex;
align-items:center;
&:hover{
    color:#c99b3b;
}
`

export const ReadMore  = styled.a`
text-decoration:none;
color:#000;
`

export const RightArrow = styled(AiOutlineArrowRight)`
color:#000;
`

