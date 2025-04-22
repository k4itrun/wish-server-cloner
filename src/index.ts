import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';
import pkg from '@/../package.json' assert { type: 'json' };
import { logger, delay } from '@/utils';

console.clear();
logger.ready(chalk.green('Wishxner Server Cloner'));
logger.warn(chalk.yellow('Remember not to share your token with anyone!\n'));

logger.info('This tool will help you clone any server easily.');
logger.info(`If you need help, contact me on Discord: ${chalk.cyan.underline('https://discord.gg/A6Vu7gYE')}\n`);

process.chdir(path.dirname(fileURLToPath(import.meta.url)));

function getAppPath(): string {
  const appPath = path.resolve(process.cwd(), 'software', `${process.platform}`, `${pkg.name}${`${process.platform}` === 'win32' ? '.exe' : ''}`);
  if (!fs.existsSync(appPath)) {
    logger.error(`App not found at path: ${appPath}`);
    process.exit(1);
  }

  return appPath;
}

function ensureAppChmod(appPath: string): void {
  try {
    fs.chmodSync(appPath, 0o755);
  } catch (_err) {
    logger.warn(`fs.chmodSync failed, trying fallback with chmod command...`);

    const result = spawnSync('chmod', ['+x', appPath]);
    if (result.error || result.status !== 0) {
      logger.error(`Failed to set execution permissions using both methods.`);
      logger.info(`Use this manual command menten and try again: chmod +x ${appPath}`);
      process.exit(1);
    }
  }
}

function attachEventHandlers(child: ReturnType<typeof spawn>): void {
  child.on('error', (err) => {
    logger.error('Failed to start process:', err.message);
    process.exit(1);
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      logger.warn(`Process terminated with signal: ${signal}`);
    } else {
      logger.info(`Process exited with code: ${code}`);
    }
  });
}

async function runApp() {
  const appPath = getAppPath();
  logger.event(`Running ${chalk.redBright(pkg.name)} on ${process.platform}...\n`);

  if (process.platform === 'linux') {
    ensureAppChmod(appPath);
  }

  await delay(2);
  attachEventHandlers(spawn(appPath, [], { stdio: 'inherit' }));
}

runApp();
