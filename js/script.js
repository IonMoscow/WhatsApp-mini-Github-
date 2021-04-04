let inputUser1 = document.querySelector('.input-user1');
let inputUser2 = document.querySelector('.input-user2');
let submitUser1 = document.querySelector('.submit-user1');
let submitUser2 = document.querySelector('.submit-user2');

submitUser1.addEventListener('click',(event)=>{
    let message = inputUser1.value;//получает значение
    inputUser1.value='';//очищает инпут
    
    const sectionMessage1 = document.querySelector('.sections-blocks1');
    const el = document.createElement('div');
    el.innerText = message;
    if(message != '') {
        sectionMessage1.appendChild(el);
    }
});

submitUser2.addEventListener('click',(event)=>{
    let message = inputUser2.value;
    inputUser2.value='';
    
    const sectionMessage2 = document.querySelector('.sections-blocks2');
    const el = document.createElement('div');
    el.innerText = message;
    if(message != '') {
        sectionMessage2.appendChild(el);
    }
});