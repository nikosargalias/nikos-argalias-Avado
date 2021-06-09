### How to view the project?
    In the root directory, you will find a, dist/ and src/ folder, inside dist/ you will find the distribution bundles which were processed by Webpack. In order to view the finished project, please load the index.html file from the dist/ folder (not the src/ folder).

### Source code
    In the src/ folder you will find all of the source code files prior to Webpack processing. 



## Choice of technologies and architecture

### HTML & CSS/SCSS
    In this project I utilised the BEM naming convention which stands for (Block Element Modifier). Using this methodology, blocks are top level abstractions (sections or components), with child elements takingn a naming convention which starts with the block, followed by two underscores and the name of the child, for example: 
        Block: main-nav
        Elements: main-nav__list, main-nav__item, main-nav__link

    Modifiers are used to manipulate the styles of blocks without global effect:
        Modifier: main-nav__link--purple 
            //this would turn the link color purple only for the link with this modifier class. 

### Benefit to BEM?
    It allows for reusable components across an entire platform. It also makes it easy to import components to other website/platforms as each components' css if mostly self contained. 


### Component based architecture 
    In addition to the BEM methodology, I utilised a component based file structure, which makes it easy to locate the styles for every component on the website, and therefore make changes, or add more modifiers or elements. 

### SCSS
    I utilised SCSS because it adds many useful features that wouldn't be possible with vanila CSS. For example, the use of mixins for media queries in combination with a map for the viewport breakpoints makes it easy to globally change the breakpoint values down the line if required. I created utilities in the form of variables and mixins for certain properties. For example, gutter variables for element and section spacing (pading/margin), as well as a container mixin to set the max-width of each section. 

### Javascript
    I retained a component based architecture with the JS files in the project, again allowing for easy upgradability and feature changes down the line. In addition, I utilise ES6 modules to keep dependaies available only to the files that require them, reducing the chance of accidental variable shadowing and exposing objects which should be private. I'm also using vanila Javscript as jQuery isn't really required anymore, due to all the features that have been implemented into the language, Also, Bootstrap 5 no longer recommends the use of jQuery. 

### Webpack and NPM 
    I'm using Webpack and NPM for multiple reasons listed below:
        - Installing dependancies easily
        - Running a dev server to see my code changes as I make them
        - Pre-processing of JS, SCSS.
        - To generate content hashed bundles for browser caching performance benefits. 
        - To transpile modern Javascript features via babel in order for the finished bundle to be compatible with older browsers.
        - To minify all html, js and css files, as well as split bundles into multiple smaller files to performance benefits. 

## Strict mode
    Please note, Webpack automatically applied 'use strict' to all JS files. 






## Final Notes:
I realise everything I've done here might be a bit overkill for a single landing page test, however I wanted to showcase my ability to create a maintaiable and clean codebase that is easy for developer to jump in and start developing it further. 


Why I didn't use Bootstrap and jQuery?
    I realise you use Bootstrap at Avado, however I wanted to showcase my knowledge and ability to produce something with custom css and maintainable architecture. In addition, I demonstrated a project I recebntly built using Bootstrap to David and Bec during my first interview. 