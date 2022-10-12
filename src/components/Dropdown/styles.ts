import styled from 'styled-components';

type ButtonContainerProps = {
	buttonPosition: 'end' | 'start';
};

export const Container = styled.div`
	width: 100px;
	color: ${({ theme }) => theme.colours.white100};
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: ${({ buttonPosition }: ButtonContainerProps) =>
		buttonPosition === 'end' ? 'flex-end' : 'flex-start'};
`;

export const DropdownButton = styled.button`
	border: none;
	cursor: pointer;
	background-color: ${({ theme }) => theme.colours.black400};
	color: ${({ theme }) => theme.colours.white100};
`;

export const DropdownMenu = styled.ul`
	margin: 0;
	padding: 0;
	width: 100px;
	list-style: none;
	border: none;
	position: absolute;
	background-color: ${({ theme }) => theme.colours.black400};
`;

export const DropdownMenuItem = styled.li`
	padding: 5px;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colours.blue300};
	}
`;
