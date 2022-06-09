"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executePs1File = exports.executeJsFile = exports.execute = void 0;
const child_process = require("node:child_process");
const util = require("util");
const execFile = util.promisify(child_process.execFile);
const exec = util.promisify(child_process.exec);
const execute = (commandLine) => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec(commandLine);
    return stdout;
});
exports.execute = execute;
const executeJsFile = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    yield execFile('node', [filePath]);
});
exports.executeJsFile = executeJsFile;
const executePs1File = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    yield execFile('powershell', ['-file', filePath]);
});
exports.executePs1File = executePs1File;
//# sourceMappingURL=index.js.map