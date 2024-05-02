const name=document.getElementById('name');
const email=document.getElementById('email');
const subject=document.getElementById('subject');
const message=document.getElementById('message');

const namespan1=document.getElementById('namespan');
const espan=document.getElementById('espan');
const sspan=document.getElementById('sspan');
const mspan=document.getElementById('mspan');

const form=document.getElementById('form');

var validRegex =/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
form.addEventListener('submit',(e)=>{
if(name.value===''||name.value==null||name.value>=0||name.value<=0){
e.preventDefault();
namespan1.innerHTML="name is required";
}



if(!email.value.match(validRegex)){
  e.preventDefault();
  espan.innerHTML="email is required";
  }
  
  else{
    
    espan.innerHTML= ""
    
  }

  if(subject.value===''){
    e.preventDefault();
    sspan.innerHTML="subject is required";
    }
    
    else{
      
      sspan.innerHTML= ""
      
    }
    
  if(message.value===''){
    e.preventDefault();
    mspan.innerHTML="message is required";
    }
    
    else{
      
      span.innerHTML= ""
      
    }
})
