import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
display:flex;
align-items:center;
padding:11px 16px;
 
 .LogoGit{
   display: flex;
margin-left: 25px;
color: #7B61FF;
margin-top: 20px;
   @media (min-width:768px){
  margin-left: 70px;
  color: #7B61FF;
  margin-top: 20px;
  }
  @media (min-width:1080px){
    margin-left: 216px;
   margin-top: 20px;
   font-size: 30px;
   color: #7B61FF;
   font-weight: 550;
  }

 }

`;
export const GithubLogo = styled(FaGithub)`
fill: black;
width: 32px;
height: 32px;
flex-shrink:0 ;


`;
export const SearchForm = styled.div`
padding-left: 16px;
width: 100%;

input{

  border-radius: 6px;
  padding: 7px 12px;
  width: 100%;
  width: 300px;
  height: 32px;
  margin-left: 40px;

  @media (min-width:768px){
  margin-left: 80px;
  }
  @media (min-width:1080px){
  margin-left: 125px;
  
  }
background: rgba(244, 244, 244, 0.15);
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 100px;

  &:focus {
    width: 318px;
  }
  transition: width .2s ease-out, color .2s ease-out;
}

`;



