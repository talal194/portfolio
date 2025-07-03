import { useState } from "react";

// editable field 
// save 


function Edit({initial}){
const [players,setPlayers] = useState(initial);
const [edit,isEditing] = useState(false);

function handleEdit(){
  isEditing((editing)=> !editing);  
}

function handleClick(event){
    setPlayers(event.target.value);
    }

let player = <span className="players">{players}</span>;

if(edit){ 
player = <input type='text' onChange={handleClick} value={players}  required/>
}

return(<section id="examples">
{player}
<span><button  onClick={handleEdit}>{ edit ? 'Save':'Edit'}</button></span>
</section>)

}







export default Edit;