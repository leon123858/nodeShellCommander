import * as child_process from 'node:child_process';
import util = require('util');
const execFile = util.promisify(child_process.execFile);
const exec = util.promisify(child_process.exec);
const execute = async (commandLine: string) => {
	const { stdout } = await exec(commandLine);
	return stdout;
};

const executeJsFile = async (filePath: string) => {
	await execFile('node', [filePath]);
};

const executePs1File = async (filePath: string) => {
	await execFile('powershell', ['-file', filePath]);
};

export { execute, executeJsFile, executePs1File };
