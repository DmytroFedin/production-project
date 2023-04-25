## Project launch

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - launch servers + frontend of project in dev mode
```

----

## Scripts

- `npm run start` - Launch frontend project on webpack dev server
- `npm run start:vite` - Launch frontend project on vite
- `npm run start:dev` - Launch frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Launch frontend project on vite + backend
- `npm run start:dev:server` - Launch backend server
- `npm run build:prod` - Compile in prod mode
- `npm run build:dev` - Compile in dev mode (not minimized)
- `npm run lint:ts` - Check ts files by linter
- `npm run lint:ts:fix` - Fix ts files by linter
- `npm run lint:scss` - Check scss files style by linter
- `npm run lint:scss:fix` - Fix scss files style by linter
- `npm run test:unit` - Launch unit tests с jest
- `npm run test:ui` - Launch screenshot tesing with loki
- `npm run test:ui:ok` - Approving new screenshots
- `npm run test:ui:ci` - Launch screenshot testing in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Launch Storybook
- `npm run storybook:build` - Compile storybook build

----

## Architecture of the project

Project written in accordance with the Feature sliced design methodology

Link on documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Translation

i18next library is used in project to work with translations.
Files with translations are held in public/locales.

For comfortable work with the library we recommend to install a plugin for webstorm/vscode

Link on documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

There are 4 types of test used in this project:
1) Unit tests on jest - `npm run test:unit`
2) Tests for components from React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More about tests - [testing documentation](/docs/tests.md)

----

## Linting

Project is using eslint to check typescript and stylelint.

Also to comply with main architecture principles
is used own eslint plugin - *eslint-plugin-fsd-relative-path-checker*,
it has 3 rules:
1) path-checker - prohibits usage of absolute imports within one module.
2) layer-imports - checks correctness of the usage of layers in terms of FSD.
   (widgets can`t be used in features and entities)
3) public-api-imports - allows imports from another modules only from public api. Has auto fix.

##### Launch linters
- `npm run lint:ts` - Check ts files by linter
- `npm run lint:ts:fix` - Fix ts files by linter
- `npm run lint:scss` - Check scss files style by linter
- `npm run lint:scss:fix` - Fix scss files style by linter

----
## Storybook

For each component project has “stories”.
Requests to server mocked with the help of storybook-addon-mock.

File with stories is created near to component and has extension .stories.tsx

You can launch storybook by the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project configuration

Project contains 2 configs for development:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both compilers are adapted for main features of the app.

All configuration is stored in /config.
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

Folder `scripts` has  various sripts for refactoring\simplification of code writing\report generation, etc.

----

## CI pipeline

Github actions configuration is located at /.github/workflows.
Ci runs all types of tests, compile project and storybook, linting.

----

### Working with data

Interaction with data is done with the help of redux toolkit.
Whenever possible, reusable entities should be normalized using EntityAdapter.

Requests to server are made with the help of [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (to not pull them into main bundle) is used:
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)

