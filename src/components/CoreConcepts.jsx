import { CORE_CONCEPTS } from '../data';
import Concept from './Concept';

function CoreConcepts(){

return(
    <section id='core-concepts'>
    <h2>core concepts</h2>
    <ul>
    {CORE_CONCEPTS.map((el)=>(<Concept key={el.title}  {...el}/>))}
    </ul>
</section>  
)

}


export default CoreConcepts;