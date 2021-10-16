const inquirer = require('inquirer');

inquirer.prompt({
    name: 'color',
    message: 'Color?',
    default: 'red'
}).then(answers => {
    console.log('answer', answers)
})