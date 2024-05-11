import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC_DIR = path.resolve(__dirname, "..", "src");
const BLACKLIST = ["__tests__", "__mocks__", "@types"];

const TS_CONFIG_PATH = path.resolve(__dirname, "..", "tsconfig.json");
const CONFIG_DIR = path.resolve(__dirname, "..", "config");
const PATHS_CONFIG_PATH = path.resolve(CONFIG_DIR, "paths.js");

type PartialPath = {
    [key: string]: string[];
};

function createAbsolutePathFor(folder: string): PartialPath {
    const key = `~${folder}/*`;
    const value = [`./src/${folder}/*`];

    return {
        [key]: value,
    };
}

function createTsConfig(paths: PartialPath): string {
    return JSON.stringify(
        {
            extends: "@react-native/typescript-config/tsconfig.json",
            compilerOptions: {
                baseUrl: ".",
                paths,
            },
        },
        null,
        2,
    );
}

function createPathsJsConfig(paths: string[]) {
    const mappedPaths = paths.map(path => `"~${path}": "./src/${path}/"`);
    return `
    module.exports = {
        ${mappedPaths.join(",\n")}
    };
    `;
}

async function createPathsConfig() {
    const content = await readdir(SRC_DIR, { withFileTypes: true });
    const onlyFolders = content.filter(item => item.isDirectory());
    const onlyFoldersFiltered = onlyFolders.filter(
        item => !BLACKLIST.includes(item.name),
    );

    const folders = onlyFoldersFiltered.map(item => `${item.name}`);
    const paths = folders.map(createAbsolutePathFor).reduce((acc, curr) => {
        return { ...acc, ...curr };
    }, {} as PartialPath);

    const tsConfig = createTsConfig(paths);
    await writeFile(TS_CONFIG_PATH, tsConfig, { encoding: "utf-8" });

    const pathsJsConfig = createPathsJsConfig(folders);
    await writeFile(PATHS_CONFIG_PATH, pathsJsConfig, { encoding: "utf-8" });

    console.log("TS Config paths created! 🎉");
    console.log("paths.js Config paths created! 🎉");
}

createPathsConfig();
