<h1 align="center">
  	<img height="180" src="https://github.com/jasonraimondi/promise-watch/raw/master/logos/promise-watch-logo-vertical.png" alt="Promise Watch Logo" />
</h1>

[![Tests](https://github.com/jasonraimondi/promise-watch/actions/workflows/test.yml/badge.svg)](https://github.com/jasonraimondi/promise-watch/actions/workflows/test.yml)
[![License](https://img.shields.io/github/license/jasonraimondi/promise-watch?color=#31C754)](./LICENSE.md)

An Api/E2E monitor that runs promises on intervals and sends notifications on errors. Supports [playwright](https://playwright.dev/) for reliable E2E testing. Has prebuilt [notifiers](#notifiers) for [SMTP](./packages/smtp), [Slack](./packages/slack), and [Pushover](./packages/pushover), and can support any [custom notifier](#custom-notifiers).
