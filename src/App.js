import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme'; 

import Particles from 'react-particles-js'; 

import home from './pages/home';
import about from './pages/about';
import projects from './pages/projects';
import involvement from './pages/involvement';


const theme = createTheme(themeFile);

function App() {
  return (
    <div>

      {/* Particles Background using particles.js */}
      <Particles 
            params = {
              {
                "particles": {
                  "number": {
                    "value": 5,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#99badd"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#99badd",
                    "opacity": 0.1,
                    "width": 0.5
                  },
                  "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }
              }/>

        <MuiThemeProvider theme = {theme}>
                  <div className = "appContainer">
                      <Router>
                        <div>
                          <Switch>
                            <Route exact path="/" component = {home}/>
                            <Route exact path="/about" component = {about}/>
                            <Route exact path="/projects" component = {projects}/>
                            <Route exact path="/involvement" component = {involvement}/>
                          </Switch>
                        </div>
                      </Router>
                    </div>
        </MuiThemeProvider>
    </div>
  );
}
export default App;
