import styled from "styled-components";

export const SuccesImg = styled.div`
	width: 85px;
	height: 85px;
	background-image: url(${({ url }) => `${url}`});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 50%;
	cursor: default;
`;

export const SuccessTextMessage = styled.div`
	width: 200px;
	height: 30px;
	line-height: 30px;
	color: green;
	text-align: center;
	font-size: 20px;
	font-weight: 500;
	cursor: default;
`;

export const SuccesButton = styled.div`
	width: 160px;
	height: 60px;

	line-height: 60px;
	text-align: center;
	font-weight: 500;
	font-size: 14px;

	border-radius: 28px;
	border: 1px solid var(--primaryColor);
	color: var(--primaryColor);
	cursor: pointer;
	transition: 0.3s ease-out;

	background: linear-gradient(
			to left,
			var(--secondTitleColor) 50%,
			var(--primaryColor) 50%
		)
		right;
	background-size: 200%;

	&:hover {
		transition: 0.3s ease-out;
		color: var(--secondTitleColor);
		background-position: left;
	}
	font-family: var(--montserratFont);
`;
