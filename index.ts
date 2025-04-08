import { Logger, chalk } from "./utils";
import { spawn } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

console.log(chalk.bold.green("Wish Server Cloner"));
console.log(chalk.bold(chalk.red("Remember not to share your token with anyone!\n")));

console.log(chalk.bold("This tool will help you clone any server easily."));
console.log(chalk.bold("If you need help, contact me on Discord: " + chalk.cyan.underline("https://discord.gg/A6Vu7gYE") + "\n"));

const EXE_NAME = "wish-app-dark.exe";

function getExecutablePath(): string {
    const exePath = path.resolve(process.cwd(), "src", "windows", EXE_NAME);
    if (!fs.existsSync(exePath)) {
        Logger("error", `Executable not found at path: ${exePath}`);
        process.exit(1);
    }
    return exePath;
}

function runOnWindows(exePath: string): void {
    Logger("info", "Running on Windows..." + "\n");
    const child = spawn(exePath, [], { stdio: "inherit" });
    attachEventHandlers(child);
}

function runOnLinux(exePath: string): void {
    Logger("info", "Running on Linux with Wine..." + "\n");
    if (!isWineInstalled()) {
        Logger("error", "Wine is not installed. Please install it with: sudo apt install wine64");
        process.exit(1);
    }

    const child = spawn("wine", [exePath], { stdio: "inherit" });
    attachEventHandlers(child);
}

function isWineInstalled(): boolean {
    try {
        const which = spawn("which", ["wine"]);
        which.on("exit", (code) => {
            return code === 0;
        });
        return true;
    } catch {
        return false;
    }
}

function attachEventHandlers(child: ReturnType<typeof spawn>): void {
    child.on("error", (err) => {
        Logger("error", "Failed to start process:", err.message);
        process.exit(1);
    });

    child.on("exit", (code, signal) => {
        if (signal) {
            Logger("warn", `Process terminated with signal: ${signal}`);
        } else {
            Logger("info", `Process exited with code: ${code}`);
        }
    });
}

function run(): void {
    const exePath = getExecutablePath();
    switch (process.platform) {
        case "win32":
            runOnWindows(exePath);
            break;
        case "linux":
            runOnLinux(exePath);
            break;
        default:
            Logger("error", `Unsupported platform: ${process.platform}`);
            process.exit(1);
    }
}

run();
