// SWITCH BUTTONS --------------------------------------------------------------------------------

function buttonClick(id) {
    switch (id) {
        case "grid_size":
            newGrid();
            break;
        case "reset":
            clear();
            break;
        case "eraser":
            erase();
            break;
        case "squares":
            square();
            break;
        case "dots":
            dot();
            break;
        case "black":
            black();
            break;
        case "color":
            pick();
            break;
        case "random_color":
            random_color();
            break;
        case "shader":
            shiftShade();
        default:
            // console.log("default case");
    }

};

// END---------------------------------------------------------------------------------------

// GLOBAL VARIABLE----------------------------------------------

const container = document.querySelector('#container');

// END---------------------------------------------------------------------------------------


// EVENT LISTENERS -----------------------------------------------------------

const buttons = document.querySelectorAll('.button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        buttonClick(e.target.id);
    });
};

// END---------------------------------------------------------------------------------------



// FUNCTION GRID --------------------------------------------------------------

const createGrid = (x) => {
    for (let r = 0; r < x; r++) {
        for (let c = 0; c < x; c++) {
            const grid = document.createElement('div');
            definedWidth = 960 / x;
            grid.style.width = `${definedWidth}px`;
            grid.style.height = `${definedWidth}px`;
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
};


// END---------------------------------------------------------------------------------------

// DEFAULT LOAD-------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', createGrid(16));

// END---------------------------------------------------------------------------------------


// DEFAULT COLOR --------------------------------------------------------------------

document.querySelectorAll('.grid').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = 'rgb(0, 0, 0)';
    })
});

// END---------------------------------------------------------------------------------------

// NEW GRID -----------------------------------------------------------------

function newGrid() {
    document.querySelectorAll('.grid').forEach(item => {
        item.remove();
    });
    let userGrid = prompt("Grid size? (16-100)");
    if (userGrid > 100 || userGrid < 16) {
        alert("Invalid answer. Please enter a value between 16 and 100");
        return;
    } else if (isNaN(userGrid) === true) {
        alert("Invalid answer. Please enter a value between 16 and 100");
        return;
    } else {
        createGrid(userGrid);
    }
    black();

};

// END--------------------------------------------------------------------------------------

// CLEAR ------------------------------------------------------------------

function clear() {
    document.querySelectorAll('.grid').forEach(item => {
        item.style.backgroundColor = 'rgba(0,0,0,0)';
    });
}

// END-------------------------------------------------------------------------------------

// ERASER -------------------------------------------------------------------

function erase() {
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'rgba(0,0,0,0)';
        })    
    });    
}    

// END--------------------------------------------------------------------------------------

// SQUARES ------------------------------------------------------------------

function square() {
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.borderRadius = "0%";
        })    
    });    
}    

// END-------------------------------------------------------------------------------------

// DOTS --------------------------------------------------------------------

function dot() {
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.borderRadius = "50%";
        })    
    });    
}    

// END-------------------------------------------------------------------------------------

// FUNCTION BLACK BUTTON -------------------------------------------------------------------

function black() {
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = 'black';
        })        
    });        
}        

// END--------------------------------------------------------------------------------------



// INPUT BUTTON COLOR PICKER ---------------------------------------------------------------
function picker(){
    var values = document.getElementById('color').value;
    console.log(values);
    return values;
}

function pick() {
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = picker();
        })        
    })        
};        

//  END--------------------------------------------------------------------------------------



// RANDOM COLOR ---------------------------------------------------------------------

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log("newColor = " + r + ", " + g + ", " + b);
    return "rgb(" + r + "," + g + "," + b + ")";
};


function random_color() {
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = randomRGB();
        })
    });
}

// END-------------------------------------------------------------------------------------

// FUNCTION SHADE BUTTON ------------------------------------------------------------------

function shade(x) {

    let thisCSS = window.getComputedStyle(x, null);
    let bgColor = thisCSS.getPropertyValue("background-color");
    console.log(bgColor);
    return bgColor;
}

function shiftShade() {
    document.querySelectorAll('.grid').forEach(item => {
        item.addEventListener('mouseenter', event => {

            let bgColor = shade(item);
            let red = bgColor.match(/\d+/g)[0];
            let green = bgColor.match(/\d+/g)[1];
            let blue = bgColor.match(/\d+/g)[2];

            let r = red - (red * .1);
            let g = green - (green * .1);
            let b = blue - (blue * .1);

            console.log("r = " + r + ", g = " + g + ", b = " + b);

            let rgbString = ("rgb(" + r + ", " + g + ", " + b + ")");

            item.style.backgroundColor = rgbString;
        })
    })
}

// END------------------------------------------------------------------------------------