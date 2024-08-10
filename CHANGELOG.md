# CHANGELOG

## 0.2.1 - 10-08-2024
### Added
- added dataUtils module
- added getPropertyListings to dataUtils, retrieves property listings from API when called
- added .env file for configuration
- added babel-preset-vite plugin to devDependencies
### Changed
- Updated propertyListing component, now uses getPropertyListings for retrieval of data
- Changed babel and jest config to enable compatibility with 'import.meta' for testing of files which use the environment variables