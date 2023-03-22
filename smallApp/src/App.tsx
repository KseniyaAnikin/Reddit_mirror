import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import './main.global.css'
import { CardsList } from "./shared/CardsList";
import { assignId, generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";
import { EColors, Text } from "./shared/Text";
import { useToken } from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";


const LIST = [
  {text: 'some'},
  {text: 'other some'},
  {text: 'some'}
].map(generateId)

function AppComponent(){
  const [token] = useToken();
  const { Provider } = tokenContext

  return(
    <Provider value={token}>
      <Layout>
        <Header/>
        <Content>
          <CardsList/>
        </Content>
      </Layout>
    </Provider>
  )
}

export const App = hot(()=> <AppComponent/>);