#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const VERSION: string = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
).version;

const EXIT_OK = 0;
const EXIT_FAILED = 1;
const EXIT_USAGE = 2;

const HELP = `harness ${VERSION}

Uso: harness <comando>

Comandos:
  help      Muestra esta ayuda.
  version   Muestra la versión de la CLI.
  doctor    Comprueba que Node 24 y npm 11 estén disponibles.

Códigos de salida: 0 correcto, 1 comprobación fallida, 2 uso incorrecto.`;

function majorOf(version: string): number {
  return Number.parseInt(version.replace(/^v/, "").split(".")[0] ?? "", 10);
}

function npmVersion(): string | undefined {
  // npm deja su ruta en npm_execpath cuando se ejecuta vía `npm run`.
  const npmCli = process.env["npm_execpath"];
  try {
    if (npmCli) {
      return execFileSync(process.execPath, [npmCli, "--version"], { encoding: "utf8" }).trim();
    }
    return execFileSync("npm", ["--version"], {
      encoding: "utf8",
      shell: process.platform === "win32",
    }).trim();
  } catch {
    return undefined;
  }
}

function doctor(): number {
  const node = process.version;
  const npm = npmVersion();
  const checks = [
    { name: "node", found: node, ok: majorOf(node) === 24, expected: "24.x" },
    { name: "npm", found: npm ?? "no encontrado", ok: npm !== undefined && majorOf(npm) === 11, expected: "11.x" },
  ];
  for (const c of checks) {
    console.log(`${c.ok ? "ok   " : "FALLA"} ${c.name} ${c.found} (esperado ${c.expected})`);
  }
  return checks.every((c) => c.ok) ? EXIT_OK : EXIT_FAILED;
}

function main(args: string[]): number {
  const [command = "help", ...rest] = args;
  if (rest.length > 0) {
    console.error(`Argumentos no esperados: ${rest.join(" ")}`);
    return EXIT_USAGE;
  }
  switch (command) {
    case "help":
    case "--help":
    case "-h":
      console.log(HELP);
      return EXIT_OK;
    case "version":
    case "--version":
    case "-v":
      console.log(VERSION);
      return EXIT_OK;
    case "doctor":
      return doctor();
    default:
      console.error(`Comando desconocido: ${command}\n\n${HELP}`);
      return EXIT_USAGE;
  }
}

process.exitCode = main(process.argv.slice(2));
