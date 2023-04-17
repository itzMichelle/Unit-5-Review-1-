// Write your variables here. 
let button = document.querySelector('.button')
let input=document.querySelector('.input')
let result=document.querySelector('.result')
let puppy=document.querySelector('.puppy')
let kitten =document.querySelector('.kitten')
let dinosaur=document.querySelector('.dinosaur')



button.onclick=function(){
  let userInput = input.value
  console.log(userInput);

if (userInput== 'puppy'){
   result.innerHTML= 'here is an image of a puppy! <img src=https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance>'
}

else if(userInput== 'kitten'){
  result.innerHTML = 'here is an image of a kitten! <img src= https://www.catit.com/wp-content/uploads/2022/04/What-to-do-when-you-find-stray-kittens.jpg>'
}

else {
  result.innerHTML = 'here is an image of a dinosaur! <img src= https://people.com/thmb/5KDao-j60iIjmK-Ds1zgnjUuuas=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/t-rex-2000-fa6c6f21c38249b4995cbf21cb5fe5ed.jpg>'
}
  
};


