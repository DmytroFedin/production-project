## Entity Article



#### Public api

- Components

`ArticleDetails` - component contains information about article

`ArticleList` -  component with list of articles

<!-- `ArticleViewSelector` - component switches display of articles list (plate, list) -->

`ArticleSortSelector` - component with sort selector for list of articles

<!-- `ArticleTypeTabs` - component with selector for type of the artticles -->

- Types

`ArticleBlockType` - Type describing article blocks from which is created article

`ArticleSortField` - Type describing article sorting fields

`ArticleDetailsSchema` - Type describing articleDetails initial state for Redux

`Article` - Type describing article

`ArticleView` - Type describing UI switcher for articles.

- Selectors

`getArticleDetailsData` - Selector for getting information about current opened article