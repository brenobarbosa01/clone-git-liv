import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 overflow: hidden;
 padding: 16px 20px 0 10px;
 border: 1px solid var(--border);
 border-radius: 6px;

 .wrapper{
     .scale-0{
         fill:#7B61FF
     }
     .scale-1{
       fill: #E5E5E5;
     }
     .scale-2{
        fill: #E5E5E5;
     }
     .scale-3{
         fill: #7B61FF;
     }
     .scale-4{
         fill: #7B61FF;
     }
     
     width: 893px;

 }

    span{
        font-size: 11px;
        color: var (--link);
        margin-top: -25px;
        margin-left: 7px;
        padding-bottom:16px;
        align-self: flex-start;
    }
`;
