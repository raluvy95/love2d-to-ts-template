# Love2D for TypeScript

This is a repo template which should be helpful for starters to get used with Love2D written in TypeScript

We use [TypeScript to Lua](https://typescripttolua.github.io/), [Lua JIT typing](https://github.com/TypeScriptToLua/lua-types) and [Love2D typing](https://github.com/hazzard993/love-typescript-definitions) to make your TS workstation have better experience

# Installation

You need to have [yarn](https://yarnpkg.com/getting-started/install) and [love](https://love2d.org/) installed in your system.

Run the following commands to install dependencies

```sh
$ yarn install
```

Build your game (`game` directory is where the compiled Lua located at)

```sh
$ yarn build
```

# Packaging your game

It's basically same thing as typical love2d workstation, `game` directory is where compiled Lua comes from.

Package your game from that directory. Check out [love2d wiki about it](https://love2d.org/wiki/Game_Distribution)