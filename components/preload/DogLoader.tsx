// src/DogLoader.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const head = keyframes`
  0%,10%,20%,26%,28%,90%,100% { height:8.25vmax; bottom:0; transform-origin:bottom right; transform:rotateZ(0); }
  5%,15%,22%,24%,30% { height:8.1vmax; }
  32%,50% { height:8.25vmax; }
  55%,60% { bottom:0.75vmax; transform-origin:bottom right; transform:rotateZ(0); }
  70%,80% { bottom:0.75vmax; transform-origin:bottom right; transform:rotateZ(10deg); }
`;

const bodyAnim = keyframes`
  0%,10%,20%,26%,28%,32%,100% { height:7.2vmax; }
  5%,15%,22%,24%,30% { height:7.05vmax; }
`;

const earL = keyframes`
  0%,10%,20%,26%,28%,82%,100% { transform:rotateZ(-50deg); }
  5%,15%,22%,24% { transform:rotateZ(-48deg); }
  30%,31% { transform:rotateZ(-30deg); }
  32%,80% { transform:rotateZ(-60deg); }
`;

const earR = keyframes`
  0%,10%,20%,26%,28% { transform:rotateZ(20deg); }
  5%,15%,22%,24% { transform:rotateZ(18deg); }
  30%,31% { transform:rotateZ(10deg); }
  32% { transform:rotateZ(25deg); }
`;

const snout = keyframes`
  0%,10%,20%,26%,28%,82%,100% { height:3.75vmax; }
  5%,15%,22%,24% { height:3.45vmax; }
`;
const snoutB = keyframes`
  0%,10%,20%,26%,28%,98%,100% { width:1.875vmax; }
  5%,15%,22%,24% { width:1.8vmax; }
  34%,98% { width:1.275vmax; }
`;
const shadow = keyframes`
  0%,10%,20%,26%,28%,30%,84%,100% { width:99%; }
  5%,15%,22%,24% { width:101%; }
  34%,81% { width:96%; }
`;
const eyeAnim = keyframes`
  0%,30% { width:0.675vmax; height:0.3vmax; }
  32%,59%,90%,100% { width:0.525vmax; height:0.525vmax; transform:translateY(0); }
  60%,75% { transform:translateY(-0.3vmax); }
  80%,85% { transform:translateY(0.15vmax); }
