import React from 'react';
import './App.css';
import {Container, Grid} from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={10}>
        <Grid 
         item 
         xs={12}
         sm={12}
         md={4}
         lg={3} 
         >
        {/* style= {{backgroundColor: 'blue'}} */}
          <Profile />
        </Grid>
        
        <Grid item xs>            
        {/* style={{backgroundColor: 'red'}}> */}
          

          <Router>
            <Header />
            <div className="main-content container-shadow">

            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid> 
      
    </Container>
  );
};

export default App;