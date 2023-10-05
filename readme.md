## You can see my super amazing app here!

https://marinarium.github.io/react-project-ulb/

# Documentation

## Command `build:prod`

### Description

The `build:prod` command builds the application in "production" mode using Webpack.

### Usage

```bash
npm run build:prod
```

## Command `build:dev`

### Description

The `build:dev` command builds the application in "development" mode using Webpack.

### Usage

```bash
npm run build:dev
```

## Command `predeploy`

### Description

The `predeploy` command performs a preliminary build of the application before deploying it to GitHub Pages. It is automatically
called before the `deploy` command.

### Usage

```bash
npm run predeploy
```

## Command `deploy`

### Description

The `deploy` command deploys the built application to GitHub Pages using the "gh-pages" package.

### Usage

```bash
npm run deploy
```

### Options

- `-d` or `--dir`: The path to the directory that should be published on GitHub Pages. By default, it is "build" (as
  defined in "predeploy").

## Installation

To install dependencies and start working on the project, run the following commands:

```bash
npm install
```