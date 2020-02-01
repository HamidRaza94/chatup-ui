import styled from 'styled-components';

 export const NotFound = styled.div`{
     .wrapper{
         display: flex;
         align-items: center;
         justify-content: center; 
         height: 86vh;
         color: #afafafb3;
         flex-direction: column;
         h1{
             position: relative;
             display: flex;
             align-items: center;
         }
         .code{
             padding-right: 20px;
         }
         .code:after{
             position: absolute;
             height: 50px;
             width: 3px;
             background: #ddd;
             content: "";
             display: block;
             top: 8px;
            left: 123px;
         }
         .not{
             padding-left: 20px !important;
         }
     }
}`;
