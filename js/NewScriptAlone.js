// let submitUser = [ 
//     document.querySelector('.submit-user1'), 
//     document.querySelector('.submit-user2'),
//   ];
  
//   let inputUser = [ 
//       document.querySelector('.input-user1'), 
//       document.querySelector('.input-user2'),
//   ];
  
//   const sectionMessage = [
//       document.querySelector('.sections-blocks1'),
//       document.querySelector('.sections-blocks2')
//   ];
//   const ChooseArr = 'клик по первому инпуту' ? i = 0 : i = 1;

//   submitUser[i].addEventListener('click',(event)=>{
//       let message = inputUser[i].value;//получает значение
//       inputUser[i].value='';//очищает инпут
//       const el = document.createElement('div');
//       el.innerText = message;
//       if(message != '') {
//           sectionMessage[i].appendChild(el);
//       }
//   });