import { Logger, chalk } from './utils';
import { spawn, spawnSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

console.log(chalk.bold.green('Wish Server Cloner'));
console.log(chalk.bold(chalk.red('Remember not to share your token with anyone!\n')));

console.log(chalk.bold('This tool will help you clone any server easily.'));
console.log(chalk.bold('If you need help, contact me on Discord: ' + chalk.cyan.underline('https://discord.gg/A6Vu7gYE') + '\n'));

const EXE_NAME = 'wish-app';

function getAppPath(): string {
  const platform = process.platform;
  const folder = platform === 'win32' ? 'windows' : 'linux';
  const extension = platform === 'win32' ? '.exe' : '';
  const exePath = path.resolve(process.cwd(), 'src', folder, EXE_NAME + extension);

  if (!fs.existsSync(exePath)) {
    Logger('error', `App not found at path: ${exePath}`);
    process.exit(1);
  }

  return exePath;
}

function ensureAppChmod(exePath: string): void {
  try {
    fs.chmodSync(exePath, 0o755);
  } catch (err) {
    Logger('warn', `fs.chmodSync failed, trying fallback with chmod command...`);

    const result = spawnSync('chmod', ['+x', exePath]);
    if (result.error || result.status !== 0) {
      Logger('error', `Failed to set execution permissions using both methods.`);
      Logger('info', `Use this manual command menten and try again: chmod +x ${exePath}`);
      process.exit(1);
    } else {
      Logger('info', `Fallback chmod command succeeded.`);
    }
  }
}


function runApp(exePath: string): void {
  Logger('info', `Running ${EXE_NAME} on ${process.platform}...\n`);

  if (process.platform === 'linux') {
    ensureAppChmod(exePath);
  }

  const child = spawn(exePath, [], { stdio: 'inherit' });
  attachEventHandlers(child);
}

function attachEventHandlers(child: ReturnType<typeof spawn>): void {
  child.on('error', (err) => {
    Logger('error', 'Failed to start process:', err.message);
    process.exit(1);
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      Logger('warn', `Process terminated with signal: ${signal}`);
    } else {
      Logger('info', `Process exited with code: ${code}`);
    }
  });
}

function run(): void {
  const exePath = getAppPath();
  runApp(exePath);
}

run();