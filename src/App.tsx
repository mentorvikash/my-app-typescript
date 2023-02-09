import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import PersonName from './components/PersonName';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscor from './components/Oscor';
import Button from './components/Button';
import InputElement from './components/InputElement';
import PassingCss from './components/PassingCss';
import ExpotingType from './components/ExpotingType';
import Login from './components/withHooks/login';
import CountApp from './components/Reducers/CountApp';
import DiscimenatedUnion from './components/Reducers/DiscimenatedUnion';

const personList = [
  {
    fname: 'Revive',
    lname: 'Coding'
  },
  {
    fname: 'Rajat',
    lname: 'Singh'
  },
  {
    fname: 'Vishal',
    lname: 'Singh'
  },

]


function App() {
  return (
    <div className="App">
      <Welcome name="Revive Coding" friends={140} isKnown={true} />
      <PersonName fname='Vikash' lname='Singh' />
      <PersonList nameList={personList} />
      <Status status='error' />
      <Heading>
        Place Holder Text
      </Heading>
      <Oscor>
        <Heading>
          The Oscor text is here
        </Heading>
      </Oscor>
      <Welcome name="Revive Coding" isKnown={true} />
      <Button onHandleClick = {(event, id) => console.log(event.target, id)} />
      <InputElement value='' handleChange={(event) => console.log(event) } />
      <PassingCss style={{ color: "white", background: "black", border: "1px solid black " }} />
      <ExpotingType fname='Vikash' lname='singh' />
      <Login />
      <CountApp />
      <DiscimenatedUnion />
    </div>
  );
}

export default App;