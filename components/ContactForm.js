import { click } from "@testing-library/user-event/dist/click"
import React,{useState} from "react"

export default function ContactForm(props){
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [comment,setComment]=useState('');


function handleSubmit(event){
  event.preventDefault();
  console.log('name - ',name);
  console.log('email - ',email);
  console.log('comment - ',comment);
  
}

  return(


  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">name - </label>
      <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div>
      <label htmlFor="email">email - </label>
      <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div>
      <label htmlFor="comment">Comment - </label>
      <textarea id="comment" value={comment} onChange={(e)=>setComment(e.target.value)} />

    </div>
    <button type="submit">Submit</button>
  </form>


  )
}



// function alreadyClick(){
//   props.onClick();
//   setClicked(true);
// }





// return(
// <div>

//   <h1>the color is {color}</h1>
//   <h2>get the  output from the object {abc.b}</h2>

//   //one time
//   <button onClick={clicked ? undefined:alreadyClick} disabled={clicked}>
//     click on me!!
//   </button>
//   </div>







