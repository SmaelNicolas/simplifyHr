import { ArrowDownwardRounded } from "@mui/icons-material";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;

	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: auto;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Button = styled.button`
	width: 180px;
	height: 45px;
	background-color: #524ef8;
	color: #fff;
	border-radius: 40px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.03);
	}
	font-family: var(--montserratFont);
`;

export const Arrow = styled(ArrowDownwardRounded)`
	width: 12px;
	height: 12px;
	margin-right: 20px;
`;
