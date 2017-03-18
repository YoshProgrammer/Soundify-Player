# SoundifyPlayer

## What is SoundifyPlayer?
Soundify Player is based off of a tutorial I saw on Scotch.IO. Essentially, it's an Angular2 + Electron application that utilizies SoundCloud's APIs to find music and stream it to your computer. 

## What's next up for this application?
1.) Adding in the ability to add songs, tracks or artists to a favorites list
2.) UI Authentication so you're able to sign in
3.) Music Metrics - Think of this as a basic set of statistics about how often you listen, what genre(s) are most popular etc
4.) Add a guest feature, where it utilizies Electron's access to local storage to have the same benefits as a logged-in user but is only saved until the user clears their session (think of a browser, same exact concept).

## What about publishing this application so I can use it daily?
I'm working on v2 of this application that is packaged as an application for Windows and MacOS.

## How can I contact you?
E-mail is best! Shoot me a message at hello@yoshprogramming.com

# How do I run this?
Simply follow the steps below. You will need a SoundCloud API Key. You can get one here: https://developers.soundcloud.com/

## Project Setup - Via Angular(2) CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run within Electron
Run `electron .` after starting the server via `ng serve`. The application will be served within the Electron window.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

