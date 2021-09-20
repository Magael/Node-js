const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:example@example.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                    Elsa da Silveira"),
    handle: chalk.white("@Magael"),
    fact: chalk.hex('#B10000')('I love Open-Source!'),
    github: chalk.hex('#787878')("https://github.com/Magael"),
    npx: chalk.hex('#A1AB00')("npx elsa"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Elsa" 
        )}`,
        `${chalk.bold("junior web developer, and have a ")}`,
        `${chalk.bold(
            "hobby for creating beautiful, cool, and responsive "
        )}`,
        `${chalk.bold(
            "web apps. Toss me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

prompt(questions).then(answer => answer.action());

// clear the terminal before showing the npx card
clear()