

# GitExplorer (with i18n)

![Static Badge](https://img.shields.io/badge/Author-Nilesh_pawar-blue)
![GitHub Repo stars](https://img.shields.io/github/stars/nileshpawarr/gitexplorer)
![GitHub forks](https://img.shields.io/github/forks/nileshpawarr/gitexplorer)



---

*Website: [Click to find the right git commands without digging through the web.](https://nileshpawarr.github.io/gitexplorer)*

---

Table of Contents

[Intro](https://github.com/nileshpawarr/gitexplorer/blob/main/README.md#intro)

[Tech Stack](https://github.com/nileshpawarr/gitexplorer/blob/main/README.md#tech-stack)

[Setting Up](https://github.com/nileshpawarr/gitexplorer/blob/main/README.md#setting-up)

[Makers](https://github.com/nileshpawarr/gitexplorer/blob/main/README.md#makers)

[Contribute](https://github.com/nileshpawarr/gitexplorer/blob/main/README.md#contribute)


### Intro

**The original author seems to have abandoned the project. This is the re-written version of [repository](https://github.com/summitech/gitexplorer/) in React + TypeScript + Vite + i18next**



*The following is the intro of the original project:*

*It is a really cool resource for anyone to easily figure out the Git commands to use.*


*Explore and Enjoy!*


### Tech Stack

- React
- TypeScript
- Vite
- i18next
- GitHub Pages

### Setting Up

```bash
# If you do not have yarn installed:
npm install -g yarn
# install all dependecies
yarn 
# start project in dev server.
yarn dev
```


### Makers

Origin Author: [Summitech](https://summitech.ng)

Inspired Author: [Nilesh Pawar](https://github.com/nileshpawarr)


### Contribute

Thank you for contributing to GitExplorer!

Please follow the below instructions to send a Pull Request (Search the website to make sure that this command doesn't already exist).

The data folder (inside the src directory) is where you will be operating from. The three files you should be concerned with are the `primary-options.ts`, `secondary-options.ts` and `tertiary-options.ts` files.

These three files are responsible for the options a user can pick.

`primary-options.ts` contains an array of objects responsible for the options of the first select box.
`secondary-options.ts` contains an object. This object houses an arrays of objects (a mouthful 😄), this is responsible for the second set of options a user sees when they select a primary option.
`tertiary-option.ts` file is responsible for cases where there needs to be a third & final select box.

###### Steps to add a new command

0. Create and Checkout to a new branch.
1. Add an object to the array in the `primary-options.ts` file with localised content

2. Add an array to the `secondary-options.ts` file. 

3. To add tertiary options to `tertiary-options.ts` file.,
4. Add localised text and supported language in `locales` folder
5. Once you are done, add, commit, push and create a PR to Main.


