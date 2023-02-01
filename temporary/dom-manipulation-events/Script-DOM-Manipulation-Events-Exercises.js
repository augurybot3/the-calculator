const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm Red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.textContent = "I'm a blue h3!";
header3.style.color = 'blue';
container.appendChild(header3);

const pinkDiv = document.createElement('div');
pinkDiv.style.backgroundColor = 'pink';
pinkDiv.style.borderColor = 'black';
pinkDiv.style.borderWidth = '5px';

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div";
pinkDiv.appendChild(header1);

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO";
pinkDiv.appendChild(paragraph2);

container.appendChild(pinkDiv);

const btn = document.querySelector('#btn');


function alertFunction(){
    alert("Yay you did it whoopie");
};

//btn.onclick = alertFunction;

//btn.addEventListener('click', () => {
//    alert("Hello World");
//  });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'yellow';
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        alert(button.id);
    });
});