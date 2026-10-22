# World Flags

Browse the flags of every country, search them by name and filter them by region.

[![CI](https://github.com/LaCobble/World_Flags/actions/workflows/ci.yml/badge.svg)](https://github.com/LaCobble/World_Flags/actions/workflows/ci.yml)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-E34F26?logo=html5&logoColor=white)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## What it does

A vanilla HTML/CSS/JavaScript page that loads country data from the [REST Countries](https://restcountries.com/) API and shows a card per country (flag, name, population, region, capital):

- **Search** a country by name.
- **Filter** by region: Africa, Americas, Asia, Europe, Oceania.
- **Light / dark mode** toggle.

## Screenshot

<p align="center">
<img src="https://github.com/LaCobble/World_Flags/assets/71151090/09b9a39a-bb41-4f49-8181-6419e5ac26e0" alt="World Flags screenshot" width="60%">
</p>

<sub>Screenshot from 2023.</sub>

> **Known issue:** the app calls the REST Countries **v3.1** endpoints, which have since been deprecated and now return an error, so the flag grid stays empty. Migrating `script.js` to the current API version is needed to make it work again.

## Prerequisites

- A modern web browser with an internet connection (data comes from the REST Countries API).

## Getting started

```bash
git clone https://github.com/LaCobble/World_Flags.git
cd World_Flags
open index.html        # or double-click it / use `xdg-open` on Linux
```

There is no build step and no test suite; the CI checks the JavaScript syntax, that every local asset referenced by the HTML exists, and scans for secrets.

## Project structure

```
World_Flags/
├── index.html   # layout: search bar, region filter, card grid
├── script.js    # API calls (async/await + fetch), card rendering, theme toggle
└── index.css
```

## What it demonstrates

- Calling a public REST API with `fetch` and `async`/`await`.
- Building DOM elements dynamically from JSON.
- Theme switching with CSS classes.

## Context

Personal / school web project built in June 2023. Kept as a portfolio piece; no longer actively developed.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md). Security issues: [SECURITY.md](SECURITY.md).

## License and credits

[MIT](LICENSE) © LaCobble. Country data and flags from [REST Countries](https://restcountries.com/); favicon globe from Vecteezy.
