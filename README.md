<h1 align="center">
  	<img height="180" src="https://github.com/jasonraimondi/promise-watch/raw/master/logos/promise-watch-logo-vertical.png" alt="Promise Watch Logo" />
</h1>

[![Tests](https://github.com/jasonraimondi/promise-watch/actions/workflows/test.yml/badge.svg)](https://github.com/jasonraimondi/promise-watch/actions/workflows/test.yml)
[![License](https://img.shields.io/github/license/jasonraimondi/promise-watch?color=#31C754)](./LICENSE.md)

An Api/E2E monitor that runs promises on intervals and sends notifications on errors. Supports [playwright](https://playwright.dev/) for reliable E2E testing. Has prebuilt [notifiers](https://github.com/promise-watch/promise-watch#notifiers) for [SMTP](https://github.com/promise-watch/promise-watch/tree/master/packages/smtp), [Slack](https://github.com/promise-watch/promise-watch/tree/master/packages/slack), and [Pushover](https://github.com/promise-watch/promise-watch/tree/master/packages/pushover), and can support any [custom notifier](https://github.com/promise-watch/promise-watch#custom-notifiers).

## Getting Started

Install your dependencies. I'm using pnpm, you can pick your own poison: pnpm, npm, yarn, whatever you want.

```bash
npm install -g pnpm # or just use whatever: npm, yarn
pnpm install
```

Starting the project

```
pnpm start
```

## Add your own runs

Open the [`runs` directory](./runs) and add your own. I'm not too sure what the run limit is... One day someone will tell us.

