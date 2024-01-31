import React,{useState,useMemo} from "react";
import styled from "styled-components";
import bkg from "./assets/bkg.png";
import {MainLayout} from './styles/Layouts'
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expenses from "./components/Expenses/Expenses";
import ViewTransactions from './components/ViewTransaction/ViewTransactions'
import { useGloabalContext } from "./context/GlobalContext";


const App = () => {
  const  [active,setActive]=useState(1)
  const global = useGloabalContext()
  const displayData=()=>{
    switch(active){
      case 1: return <Dashboard/>
      case 2: return <ViewTransactions/>
      case 3: return <Income/>
      case 4: return <Expenses/>
      default : return <Dashboard/>
    }
  }
  const orbMemo=useMemo(()=>{
      return <Orb/>
  },[])
  return (
  <AppStyled bg={bkg} className="App">
    {orbMemo}
   <MainLayout>
    <Navigation active={active} setActive={setActive} />
    <main>
      {displayData()}
    </main>
   </MainLayout>

  </AppStyled>
  )
};
const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props=>props.bg});
    position:relative;
    main{
      flex: 1;
      background: #f5f5f5;
      border: 2px solid #FFFFFF;
      border-radius: 12px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
  `;
export default App;
