import chalk from 'chalk';

export default {
    info(msg){
        console.log(chalk.blueBright(msg));
    },
    warning(msg){
        console.log(chalk.yellowBright(msg));
    },
    error(msg){
        console.log(chalk.redBright(msg));
    }
}