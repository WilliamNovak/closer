# Closer Client

> ...

### Run application in development mode (as local)

```
npm install
npm start
```

Running on http://localhost:8080

### Run application in production mode

```
npm install
npm run build
```

Using Docker:

```
docker run -it -p 8080:80 star-lord-react-nginx
```

Open http://localhost:8080 to see!

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
------------ index.jsx
------------ component.jsx
---- models
-------- examples.jsx
---- actions.jsx
---- map.jsx
---- reducer.jsx
---- routes.jsx
---- types.jsx
```

### Routes

Routes file is the map with your component and the path on address bar on browser.

Create `routes.jsx` file and fill with content above:

```javascript
import React from 'react'
import ExampleComponentName from './components/exampleComponentName/'
import { Route } from 'react-router'

export const router = (
    <Route>
        <Route path="/example-route-path" component={ExampleComponentName} />
        // ...
    </Route>
)
```

### Types

Types file have the map of constanst to use in Redux schema.

Create `types.jsx` file with the following content:

```javascript
export default {
    YOUR_TYPE_EXAMPLE: 'YOUR_TYPE_EXAMPLE',
    // ...
}

```

### Reducer

_Reducer file is in singular name, because is one reducer with multiple types cases._

Create `reducer.jsx` file with the following content:

```javascript
import type from './types'

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
