import styled, { css } from 'styled-components';
import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from 'react-icons/ri';

export const Container = styled.div`
.buttonfollow{
display: flex;
align-items: center;
justify-content: center;
margin-top: -5px ;
margin-bottom: 25px;
border-radius:6px ;
background: #7B61FF;
padding: 10px;

}

button{
    color: white;
}

`;



export const Flex = styled.div`
display: flex;
align-items: center;
> div {
    margin-left : 24px;

    >h1 {
        font-size: 26px;
        line-height: 1.25;
        color:var(--gray-dark);
        font-weight:600;
        text-align:center;
        margin-left: 85px;
    }
    >h2{
        font-size: 20px;
        color: var(--username);
        font-weight:300;
        text-align:center;
        margin-left:85px;
        
    }
}

@media (min-width:768px){
flex-direction: column;
align-items: flex-start;

div{
    margin-left: 0;
    margin-top: 16px;
}

}

`;
export const Avatar = styled.img`
width: 16%;
border-radius: 50%;

@media (min-width: 768px){
    width:50%;
    margin:auto
    /* margin-top:-34px */
}
`;
export const Row = styled.ul`



b{
    font-weight:350;
}

 display:grid;
grid-template-columns: 1fr 1fr 1fr;
 margin: 25px 0px;
 >li {
     display:grid;
     align-items: center;
     justify-content: center;
     font-size: 25px;

>span {
    display: flex;
    font-size: 15px;
    color:var(--gray);
    align-items: center;
    
}
    > * {
        display:grid;
     align-items: center;
     justify-content: center;
    }

 }


 `;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    flex-shrink:0 ;
 `;
export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;
export const Column = styled.ul`
 li {
     display:flex;
     align-items: center;
     font-size: 14px;

 }

 li + li {
     margin-top:10px;
 }

 span {
     margin-left:10px;
     overflow:hidden;
     text-overflow: ellipsis;
     white-space:nowrap;
 }
 
 `;
export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}`;
export const LocationIcon = styled(RiMapPin2Line)`${iconCSS}`;
export const EmailIcon = styled(RiMailLine)`${iconCSS}`;
export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;
