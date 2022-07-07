# Overview:

ShellCommander is a child_process wrapper for execute shell command in node

# Example:

```
import { execute, executeJsFile, executePs1File } from 'shellcommander'
const result = await execute(`node --version`);
try {
	await execute(`fakeCommand test`);
} catch {
  return;
}
await executeJsFile('./dist/index.js');
await executePs1File('./test/test.ps1');
```
