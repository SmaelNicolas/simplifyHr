import styled from "styled-components";

export const FormBlog = styled.form`
	width: 100%;
	min-height: 80vh;
	padding: 15px 0px;
	display: flex;
	flex-direction: row;

	justify-content: center;
	@media (max-width: 1089px) {
		height: auto;

		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;
