import React from 'react';

import { MoreIcon } from '../MoreIcon';

import {
	Container,
	ButtonContainer,
	DropdownButton,
	DropdownMenu,
	DropdownMenuItem,
} from './styles';

const Dropdown = ({
	options = [],
	open = false,
	onClick,
	buttonPosition = 'end',
}) => (
	<Container>
		<ButtonContainer buttonPosition={buttonPosition}>
			<DropdownButton onClick={onClick}>
				<MoreIcon />
			</DropdownButton>
		</ButtonContainer>

		{open && (
			<DropdownMenu>
				{options.map(({ label, key }) => (
					<DropdownMenuItem key={key}>{label}</DropdownMenuItem>
				))}
			</DropdownMenu>
		)}
	</Container>
);

export { Dropdown };
