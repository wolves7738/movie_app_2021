import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';


function App(){
  return ( // 라우터가 URL을 찾는 방식(순서): / -> /home -> /home/introduction 따라서 
  // /home/introduction 으로 접속한 경우에는 Home, Introduction 컴포넌트가 모두 그려진다.
  // 같은 원리로 /about에 접속하면 / -> /about 순서로 Home, About 컴포넌트가 모두 그려짐
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}
export default App;
