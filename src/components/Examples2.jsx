import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";



function Examples2(){
const [selectTopic,setSelectTopic] = useState('');

function handleSelect(topic){
setSelectTopic(topic);
console.log(topic);

}


let tabContent = <span>select the topic</span>;

if(selectTopic){
  tabContent = (<div id="tab-content">
                <h3>{EXAMPLES[selectTopic].title}</h3>
                <p>{EXAMPLES[selectTopic].description}</p>
                {EXAMPLES[selectTopic].code}
              </div>)
}




return(<section id="examples">
<menu>
  <TabButton select={selectTopic === 'components'} onClick={() => handleSelect('components')}>components</TabButton>
  <TabButton select={selectTopic === 'jsx'} onClick={()=> handleSelect('jsx')}>jsx</TabButton>
  <TabButton select={selectTopic === 'props'} onClick={()=> handleSelect('props')}>props</TabButton>
  <TabButton select={selectTopic === 'state'} onClick={()=> handleSelect('state')}>state</TabButton>
</menu>
{tabContent}
</section>)


}





export default Examples2;