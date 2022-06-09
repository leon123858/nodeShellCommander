declare const execute: (commandLine: string) => Promise<string>;
declare const executeJsFile: (filePath: string) => Promise<void>;
declare const executePs1File: (filePath: string) => Promise<void>;
export { execute, executeJsFile, executePs1File };
