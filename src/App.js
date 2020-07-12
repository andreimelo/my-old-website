import React from 'react';
import './app.scss';
import { Provider } from 'react-redux';
import { initStore } from './lib/redux/store';
// Components
import LayoutProvider from '../src/components/LayoutProvider';
import Routes from '../src/components/Routes';
// Pages
import Footer from '../src/components/Footer';

function App(){
	const store = initStore(window.__SERVER_STATE__ || {});
	return (
		<LayoutProvider variant='container__content'>
			<Provider store={store}>
				<Routes />
			</Provider>
			<Footer />
		</LayoutProvider>
	);
}

export default App;
