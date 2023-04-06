const text = document.querySelector('.text');
const but = document.querySelector('.subs');
const email = document.querySelector('#email');
const please = document.querySelector('.please');


but.addEventListener('click', function(){
    
    if(email.value ==='' || email.value === null){
        text.style.display = 'none';
        please.style.display = 'block';
    }else{
        text.style.display = 'block';
        please.style.display = 'none';
    } 
    
});
