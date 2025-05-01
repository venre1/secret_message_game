const {hash} = window.location
const message=atob(hash.replace('#',''));
if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}
document.querySelector('form').addEventListener('submit',event =>{
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');
//encrypts the users text using btoa
  const input = document.querySelector('#message-input');
  const encrypted =btoa(input.value);

  const linkInputs = document.querySelector('#link-input')
  linkInputs.value=`${window.location}#${encrypted}`;
  linkInputs.select();
});