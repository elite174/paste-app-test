# Paste app test task

## Tech stack

SPA: SolidJS + SCSS

For this test task I chose SolidJS. It's very similar to React (so you'll be easy to get what's going on), but much better than React (in terms of simplicity, performance).

SCSS provides lots of useful things like functions, template classes and other.

The app is SPA, however for the production version of the app I'd use Astro (SSR) + Solid (logic).

## Project structure

The project contains the following folders:

- _components_ - this folder contains several small components.
- _core_ - this folder contains core app hooks, constants. If the app is big this folder may also contain utils and different stuff
- _design-system_ - this folder contains basic styles, css constants, normalization styles etc. It's very convenient to keep the design system in CSS.
- _features_ - this folder contains some hooks and logic which is useful for the app (like scroll direction detection, device detection and stuff).

## How it works and why did I do this?

I did split Navigation compoennt into two parts (mobile and desktop). I shared some styles between these views, however I decided to split them to:

1. Keep components simple
2. Load only necessary code to the client

Back in the day I faced many times complex components which had logic for all the views and it was almost impossible to manage the code. Separation of views is the solution for different problems.

I also prefer to keep design system not as React/Solid/Vue/whatever components but as CSS system. Sometimes you need to change internal html-markup for some elements, and that's why CSS design system is much flexible and reusable than framework-based design system.

I use *px* function in css. Why? It's better to use rem units instead of px, because browser settings can be changed, so in this case sizes will be updated. Instead of converting px to rem, we can convert px to grid units if our design system has this unit (discussable with designer).

## Possible improvements

1. In mobile view of the navigation I decided to not animate dropdowns because it'd require animation of the height, which is not good for 60 FPS.
2. For the big app it's good to have some kind of services with contexts (for instance for device detection). In this task I used hooks in App component.
3. For every icon (actually there's only one icon) I made simple component which renders svg, however for the big app it's better to have sprite with all svg's and move this sprite to show some icon.
4. If you have a CSS design system as a separate package it might be useful to use CSS layers (because sometimes you may want to override design system styles)
5. When you open a mobile menu it's important to block scrolling (however it's not always necessary). Using just *overflow: hidden* is not enough for different browsers. There was a library (forgot the name) which does this thing.
6. It's also possible to add smooth appear animations for the dropdown menus on the desktop version
