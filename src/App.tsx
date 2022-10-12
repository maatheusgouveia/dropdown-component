import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { Dropdown } from './components/Dropdown';
import { themes } from './styles/themes/default';

const options = [
	{
		key: 'Rename',
		label: 'Rename',
		onClick: () => console.log('Click on Rename'),
	},
	{
		key: 'Delete',
		label: 'Delete',
		onClick: () => console.log('Click on Delete'),
	},
	{
		key: 'Share',
		label: 'Share',
		onClick: () => console.log('Click on Share'),
	},
];

function App() {
	const [isOpen, setOpen] = useState(false);

	function toggleDropdown() {
		setOpen(!isOpen);
	}

	return (
		<ThemeProvider theme={themes}>
			<div className="app">
				<Dropdown
					open={isOpen}
					options={options}
					onClick={toggleDropdown}
				/>

				<GlobalStyle />
			</div>
		</ThemeProvider>
	);
}

export default App;
