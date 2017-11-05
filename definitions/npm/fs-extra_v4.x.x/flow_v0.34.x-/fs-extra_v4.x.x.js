// Ported to Flow
// Original definitions by: Alan Agius <https://github.com/alan-agius4>,
//                          midknight41 <https://github.com/midknight41>,
//                          Brendan Forster <https://github.com/shiftkey>,
//                          Mees van Dijk <https://github.com/mees->

// Usage:
//   import * as fse from "fs-extra";

import type { Stats } from "fs";

declare module "fs-extra" {
  declare export * from "fs"

  declare export type PathEntry = {
    path: string,
    stats: Stats
  };

  declare export type PathEntryStream = {
    read(): PathEntry | null
  };

  declare export type CopyFilter =
    | ((src: string, dest: string) => boolean)
    | RegExp;

  declare export type SymlinkType = "dir" | "file";

  declare export type CopyOptions = {
    dereference?: boolean,
    overwrite?: boolean,
    preserveTimestamps?: boolean,
    errorOnExist?: boolean,
    filter?: CopyFilter,
    recursive?: boolean
  };

  declare export type MoveOptions = {
    overwrite?: boolean,
    limit?: number
  };

  declare export type ReadOptions = {
    throws?: boolean,
    fs?: Object,
    reviver?: any,
    encoding?: string,
    flag?: string
  };

  declare export type WriteOptions = {
    fs?: Object,
    replacer?: any,
    spaces?: number,
    encoding?: string,
    flag?: string,
    mode?: number
  };

  declare export type ReadResult = {
    bytesRead: number,
    buffer: Buffer
  };

  declare export type WriteResult = {
    bytesWritten: number,
    buffer: Buffer
  };