`;

const Main = styled.div`
  position:relative;
  width:23.5vmax;
  height:23.5vmax;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const Dog = styled.div`
  position:relative;
  width:22.5vmax;
  height:8.25vmax;

  &::before {
    content: "";
    position:absolute;
    bottom:-0.75vmax;
    right:-0.15vmax;
    width:100%;
    height:1.5vmax;
    background-color:rgba(28,49,48,0.1);
    border-radius:50%;
    z-index:-1000;
    animation: ${shadow} 10s cubic-bezier(0.3,0.41,0.18,1.01) infinite;
  }
`;
const Leg = styled.div`
  position:absolute;
  bottom:0;
  width:2vmax;
  height:2.125vmax;
`;
const Paw = styled.div`
  position:absolute;
  bottom:0;
  left:0;
  width:1.95vmax;
  height:1.875vmax;
  overflow:hidden;
  &::before {
    content: "";
    position:absolute;
    width:3.75vmax;
    height:3.75vmax;
    border-radius:50%;
  }
`;
const Top = styled.div`
  position:absolute;
  bottom:0;
  left:0.75vmax;
  height:4.5vmax;
  width:2.625vmax;
  border-top-left-radius:1.425vmax;
  border-top-right-radius:1.425vmax;
  transform-origin:bottom right;
  transform:rotateZ(90deg) translateX(-0.1vmax) translateY(1.5vmax);
  z-index:-1;
  background-image: linear-gradient(70deg, transparent 20%, #ff8b56 20%);
`;
const Body = styled.div`
  position:absolute;
  bottom:0.3vmax;
  left:3.75vmax;
  width:18.75vmax;
  height:7.2vmax;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  border-top-left-radius:3vmax;
  border-top-right-radius:6vmax;
  border-bottom-left-radius:6vmax;
  border-bottom-right-radius:1.5vmax;
  background-color:#ff702e;
  z-index:-2;
  animation:${bodyAnim} 10s cubic-bezier(0.3,0.41,0.18,1.01) infinite;
`;
const Tail = styled.div`
  position:absolute;
  right:-3vmax;
  width:4.5vmax;
  height:1.5vmax;
  border-radius:1.5vmax;
  background-color:#e96839;
`;
const Head = styled.div`
  position:absolute;
  bottom:0;
  left:4.5vmax;
  width:9.75vmax;
  height:8.25vmax;
  border-top-left-radius:4.05vmax;
  border-top-right-radius:4.05vmax;
  border-bottom-right-radius:3.3vmax;
  border-bottom-left-radius:3.3vmax;
  background-color:#ff8147;
  animation:${head} 10s cubic-bezier(0.3,0.41,0.18,1.01) infinite;
`;
const HeadCopy = styled(Head)`
  left:1.5vmax;
  z-index:-1;
`;
const Snout = styled.div`
  position:absolute;
  bottom:0;
  left:-1.5vmax;
  width:7.5vmax;
  height:3.75vmax;
  border-top-right-radius:3vmax;
  border-bottom-right-radius:3vmax;
  border-bottom-left-radius:4.5vmax;
  background-color:#d7dbd2;
  animation:${snout} 10s cubic-bezier(0.3,0.41,0.18,1.01) infinite;
  &::before {
    content: "";
    position:absolute;
    left:-0.1125vmax;
    top:-0.15vmax;
    width:1.875vmax;
    height:1.125vmax;
    border-top-right-radius:3vmax;
    border-bottom-right-radius:3vmax;
    border-bottom-left-radius:4.5vmax;
    background-color:#1c3130;
    animation:${snoutB} 10s cubic-bezier(0.3,0.41,0.18,1.01) infinite;
  }
`;
const Nose = styled.div`
  position:absolute;
  top:-1.95vmax;
  left:40%;
  width:0.75vmax;
  height:2.4vmax;
  border-radius:0.525vmax;
  transform-origin:bottom;
  transform:rotateZ(10deg);
  background-color:#d7dbd2;
`;
const Eye = styled.div`
  position:absolute;
  top:-0.9vmax;
  width:0.675vmax;
  height:0.375vmax;
  border-radius:50%;
  background-color:#1c3130;
  animation:${eyeAnim} 10s cubic-bezier(0.3,0.41,0.18,1.01) infinite;
`;
const Ear = styled.div<{ left?: string; right?: string }>`
  position:absolute;
  top:1.5vmax;
  width:10.5vmax;
  height:3.375vmax;
  border-bottom-left-radius:3.3vmax;
  border-bottom-right-radius:3.3vmax;
  background-color:#e26538;
  transform-origin: ${props => (props.left ? 'bottom left' : 'bottom right')};
  transform: rotateZ(${props => (props.left ? '-50deg' : '20deg')});
  z-index:${props => (props.left ? '-1' : '-2')};
  animation: ${props => (props.left ? earL : earR)} 10s cubic-bezier(0.3,0.41,0.18,1.01) infinite;
  ${props => props.left && `left:${props.left};`}
  ${props => props.right && `right:${props.right};`}
`;

const DogLoader: React.FC = () => (
  <div style={{ width: '100vw', height: '100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'#fff' }}>
    <Main>
      <Dog>
        <div style={{ position:'absolute', bottom:0, left:'7.5vmax', width:'12vmax', height:'3vmax' }}>
          <Leg style={{ left:'-3vmax', zIndex:-10 }}><Paw style={{}}><Top /></Paw></Leg>
          <Leg style={{ left:0, zIndex:10 }}><Paw /><Top /></Leg>
          <Leg style={{ right:0 }}><Paw /><Top /></Leg>
        </div>
        <Body><Tail/></Body>
        <Head>
          <Snout><Nose/><div><Eye style={{ left:'27%' }}/><Eye style={{ left:'65%' }}/></div></Snout>
        </Head>
        <HeadCopy />
        <Ear left="6vmax" /><Ear right="3vmax" />
      </Dog>
    </Main>
  </div>
);

export default DogLoader;
