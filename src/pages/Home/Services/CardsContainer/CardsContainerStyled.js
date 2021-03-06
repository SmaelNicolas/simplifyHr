import styled from "styled-components";

export const CardsContainerStyled = styled.div`
	max-width: 1500px;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 35px;
	@media (max-width: 820px) {
		display: none;
	}
`;
