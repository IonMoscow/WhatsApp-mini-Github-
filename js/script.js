let inputUser1 = document.querySelector('.input-user1');
let inputUser2 = document.querySelector('.input-user2');

let submitUser1 = document.querySelector('.submit-user1');
let submitUser2 = document.querySelector('.submit-user2');

submitUser1.addEventListener('click',(event)=>{
    event.preventDefault();
    let message = inputUser1.value;//получает значение
    inputUser1.value='';//очищает инпут
    
    const sectionMessage1 = document.querySelector('.section-message1');
    const el = document.createElement('div');
    el.innerText = message;
    sectionMessage1.appendChild(el);
});

submitUser2.addEventListener('click',(event)=>{
    event.preventDefault();
    let message=inputUser2.value;
    inputUser2.value='';
    
    const sectionMessage2 = document.querySelector('.section-message2');
    const el = document.createElement('div');
    el.innerText = message;
    sectionMessage2.appendChild(el);
});


// let messageShowUser1 = document.querySelector('.message-user1');
// let messageShowUser2 = document.querySelector('.message-user2');

// let formUser1 = document.querySelector('.section-user1');
// let formUser2 = document.querySelector('.section-user2');

// let inputUser1 = document.querySelector('.input-user1');
// let inputUser2 = document.querySelector('.input-user2');

// let submitUser1 = document.querySelector('.submit-user1');
// let submitUser2 = document.querySelector('.submit-user2');

// let idMessagesUser1 = 0;
// let idMessagesUser2 = 0;

// let objectForMessages = [//Объект для сообщений
//         [],
//         []
//     ];

//     submitUser1.addEventListener('click',(event)=>{
//         event.preventDefault();
//         let message = inputUser1.value;//получает значение
//         inputUser1.value='';//очищает инпут
//         let nowaDate=new Date();
//         let messageObject={
//             date:''+(nowaDate.getHours())+':'+(nowaDate.getMinutes())+'',
//             messages:message
//         };

//         const sectionMessage1 = document.querySelector('.section-message1');
//         const el = document.createElement('div');
//         el.innerText = message;
//         sectionMessage1.appendChild(el);
            
        

//         objectForMessages[0].push(messageObject);
//         messageShowUser1.textContent+=objectForMessages[0][idMessagesUser1]['date']+':'+' '+objectForMessages[0][idMessagesUser1]['messages'];
//         idMessagesUser1++;
//         formUser1.classList.add('hidden');
//     });

//     submitUser2.addEventListener('click',(event)=>{
//         event.preventDefault();
//         let message=inputUser2.value;
//         inputUser2.value='';
//         let nowaDate=new Date();
//         let messageObject={
//             date:''+(nowaDate.getHours())+':'+(nowaDate.getMinutes())+'',
//             messages:message
//         };


//         const sectionMessage2 = document.querySelector('.section-message2');
//         const el = document.createElement('div');
//         el.innerText = message;
//         sectionMessage2.appendChild(el);
        

//         objectForMessages[1].push(messageObject);
//         messageShowUser2.textContent+=objectForMessages[1][idMessagesUser2]['date']+':'+' '+objectForMessages[1][idMessagesUser2]['messages'];
//         idMessagesUser2++;
//         formUser2.classList.add('hidden');
//     });