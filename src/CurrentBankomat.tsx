import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <Banknotes color={props.money.banknotes==='Dollars'? 'chartreuse' :'cadetblue'}>
            <Name>   {props.money.banknotes}</Name>
            <Nominal>   {props.money.value}</Nominal>
        </Banknotes>
    );
};

type ColorType={
    color:string
}

const Banknotes = styled.div<ColorType>`
  background-color:${props => props.color};
  width: 400px;
  height: 200px;
  margin: 10px;
`

const GreenBanknotes = styled.div`
  background-color: chartreuse;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const BlueBanknotes = styled.div`
  background-color: cadetblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`
const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`
const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 100px;
`

//------------------------------------------------------------------

// import React from 'react';
// import {MoneyType} from "./App";
// import styled from "styled-components";
//
// type CurrentBankomatPropsType = {
//     money: MoneyType
// }
// export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
//
//     return (
//         props.money.banknotes === "Dollars"
//             ? <GreenBanknotes>
//                 <Name>   {props.money.banknotes}</Name>
//                 <Nominal>   {props.money.value}</Nominal>
//
//             </GreenBanknotes>
//             : <BlueBanknotes>
//                 <Name>   {props.money.banknotes}</Name>
//                 <Nominal>   {props.money.value}</Nominal>
//             </BlueBanknotes>
//
//     );
// };
//
// const GreenBanknotes = styled.div`
//   background-color: chartreuse;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BlueBanknotes = styled.div`
//   background-color: cadetblue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
// const Name = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
// `
// const Nominal = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
//   font-size: 100px;
// `