---
title: "Mutant: Year Zero Dice"
description: Beautiful 3D dice extension for d20 based systems
author: Owlbear Rodeo
image: https://raw.githubusercontent.com/Zonrotan/owlbear_myz_dice/main/docs/header.jpg
icon: https://github.com/Zonrotan/owlbear_myz_dice/blob/main/public/logo.png?raw=true
tags:
  - dice
manifest: https://github.com/Zonrotan/owlbear_myz_dice/blob/main/public/manifest.json
learn-more: https://github.com/Zonrotan/owlbear_myz_dice/
---

# Mutant: Year Zero Dice for Owlbear Rodeo

3D dice extension for playing Mutant: Year Zero and its' expansions in OwlBear Rodeo, based on the [OwlBear Rodeo Dice Extension](https://github.com/owlbear-rodeo/dice).



Thanks to the OwlBear Rodeo dev team for letting amateurs like me fiddle with their Dice roller

MASSIVE thanks to [jjsoini](https://github.com/jjsoini/) for help with the Pushing function. Check him out!

![Example](/docs/header.jpg)

## Installing

The extension can be installed by clicking the "ADD EXTENSION" button on your Owlbear Rodeo profile and copy-pasting this link into the URL field.

```sh
https://myz-dice.onrender.com/
```

## How it Works
This project uses [React](https://reactjs.org/) for UI, [Three.js](https://threejs.org/) for rendering and [Rapier](https://rapier.rs/) for physics.

The physics simulation is used to both generate the animation for the roll as well as the final roll values.

Read more in their [original repo](https://github.com/owlbear-rodeo/dice)!

## Building

This project uses [Yarn](https://yarnpkg.com/) as a package manager.

To install all the dependencies run:

`yarn`

To run in a development mode run:

`yarn dev`

To make a production build run:

`yarn build`

## Project Structure

All source files can be found in the `src` folder.

If you'd like to create a new dice set with the existing dice styles edit the `diceSets.ts` file in the `sets` folder.

If you'd like to add a new dice style the 3D models for the dice are split across four folders: `materials`, `meshes`, `colliders` and `previews`.

The `materials` folder contains the PBR materials for each dice style.

The `meshes` folder contains the 3D geometry used for the dice.

The `colliders` folder contains the simplified collider geometry for the dice.

The `previews` folder contains 2D image previews for each dice.

All the code specific for the Owlbear Rodeo extension is in the `plugin` folder.

## License

GNU GPLv3
