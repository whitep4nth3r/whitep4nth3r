#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 60,
  title: "whitep4nth3r",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#ffb626",
};

const intro = chalk.bold("I write code for your entertainment.\n\nFind me on the internet.\n\n");

const links = [
  { name: chalk.hex("#fff").bgHex("#0f111a")("Website"), url: "   https://whitep4nth3r.com" },
  { name: chalk.hex("#fff").bgHex("#000")("DEV.to"), url: "    https://dev.to/whitep4nth3r" },
  { name: chalk.hex("#fff").bgHex("#5865F2")("Discord"), url: "   https://discord.gg/theclaw" },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "    https://github.com/whitep4nth3r",
  },
  {
    name: chalk.hex("#fff").bgHex("##208BFE")("Bluesky"),
    url: "   https://bsky.app/profile/whitep4nth3r.com",
  },
  { name: chalk.hex("#fff").bgHex("#9146ff")("Twitch"), url: "    https://twitch.tv/whitep4nth3r" },
  {
    name: chalk.hex("#fff").bgHex("#ff0000")("YouTube"),
    url: "   https://youtube.com/whitep4nth3r",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
