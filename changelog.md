Canvas-Native-Fonts-Plugin
==========================

Canvas-Native Fonts Plugin Changelog

v1.1

- Added .alpha property
- Added logic to prevent the canvas context .font property from being set each .draw() for optimization
- Updated .getWidth() and Font.getWidth() to make the font parameter optional and added optimization test
- Removed text parameter from constructor
- Changed .baseline from 'middle' to 'top' to match ImpactJS's style of an object's origin being the top-left corner