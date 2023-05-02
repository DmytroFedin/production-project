## Entity User is for ...



#### Public api

- Components

`CountrySelect` - component to choose country from a list

- Types

`UserSchema` - Type describing User initial state for Redux

`User` - Type describing user

`UserRole`  - Type describing possible user roles

- Selectors 

`getUserRoles` - Selector for getting current user roles

`isUserAdmin` - Selector for checking if user has Admin role

`isUserManager` - Selector for checking if user has Manager role

`getUserAuthData` - Selector for getting user authentification data

`getUserMounted` - Selector checking if user is logged in every refresh of the page

- Redux Slice

`userActions` - Services that can be used from User slice

`userReducer` - Reducers that can be used to mutate User state