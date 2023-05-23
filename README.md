# Express API

## Executar o projeto
```bash
yarn;
yarn start;
```
## 1. Start new project
```bash
mkdir expressAPI
cd expressAPI
yarn init -y
yarn add express uuid
yarn add -D typescript @types/express @types/node ts-node nodemon
```
## 2. Create tsconfig.json, nodemon.json and add "start" for package.json
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "noImplicitAny": true,
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "baseUrl": ".",
        "paths": {
            "*": [
                "node_modules/*"
            ]
        }
    },
    "include": [
        "src/**/*.ts"
    ]
}
```
```json
{
    "watch": ["src"],
    "ext": "ts",
    "exec": "ts-node src/index.ts"
}

```
```json
"scripts": {
    "start": "nodemon"
}
```
## 3. Add Swagger
```bash
yarn add swagger-ui-express swagger-jsdoc
```