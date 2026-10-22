# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Portfolio README, MIT license, contributing guide, code of conduct and security policy.
- GitHub CI (Linux checks), release workflow, issue and PR templates, Dependabot.

### Fixed

- The flag grid stayed empty since REST Countries retired its v3.1 API: the app now falls back to a bundled sample of 40 countries (flagged "Offline sample data"), with search and region filter still working.

## [1.0.0] - 2023-06-01

### Added

- Flag gallery of every country, fetched from the REST Countries API.
- Search by country name and filter by region.
- Light / dark mode toggle.

[Unreleased]: https://github.com/LaCobble/World_Flags/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/LaCobble/World_Flags/releases/tag/v1.0.0
