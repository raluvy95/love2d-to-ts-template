// You can import Lua libs and utils
// Make sure to have at least one .d.ts
// so TypeScript knows what typing they use
// https://typescripttolua.github.io/docs/external-lua-code

import randomNumber from "./utils/randomNumber";


// Must declare variables in TypeScript, unlike in Lua
let text: string;
let screenW: number;
let screenH: number;
let rotate: number;

love.load = () => {
    text = "Hello World!";
    screenW = love.graphics.getWidth();
    screenH = love.graphics.getHeight();
    rotate = 1;
    print("Launching the game...")
};

love.draw = () => {
    // prints hello world which rotates
    love.graphics.print(text, screenW / 2 - text.length, screenH / 2, rotate);
};

love.update = (dt: number) => {
    if (rotate > 100) {
        rotate = 1;
    } else {
        rotate += randomNumber(5, 1) * dt;
    }
};
