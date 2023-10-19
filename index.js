const inquirer = require('inquirer');

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Enter up to three letters for your logo: ',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter a color for your text (by name OR hexadecimal): ',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Select a shape: ',
            choices: ['circle', 'triangle', 'square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Enter a color for your shape (by name OR hexadecimal): ',
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        const { text, textColor, shape, shapeColor } = response;
    })
    .catch ((err) => console.log(err));