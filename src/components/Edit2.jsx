import {useState} from 'react'


function Edit2(){

const [edit,setEdit] = useState(false);
const [name,setName]  = useState('player1');

function handleEdit(){
setEdit((el)=> !el);
}

function changeName(event){
setName(event.target.value);
}

let content = <span>{name}</span>;

if(edit){

content = <input type='text' onChange={changeName} value={name}/>

}



return(<section id="examples">
        {content}
        <span><button  onClick={handleEdit}>Edit</button></span>
        
        </section>)

}


export default Edit2