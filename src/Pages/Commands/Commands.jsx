import { useState } from "react";

const Commands = () => {
    const [bet, setBet] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        switch (e.target.value) {
            case 'Fold': console.log(e.target.value); break;
            case 'Call': console.log(e.target.value); break;
            case 'Check': console.log(e.target.value); break;
            default: console.log(e.target[0].value); setBet(''); break;
        }
        
    }
    
 


    return ( 
            <div>
                
                <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <input type='number'     value={bet}   onChange={(e)=>setBet(e.target.value)} placeholder='Raise bet in' required/>
                    <input type='submit' value='Confirm' />
                </form>
                                
                <button type='button'  value='Fold'  onClick={(e)=>{handleSubmit(e)}}>Fold</button>
                <button type='button'  value='Call'  onClick={(e)=>{handleSubmit(e)}}>Call</button>
                <button type='button'  value='Check' onClick={(e)=>{handleSubmit(e)}}>Check</button>

            </div>
  
     );
}
 
export default Commands
;