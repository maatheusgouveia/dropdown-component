import React from 'react';

import { MoreIcon } from '../MoreIcon';

import {
	Container,
	ButtonContainer,
	DropdownButton,
	DropdownMenu,
	DropdownMenuItem,
} from './styles';

type Option = {
	key: string;
	label: string;
	onClick: () => void;
};

type Props = {
	options: Option[];
	open: boolean;
	onClick: () => void;
	buttonPosition?: 'end' | 'start';
};

const Dropdown = ({
	options = [],
	open = false,
	onClick,
	buttonPosition = 'end',
}: Props) => (
	<Container>
		<ButtonContainer buttonPosition={buttonPosition}>
			<DropdownButton tabIndex={1} onClick={onClick}>
				<MoreIcon />
			</DropdownButton>
		</ButtonContainer>

		{open && (
			<DropdownMenu>
				{options.map(({ label, key, onClick }, index) => {
					console.log(index);

					return (
						<DropdownMenuItem
							key={key}
							onClick={onClick}
							tabIndex={index + 1}
						>
							{label}
						</DropdownMenuItem>
					);
				})}
			</DropdownMenu>
		)}
	</Container>
);

export { Dropdown };
