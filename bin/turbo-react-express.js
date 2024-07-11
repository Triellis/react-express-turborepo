#!/usr/bin/env node
const chalk = require("chalk");
const funcs = require("./functions");



const main = async () => {
  console.log(`${chalk.bgMagenta(chalk.cyanBright("  Turbo React Express "))}`);

  const args = require("yargs").argv;
  const projectLocation = args._[0];
  await funcs.validateParams(projectLocation);
  const { projectPath, projectName } = await funcs.processParams(
    projectLocation,
  );
  const templateLocation = "Triellis/turbo-react-express"

  await funcs.createFolder(projectPath);
  await funcs.downloadTemplate(templateLocation, projectPath);
  await funcs.updateProjectFiles(projectPath, projectName);
  await funcs.notifyUser(projectPath, projectName);
};

main();