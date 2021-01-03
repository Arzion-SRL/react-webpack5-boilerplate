import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '~components/App';
import store from '~main/store';
import '~styles/imports.less';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
