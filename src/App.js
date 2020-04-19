import React from 'react';
import './App.css';
import styled from 'styled-components';
import amanda from './images/manderheadshot.JPEG'
import stars from './images/stars.png'
import gal from './images/galaxy.png'
import instagram from './images/my-icons-collection/png/001-instagram.png'
import fb from './images/my-icons-collection/png/002-facebook.png'
import github from './images/my-icons-collection/png/003-github.png'
import linkedin from './images/my-icons-collection/png/004-linkedin.png'
import telegram from './images/my-icons-collection/png/005-telegram.png'
import love from './images/icons8-love-24.png'

function App() {
  return (
    <Background >
        {/* <Image src={amanda} alt="pic" />  */}
        <Rectangle>
        </Rectangle>
        <Text>
        Amanda Deng
        </Text>
        <Paragraph>
        I’m a junior at MIT studying EECS. Previously a PM/SWE intern - Microsoft, university intern - Greylock Partners, and business operations intern - Karuna Health. I love noodles and catching a good sunset. Excited to be a product manager intern at Splunk this summer!
        </Paragraph>
        <Stars src={stars} alt="pic"></Stars>
        <AmandaPic src={amanda} alt="amandapic"></AmandaPic>
        <Galaxy src={gal} alt="galaxy"></Galaxy>
        <Outline></Outline>
        <a href="https://www.instagram.com/amanda.deng"><img style={{position:"absolute",left:1100,top:730}} src={instagram} alt="insta_icon" ></img></a>
        <a href="https://www.facebook.com/amanda.wdeng"><img style={{position:"absolute",left:1150,top:730}} src={fb} alt="fb_icon"></img></a>
        <a href="https://github.com/amanda-deng"><img style={{position:"absolute",left:1200,top:730}} src={github} alt="gh_icon"></img></a>
        <a href="https://www.linkedin.com/in/amanda-deng"><img style={{position:"absolute",left:1250,top:730}} src={linkedin} alt="li_icon"></img></a>
        <a href="mailto:adeng@mit.edu"><img style={{position:"absolute",left:1300,top:730}} src={telegram} alt="tele_icon"></img></a>
        <footer style={{position:"absolute",left:630,top:750}}>Made with </footer>
        <footer style={{position:"absolute",left:750,top:750}}>by Amanda</footer>
        <img style={{position:"absolute",left:715,top:750}} src={love}></img>
    </Background>
  );
}

export default App;

const Background = styled.div`
  background: white;
  overflow-x: hidden;
  overflox-y: hidden;
` 
const Rectangle = styled.area`
  position: fixed;
  width: 1000px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(208, 230, 243, 0.63);
`
const Outline = styled.area`
  position: absolute;
  width: 333px;
  height: 420px;
  left: 840px;
  top: 230px;

  border: 3px solid #000000;
  box-sizing: border-box;
`

const AmandaPic = styled.img`
  position:absolute;
  left: 800px;
  top: 171px;
  z-index: 30;
  width: auto;
  height:450px;
  border: 3px solid #000000;
`
// width: 350px;
  // height: 330px;
const Text = styled.p`
  position: absolute;
  top:-10px;
  left: 150px;
  font-family: TheBillieMonlly DEMO;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  color: #000000;

`
const Paragraph = styled.p`
  position: absolute;
  width: 612px;
  height: 259px;
  left: 150px;
  top: 200px;

  font-family: Verdana;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
`

const Stars = styled.img`
position: absolute;
width: 400px;
height: 382px;
left: 980px;
top: -69px;
transform: rotate(65.07deg);
`

const Galaxy = styled.img`
  position: absolute;
  width: 695px;
  height: 336px;
  left: 10px;
  top: 440px;

`
// style ={{backgroundImage:`url(${back})`}} 
//<img src={logo} className="App-logo" alt="logo" />