# Dear Angry Engineers

When starting React or Node.js project, please add ESLint to your project (steps below) and then modify the rules by copying the content of the ``rules.js`` file to your ``.eslintc.js`` config file's ``rules`` property.

# Why setting rules

Programming languages allow achieving the same result through many ways. This is especially true for a a loosely typed language like JavaScript. But in order to maximize interoperability of different developers, there is a need to harmonize everyone's styles as much as possible. For this end, we should all follow most popular ruleset – **ESLint Airbnb**. But no rule set is perfect, so we are also adding a short list of custom rules.

# Step by step guide

## How to install ESLint

1. If you are using Visual Studio Code, please install [the ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
1. Make sure none of the following are present in your project:
    1. .eslintc file in the root directory,
    1. eslint package or its plugins in the package.json file.
1. If you are adding ESLint to a [create-react-app](https://www.npmjs.com/package/create-react-app project) you may need to downgrade eslint to an older version. At this point create-react-app supports v6.6.0 or lower versions. Please install that version by running the following command: ``npm install --save-dev eslint@6.6.0``. Otherwise skip this step.
. Run ``npx eslint --init`` in your project's root folder.
1. Answer the questions in terminal. Select the default answers for all questions, except the first one. It asks "How would you like to use ESLint?". Please answer "To check syntax, find problems, and enforce code style".
1. When prompted to install additional packages, please answer Yes (Y).
1. Restart Visual Studio Code and run ``npm start`` again.

## How apply our custom rules

1. After all the installations are done, please check your package.json file again and delete the ``eslintConfig`` property, if found there.
1. Copy the content of ``rules.js`` file in this repo into the rules property of the ``.eslintc.js`` file.
1. Restart Visual Studio Code and run ``npm start`` again.
