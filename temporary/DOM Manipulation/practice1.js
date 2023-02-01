const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const subContent = document.createElement('p');
subContent.classList.add('subContent');
subContent.style.color = 'red';
subContent.innerHTML = "Hey I'm Red!"

container.appendChild(subContent);

const headContent = document.createElement('h3');
headContent.style.color = 'blue';
headContent.textContent = "I'm a blue h3!";

container.appendChild(headContent);


const newDiv = document.createElement('div');
// mewDiv.setAttribute('style', 'border: black; background: blue;' )
//give the newDiv a styling of a black border and a blue background

newDiv.style.border = 'black';
newDiv.style.background = 'pink';

const newH1 = document.createElement('h1');
newH1.textContent = "I'm in a div";

const newP = document.createElement('p');
newP.textContent = "ME TOO!";

newDiv.appendChild(newH1);
newDiv.appendChild(newP);

container.appendChild(newDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("alert");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("alert");
});

function alertFunction() {
    alert("alert again");
  }

btn2.onclick = alertFunction;
btn2.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    console.log(e);
  });

  // the console.log(e) gives a list of attributes that can be used to make things happen

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  // the console.log(e.target) is the console.log(e) but give you the specific html code that you're referring to

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  //changes background color when button is clicked