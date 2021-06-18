import React from 'react';
import Login from './components/Login'
import Header from './components/Header/Header'
import { render, cleanup, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// import { Dashboard } from '@material-ui/icons';
// import Home from './components/Home/Home'
import ButtonTabs from './components/Home/ButtonTabs';
import Moods from './components/Moods'
import Reactions from './components/Reactions';
import Recommendation from './components/Recommendation';
import Sports from './components/Sports';
import Trending from './components/Trending'

describe("test cases for gipher app",()=>{

  test("should render Login button in header page",()=>{
    render(<Router> 
      <Header/>
      </Router>)
    expect(screen.getByTestId('btnbutton')).toHaveTextContent('Login');
  });

  let element;
  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    cleanup();
    unmountComponentAtNode(element);
    element.remove();
    element = null;
  });

  test('should render Header Component', () => {
    render(<Router> 
      <Header />
      </Router>, {
      container: element,
    });
    
  });
 
  test('should render Register button', () => {
    render(<Router> 
      <Header />
      </Router>)
      expect(screen.getByTestId('btnbutton1')).toHaveTextContent('Register');
  });

  test("should have 2 box in which 2 buttons are in header tag",()=>{
  render(<Router>
    <Header/>
    </Router>,element);
  const count =element.getElementsByTagName('<Box>').length;
  expect(count).toBe(0);
  })

  test("header must have a menu btton",()=>{
    render(<Router>
      <Header/>
      </Router>)
    expect(screen.getByTestId('menubutton')).toHaveTextContent('Login');
  })

  test("button-tabs components must have entertainment",()=>{

    render(<ButtonTabs/>,element);
    expect(screen.getByText("Entertainment")).toBeInTheDocument();
    
  })
  test("button-tabs components must have sports section",()=>{

    render(<ButtonTabs/>,element);
    expect(screen.getByText("Sports")).toBeInTheDocument();
    
  })

  test("moods component must render on the screen",()=>{
    render(<Moods/>);
    expect(screen.getByText("Moods")).toBeInTheDocument();

  })

  test("reaction component must render on the screen",()=>{
    render(<Reactions/>);
    expect(screen.getByText("Reactions")).toBeInTheDocument();

  })

  test("Recommendation component must render on the screen",()=>{
    render(<Recommendation/>);
    expect(screen.getByText("Recommended GIFs")).toBeInTheDocument();

  })

  test("sports component must render on the screen",()=>{
    render(<Sports/>);
    expect(screen.getByText("Sports")).toBeInTheDocument();

  })

  test("trending component must render on the screen",()=>{
    render(<Trending/>);
    expect(screen.getByText("Trending")).toBeInTheDocument();

  })
});

