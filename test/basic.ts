/**
 * should install typescript, ts-node, mocha local
 */
import { assert } from 'chai';

import { execute, executeJsFile, executePs1File } from '../src/index';

describe(`ShellCommand Unit Test`, () => {
	it(`Should succeed executing a shell command`, async () => {
		const result = await execute(`node --version`);
		assert(result !== null);
	});

	it(`Should fail executing a shell command`, async () => {
		try {
			await execute(`fakeCommand test`);
		} catch {
			return;
		}
		throw 'no error is wrong';
	});

	it(`Should succeed open js file`, async () => {
		await executeJsFile('./dist/index.js');
	});

	it(`Should succeed open ps1 file`, async () => {
		await executePs1File('./test/test.ps1');
	});

	it(`Should fail open not exist file`, async () => {
		try {
			await executeJsFile('./dist/index2.js');
		} catch {
			return;
		}
		throw 'no error is wrong';
	});
});
