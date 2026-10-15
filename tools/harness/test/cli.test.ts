import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import assert from "node:assert/strict";

const cli = fileURLToPath(new URL("../dist/cli.js", import.meta.url));
const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

function run(...args: string[]) {
  return spawnSync(process.execPath, [cli, ...args], { encoding: "utf8" });
}

test("sin argumentos muestra la ayuda y sale con 0", () => {
  const r = run();
  assert.equal(r.status, 0);
  assert.match(r.stdout, /Uso: harness <comando>/);
});

test("version imprime la versión del paquete", () => {
  const r = run("version");
  assert.equal(r.status, 0);
  assert.equal(r.stdout.trim(), pkg.version);
});

test("doctor comprueba node y npm", () => {
  const r = run("doctor");
  assert.match(r.stdout, /node v\d+/);
  assert.match(r.stdout, /npm /);
  assert.equal(r.status, r.stdout.includes("FALLA") ? 1 : 0);
});

test("un comando desconocido sale con 2", () => {
  const r = run("inexistente");
  assert.equal(r.status, 2);
  assert.match(r.stderr, /Comando desconocido: inexistente/);
});

test("argumentos sobrantes salen con 2", () => {
  const r = run("version", "extra");
  assert.equal(r.status, 2);
});