  declare export function copy(
    src: string,
    dest: string,
    options?: CopyOptions
  ): Promise<void>;
  declare export function copy(
    src: string,
    dest: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function copy(
    src: string,
    dest: string,
    options: CopyOptions,
    callback: (err: Error | null) => void
  ): void;
  declare export function copySync(
    src: string,
    dest: string,
    options?: CopyOptions
  ): void;

  declare export function move(
    src: string,
    dest: string,
    options?: MoveOptions
  ): Promise<void>;
  declare export function move(
    src: string,
    dest: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function move(
    src: string,
    dest: string,
    options: MoveOptions,
    callback: (err: Error | null) => void
  ): void;
  declare export function moveSync(
    src: string,
    dest: string,
    options?: MoveOptions
  ): void;

  declare export function createFile(file: string): Promise<void>;
  declare export function createFile(
    file: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function createFileSync(file: string): void;

  declare export function ensureDir(path: string): Promise<void>;
  declare export function ensureDir(
    path: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function ensureDirSync(path: string): void;

  declare export function mkdirs(dir: string): Promise<void>;
  declare export function mkdirs(
    dir: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function mkdirp(dir: string): Promise<void>;
  declare export function mkdirp(
    dir: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function mkdirsSync(dir: string): void;
  declare export function mkdirpSync(dir: string): void;

  declare export function outputFile(file: string, data: any): Promise<void>;
  declare export function outputFile(
    file: string,
    data: any,
    callback: (err: Error | null) => void
  ): void;
  declare export function outputFileSync(file: string, data: any): void;

  declare export function readJson(
    file: string,
    options?: ReadOptions
  ): Promise<any>;
  declare export function readJson(
    file: string,
    callback: (err: Error | null, jsonObject: any) => void
  ): void;
  declare export function readJson(
    file: string,
    options: ReadOptions,
    callback: (err: Error | null, jsonObject: any) => void
  ): void;
  declare export function readJSON(
    file: string,
    options?: ReadOptions
  ): Promise<any>;
  declare export function readJSON(
    file: string,
    callback: (err: Error | null, jsonObject: any) => void
  ): void;
  declare export function readJSON(
    file: string,
    options: ReadOptions,
    callback: (err: Error | null, jsonObject: any) => void
  ): void;

  declare export function readJsonSync(
    file: string,
    options?: ReadOptions
  ): any;
  declare export function readJSONSync(
    file: string,
    options?: ReadOptions
  ): any;

  declare export function remove(dir: string): Promise<void>;
  declare export function remove(
    dir: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function removeSync(dir: string): void;

  declare export function outputJSON(
    file: string,
    data: any,
    options?: WriteOptions
  ): Promise<void>;
  declare export function outputJSON(
    file: string,
    data: any,
    options: WriteOptions,
    callback: (err: Error | null) => void
  ): void;
  declare export function outputJSON(
    file: string,
    data: any,
    callback: (err: Error | null) => void
  ): void;
  declare export function outputJson(
    file: string,
    data: any,
    options?: WriteOptions
  ): Promise<void>;
  declare export function outputJson(
    file: string,
    data: any,
    options: WriteOptions,
    callback: (err: Error | null) => void
  ): void;
  declare export function outputJson(
    file: string,
    data: any,
    callback: (err: Error | null) => void
  ): void;
  declare export function outputJsonSync(
    file: string,
    data: any,
    options?: WriteOptions
  ): void;
  declare export function outputJSONSync(
    file: string,
    data: any,
    options?: WriteOptions
  ): void;

  declare export function writeJSON(
    file: string,
    object: any,
    options?: WriteOptions
  ): Promise<void>;
  declare export function writeJSON(
    file: string,
    object: any,
    callback: (err: Error | null) => void
  ): void;
  declare export function writeJSON(
    file: string,
    object: any,
    options: WriteOptions,
    callback: (err: Error | null) => void
  ): void;
  declare export function writeJson(
    file: string,
    object: any,
    options?: WriteOptions
  ): Promise<void>;
  declare export function writeJson(
    file: string,
    object: any,
    callback: (err: Error | null) => void
  ): void;
  declare export function writeJson(
    file: string,
    object: any,
    options: WriteOptions,
    callback: (err: Error | null) => void
  ): void;

  declare export function writeJsonSync(
    file: string,
    object: any,
    options?: WriteOptions
  ): void;
  declare export function writeJSONSync(
    file: string,
    object: any,
    options?: WriteOptions
  ): void;

  declare export function ensureFile(path: string): Promise<void>;
  declare export function ensureFile(
    path: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function ensureFileSync(path: string): void;

  declare export function ensureLink(src: string, dest: string): Promise<void>;
  declare export function ensureLink(
    src: string,
    dest: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function ensureLinkSync(src: string, dest: string): void;

  declare export function ensureSymlink(
    src: string,
    dest: string,
    type?: SymlinkType
  ): Promise<void>;
  declare export function ensureSymlink(
    src: string,
    dest: string,
    type: SymlinkType,
    callback: (err: Error | null) => void
  ): void;
  declare export function ensureSymlink(
    src: string,
    dest: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function ensureSymlinkSync(
    src: string,
    dest: string,
    type?: SymlinkType
  ): void;

  declare export function emptyDir(path: string): Promise<void>;
  declare export function emptyDir(
    path: string,
    callback: (err: Error | null) => void
  ): void;
  declare export function emptyDirSync(path: string): void;

  declare export function pathExists(path: string): Promise<boolean>;
  declare export function pathExists(
    path: string,
    callback: (err: Error | null, exists: boolean) => void
  ): void;
  declare export function pathExistsSync(path: string): boolean;

  // fs async methods
  /** Tests a user's permissions for the file specified by path. */
  declare export function access(
    path: string | Buffer,
    callback: (err: ErrnoError | null) => void
  ): void;
  declare export function access(
    path: string | Buffer,
    mode: number,
    callback: (err: ErrnoError | null) => void
  ): void;
  declare export function access(
    path: string | Buffer,
    mode?: number
  ): Promise<void>;

  declare export function appendFile(
    file: string | Buffer | number,
    data: any,
    options: { encoding?: string, mode?: number | string, flag?: string },
    callback: (err: ErrnoError | null) => void
  ): void;
  declare export function appendFile(
    file: string | Buffer | number,
    data: any,
    callback: (err: ErrnoError | null) => void
  ): void;
  declare export function appendFile(
    file: string | Buffer | number,
    data: any,
    options?: { encoding?: string, mode?: number | string, flag?: string }
  ): Promise<void>;

  declare export function chmod(
    path: string | Buffer,
    mode: string | number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function chmod(
    path: string | Buffer,
    mode: string | number
  ): Promise<void>;

  declare export function chown(
    path: string | Buffer,
    uid: number,
    gid: number
  ): Promise<void>;
  declare export function chown(
    path: string | Buffer,
    uid: number,
    gid: number,
    callback: (err?: ErrnoError | null) => void
  ): void;

  declare export function close(
    fd: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function close(fd: number): Promise<void>;

  declare export function fchmod(
    fd: number,
    mode: string | number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function fchmod(
    fd: number,
    mode: string | number
  ): Promise<void>;

  declare export function fchown(
    fd: number,
    uid: number,
    gid: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function fchown(
    fd: number,
    uid: number,
    gid: number
  ): Promise<void>;

  declare export function fdatasync(fd: number, callback: () => void): void;
  declare export function fdatasync(fd: number): Promise<void>;

  declare export function fstat(
    fd: number,
    callback: (err: ErrnoError | null, stats: Stats) => any
  ): void;
  declare export function fstat(fd: number): Promise<Stats>;

  declare export function fsync(
    fd: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function fsync(fd: number): Promise<void>;

  declare export function ftruncate(
    fd: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function ftruncate(
    fd: number,
    len: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function ftruncate(fd: number, len?: number): Promise<void>;

  declare export function futimes(
    fd: number,
    atime: number,
    mtime: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function futimes(
    fd: number,
    atime: Date,
    mtime: Date,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function futimes(
    fd: number,
    atime: number,
    mtime: number
  ): Promise<void>;
  declare export function futimes(
    fd: number,
    atime: Date,
    mtime: Date
  ): Promise<void>;

  declare export function lchown(
    path: string | Buffer,
    uid: number,
    gid: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function lchown(
    path: string | Buffer,
    uid: number,
    gid: number
  ): Promise<void>;

  declare export function link(
    srcpath: string | Buffer,
    dstpath: string | Buffer,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function link(
    srcpath: string | Buffer,
    dstpath: string | Buffer
  ): Promise<void>;

  declare export function lstat(
    path: string | Buffer,
    callback: (err: ErrnoError | null, stats: Stats) => any
  ): void;
  declare export function lstat(path: string | Buffer): Promise<Stats>;

  /**
   * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
   *
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare export function mkdir(
    path: string | Buffer,
    callback: (err?: ErrnoError | null) => void
  ): void;
  /**
   * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
   *
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare export function mkdir(
    path: string | Buffer,
    mode: number | string,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function mkdir(path: string | Buffer): Promise<void>;

  declare export function open(
    path: string | Buffer,
    flags: string | number,
    callback: (err: ErrnoError | null, fd: number) => void
  ): void;
  declare export function open(
    path: string | Buffer,
    flags: string | number,
    mode: number,
    callback: (err: ErrnoError | null, fd: number) => void
  ): void;
  declare export function open(
    path: string | Buffer,
    flags: string | number,
    mode?: number
  ): Promise<number>;

  declare export function read(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: number | null,
    callback: (
      err: ErrnoError | null,
      bytesRead: number,
      buffer: Buffer
    ) => void
  ): void;
  declare export function read(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: number | null
  ): Promise<ReadResult>;

  declare export function readFile(
    file: string | Buffer | number,
    callback: (err: ErrnoError | null, data: Buffer) => void
  ): void;
  declare export function readFile(
    file: string | Buffer | number,
    encoding: string,
    callback: (err: ErrnoError | null, data: string) => void
  ): void;
  declare export function readFile(
    file: string | Buffer | number,
    options: { flag?: string } | { encoding: string, flag?: string },
    callback: (err: ErrnoError, data: Buffer) => void
  ): void;
  declare export function readFile(
    file: string | Buffer | number,
    options: { flag?: string } | { encoding: string, flag?: string }
  ): Promise<string>;
  declare export function readFile(
    file: string | Buffer | number,
    encoding: string
  ): Promise<string>;
  declare export function readFile(
    file: string | Buffer | number
  ): Promise<Buffer>;

  declare export function readdir(
    path: string | Buffer,
    callback: (err: ErrnoError | null, files: string[]) => void
  ): void;
  declare export function readdir(path: string | Buffer): Promise<string[]>;

  declare export function readlink(
    path: string | Buffer,
    callback: (err: ErrnoError | null, linkString: string) => any
  ): void;
  declare export function readlink(path: string | Buffer): Promise<string>;

  declare export function realpath(
    path: string | Buffer,
    callback: (err: ErrnoError | null, resolvedPath: string) => any
  ): void;
  declare export function realpath(
    path: string | Buffer,
    cache: { [path: string]: string },
    callback: (err: ErrnoError | null, resolvedPath: string) => any
  ): void;
  declare export function realpath(
    path: string | Buffer,
    cache?: { [path: string]: string }
  ): Promise<string>;

  declare export function rename(
    oldPath: string,
    newPath: string,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function rename(
    oldPath: string,
    newPath: string
  ): Promise<void>;

  /**
   * Asynchronous rmdir - removes the directory specified in {path}
   *
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare export function rmdir(
    path: string | Buffer,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function rmdir(path: string | Buffer): Promise<void>;

  declare export function stat(
    path: string | Buffer,
    callback: (err: ErrnoError | null, stats: Stats) => any
  ): void;
  declare export function stat(path: string | Buffer): Promise<Stats>;

  declare export function symlink(
    srcpath: string | Buffer,
    dstpath: string | Buffer,
    type: string,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function symlink(
    srcpath: string | Buffer,
    dstpath: string | Buffer,
    type?: string
  ): Promise<void>;

  declare export function truncate(
    path: string | Buffer,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function truncate(
    path: string | Buffer,
    len: number,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function truncate(
    path: string | Buffer,
    len?: number
  ): Promise<void>;

  /**
   * Asynchronous unlink - deletes the file specified in {path}
   *
   * @param callback No arguments other than a possible exception are given to the completion callback.
   */
  declare export function unlink(
    path: string | Buffer,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function unlink(path: string | Buffer): Promise<void>;

  declare export function utimes(
    path: string | Buffer,
    atime: number,
    mtime: number,
    callback: (err?: ErrnoError) => void
  ): void;
  declare export function utimes(
    path: string | Buffer,
    atime: Date,
    mtime: Date,
    callback: (err?: ErrnoError | null) => void
  ): void;
  declare export function utimes(
    path: string | Buffer,
    atime: number,
    mtime: number
  ): Promise<void>;
  declare export function utimes(
    path: string | Buffer,
    atime: Date,
    mtime: Date
  ): Promise<void>;

  declare export function write(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: number | null,
    callback: (err: ErrnoError, written: number, buffer: Buffer) => void
  ): void;
  declare export function write(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    callback: (err: ErrnoError | null, written: number, buffer: Buffer) => void
  ): void;
  declare export function write(
    fd: number,
    data: any,
    callback: (err: ErrnoError | null, written: number, str: string) => void
  ): void;
  declare export function write(
    fd: number,
    data: any,
    offset: number,
    callback: (err: ErrnoError | null, written: number, str: string) => void
  ): void;
  declare export function write(
    fd: number,
    data: any,
    offset: number,
    encoding: string,
    callback: (err: ErrnoError | null, written: number, str: string) => void
  ): void;
  declare export function write(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position?: number | null
  ): Promise<WriteResult>;
  declare export function write(
    fd: number,
    data: any,
    offset: number,
    encoding?: string
  ): Promise<WriteResult>;

  declare export function writeFile(
    file: string | Buffer | number,
    data: any,
    callback: (err: ErrnoError | null) => void
  ): void;
  declare export function writeFile(
    file: string | Buffer | number,
    data: any,
    options?: { encoding?: string, mode?: number, flag?: string }
  ): Promise<void>;
  declare export function writeFile(
    file: string | Buffer | number,
    data: any,
    options: { encoding?: string, mode?: number, flag?: string },
    callback: (err: ErrnoError | null) => void
  ): void;

  /**
   * Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
   *
   * @param callback The created folder path is passed as a string to the callback's second parameter.
   */
  declare export function mkdtemp(prefix: string): Promise<string>;
  declare export function mkdtemp(
    prefix: string,
    callback: (err: ErrnoError | null, folder: string) => void
  ): void;
}
