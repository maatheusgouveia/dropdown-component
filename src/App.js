import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { themes } from './styles/themes';
import { Dropdown } from './components/Dropdown';

const options = [
	{ key: 'Item 1', label: 'Rename' },
	{ key: 'Item 2', label: 'Delete' },
	{ key: 'Item 3', label: 'Share' },
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
