import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri';


export const Container = styled.div`
--horizontalPadding: 16px;
--verticalPadding: 24px;

.abençoadeus{
    overflow: visible;
    white-space: normal;
    margin-left: 0;
}

padding: var(--verticalPadding) var(--horizontalPadding);
overflow: hidden;

h2{
 font-family: Arial, Helvetica, sans-serif;
 font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 15px;
color: rgba(22, 25, 26, 0.5);
}

`;

export const Main = styled.div`
display: flex;
flex-direction: column;


margin: 0 auto;
max-width: 1280px;

@media (min-width : 768px){
    flex-direction: row;
}

`;

export const LeftSide = styled.div`
padding: 0 var(--horizontalPadding);
@media (min-width: 768px){
    width: 25%;
}

`;

export const RightSide = styled.div`
@media (min-width: 768px){
    width: 75%;
}
`;

export const Repos = styled.div`
margin-top: var(--verticalPadding);

h2{
    font-size: 16px;
    font-weight: normal;
    margin-left: 40px;

}

div {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 14px;
    
    
    @media (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        /* grid-auto-rows: minmax()(min-content, max-content); */
        

    }

}


`;

export const CalendarHeading = styled.span`
    font-size: 16px;
    margin: 36px 0 9px;
    display:inline-flex;

`;


export const Tab = styled.div`
    background: var(--primary);
    
    .content{
        display:flex;
        align-items: center;
        width: min-content;
     
        padding: 5px 0;

        border-bottom:4px solid;
        border-color:#7B61FF;
        margin-right: 50px;

        .label {
            font-size: 14px;
            padding: 0 7px;
            font-weight: 600;
        }
            .number{
                font-size: 12px;
                background: var(--ticker);
                padding: 2px 6px;
                border-radius: 24px;
            }
        
        }
        
        .line{
            display: flex;
            width:250vw;
            border-bottom: 4px solid var(--border);
            margin-left: -50vw;
        }
        &.mobile {
            margin-top: var(--verticalPadding);
            display: inline-flex;

            .content{
                margin: 0 auto;

            }

            @media (min-width: 768px){
                display: none;

            }

        }

            &.desktop{
                display: none;
               
                @media (min-width: 768px) {
                    display: unset;
                
        .wrapper{

            display: flex;
            margin: 0 auto;
            max-width: 1280px;
            margin-bottom: 25px;


                    }

                    .offset{
                        width: 25%;
                        margin-right:var(--horizontalPadding);

                    }
                
                }
            }
`;