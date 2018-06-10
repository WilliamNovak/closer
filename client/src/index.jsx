import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import ReactDOM from 'react-dom'

/* redux */
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

/* application */
import Application from 'application/index'
import reducers from 'application/reducers'

/* api */
import { initialize, loadingCalls } from 'api'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

loadingCalls(store)
initialize()

/**
 * Render.
 */
ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('app')
)
