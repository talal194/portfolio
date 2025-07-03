
import { EXAMPLES } from '../data';
import { useState } from 'react';
import TabButton from './TabButton';
import Section from './Section';
//import Tabs from './Tabs';


// function Examples(){

// const [selectedTopic,setSelectedTopic] = useState('');

// function handleClick(topic){
// setSelectedTopic(topic);
// console.log(topic);
// }

// let tabContent = <p>click the tab button</p>

// if(selectedTopic){
//   tabContent = (<div id='tab-content'>
// <h3>{EXAMPLES[selectedTopic].title}</h3>
// <p>{EXAMPLES[selectedTopic].description}</p>
// {EXAMPLES[selectedTopic].code}
//   </div>)
// }

// return(<Section id='examples'>


// <Tabs  
// buttonsContainer="menu" 
// buttons={
//   <>
//  <TabButton select={selectedTopic === 'components'}  onClick={()=> handleClick('components')}>Conponents</TabButton>
//  <TabButton select={selectedTopic === 'jsx'} onClick={()=> handleClick('jsx')}>Jsx</TabButton>
//  <TabButton select={selectedTopic === 'props'} onClick={()=> handleClick('props')}>Props</TabButton>
//  <TabButton select={selectedTopic === 'state'} onClick={()=> handleClick('state')}>State</TabButton>
//  </>
// }>

// {tabContent}
// </Tabs>
 
// </Section>)

// }


function Examples(){

const [selectedTopic,setSelectedTopic] = useState('');

function handleClick(topic){
setSelectedTopic(topic);
console.log(topic);
}

let tabContent = <p>please select the topic</p>;

if(selectedTopic){
  tabContent = (<div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  {EXAMPLES[selectedTopic].code}
  
</div>);
}

return(<Section id='examples'>
      <h2>Examples</h2>
      {/*=====  select={isSelect === 'components' ======= is used to active tab only no other work} */}
      
    <menu>
    <TabButton select={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
    <TabButton select={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>Jsx</TabButton>
    <TabButton select={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
    <TabButton select={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton> 
    </menu>
    {tabContent}
  </Section>)

}

export default Examples;