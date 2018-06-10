# Client

### Run application in development mode (as local)

```
npm install
npm start
```

Running on http://localhost:8080

### Icon Collection

https://icons8.com/line-awesome

## Pattern

Following this steps when create a module inside `src/app` dir.

### Structure

Create a module with the following files and structure:

```
exampleModuleName
---- components/
-------- exampleComponentName/
------------ view.jsx
-------- anotherExampleComponentName/
------------ view.jsx
---- forms/
-------- formName.jsx
---- actions.jsx
---- container.jsx
---- middlewares.jsx
---- models.jsx
---- reducer.jsx
---- routes.jsx
---- maps.jsx
---- types.jsx
```

### Actions

**Actions** are payloads of information that send data from your application to your store.

Create `actions.jsx` file with the following content:

```javascript
import type from 'module-example/types'

export const exampleAction = (payload = false) => ({
    type: type.EXAMPLE_TYPE_ACTION,
    payload: payload
})
```

### Types

**Types** file have the map of constanst to use in Redux schema.

Create `types.jsx` file with the following content:

```javascript
export default {
    YOUR_TYPE_EXAMPLE: 'YOUR_TYPE_EXAMPLE',
    // ...
}

```

### Reducer

_Reducer file is in singular name, because is one reducer with multiple types cases._

**Reducers** specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

Create `reducer.jsx` file with the following content:

```javascript
import type from 'module-example/types'

const INITIAL_STATE = {
    example: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.YOUR_TYPE_EXAMPLE:
            return { ...state, example: action.payload }

        default:
            return state
    }
}
```

### Routes

**Routes** file is the map with your component and the path on address bar on browser.

Create `routes.jsx` file and fill with content above:

```javascript
import React from 'react'
import ExampleContainerName from 'module-example/container'
import exampleMap from 'module-example/maps'
import { Route } from 'react-router'

export const router = (
    <Route>
        <Route path={exampleMap.slugName.route} page={exampleMap.slugName} component={ExampleContainerName} />
        // ...
    </Route>
)
```
