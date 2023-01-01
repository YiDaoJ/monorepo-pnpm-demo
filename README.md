A demo project of monorepo, created with pnpm.

There are three subpackages: `server`, `client`, `components`.

## Install

```
pnpm i
```

## Add dependency

1. within workspace

```
pnpm add -w [dependency_name]
```

2. within sub-package

```
pnpm add [dependency_name] --filter [sub-package_name]
```
