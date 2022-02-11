let example1 = document.querySelector('#example1');
example1.addEventListener('click', function(event){
  window.location.href = "http://bing.com";



  event.preventDefault();
 

});
// let example2 = document.querySelector('#example2');
// example2.addEventListener('click', function(event){
//   window.location.href = "http://bing.com";

//   event.preventDefault();
 

// });
// let example3 = document.querySelector('#example3');
// example3.addEventListener('click', function(event){
//   window.location.href = "http://bing.com";

//   event.preventDefault();
 

// });



// document.body.addEventListener('contextmenu', function(event){
//   console.log(event);
// })


// document.body.addEventListener('contextmenu', function(event){
//  event.preventDefault();
// });


// document.querySelector('div').addEventListener('dblclick', function(event){
//   alert('Hello');
//   // event.preventDefault();doesn't work
//  });
//  document.querySelector('div').addEventListener('mousemove', function(event){
//  console.log(event);
//  });


//  let example = document.createElement('section');
//  example.style.width = "20px";
//  example.style.height = "20px";
//  example.style.backgroundColor = "black";
//  example.style.position = "absolute";
//  document.body.append(example);

// document.body.addEventListener('mousemove', function(event){
//   example.style.top = event.clientY + 'px';
//   example.style.left = event.clientX + 'px';
    
// });



// document.body.addEventListener('mousedown', function(event){
 
//   console.log('mousedown');
// });

// document.body.addEventListener('click', function(event){
//   console.log('click');
// })

// document.body.addEventListener('mouseup', function(event){

//   console.log('mouseup');
// });

// example1.style.backgroundColor = "black";
// example1.addEventListener('mouseover', function(event){

//   console.log('mouseover');
// });

// example1.addEventListener('mouseout', function(event){

//   console.log('mouseout');
// });


// let example2 =  document.querySelector('#example2');

// example2.addEventListener('keyup', function(event){
//   console.log('keyup'.event)
// });
// example2.addEventListener('keydown', function(event){
//   console.log('keydown', event);
//   const preventList = ["0", "1", "2","3","4","5","6","7","8", "9"]
//   if (preventList.includes(event.key)) {
//     event.preventDefault();
//   }
  
// });

let example3 = document.querySelector('#example3');
let example3span = document.querySelector('#example3span');
example3.addEventListener('keydown', function(event){
  example3span.textContent = example3.value;
});


let example4 = document.querySelector('#example4');
let example4span = document.querySelector('#example4span');
example4.addEventListener('keydown', function(event){
  example4span.textContent = example4.value;
  example4span.style.backgroundColor = `${example4.value}`;
});