import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*{
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
	font-family: 'Montserrat', sans-serif;
	}

	body.light {
		--bg-color: #ffffff;
		--text-color: #000000;
		--bg-button: #d3d3d3;
		--bg-footer: #f1f1f1;
	}
	body.dark {
		--bg-color: #000000;
		--text-color: #ffffff;
		--bg-button: #474747;
		--bg-footer: #1a1a1a;
		
	}
	body {
		margin: 0;
		padding: 0;
		background-color: var(--bg-color);
		color: var(--text-color);
		transition: background-color 0.5s ease, color 0.5s ease;
	}
	`
const css = {
	AppOverflow: styled.div`
		width: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		margin-top: 35px;
	`,

	HeaderContainer: styled.header`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		padding: 10px 20px;
	`,

	Logo: styled.div`
		display: flex;

		font-size: 36px;
		width: 40%;
		margin-right: 50px;
	`,

	HeaderButton: styled.button`
		background-color: var(--bg-button);
		color: var(--text-color);
		border: none;
		padding: 10px 20px;
		margin-left: 10px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 18px;
		transition: background-color 0.5s ease;
		&:hover {
			background-color: #808080;
		}
		&:nth-child(2) {
			margin-right: 40px;
		}
	`,
	MenuContainer: styled.nav`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin: 0 auto;

		width: 100%;
	`,

	MainContainer: styled.main`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-top: 15px;
		transition: background-color 0.3s ease;
	`,
	MainTitle: styled.h2`
		padding-left: 20px;
		align-items: center;
	`,
	MainText: styled.p`
		display: flex;
		font-size: 18px;

		max-width: 600px;
		text-align: center;
		padding-left: 10px;
		align-items: center;
	`,

	FooterContainer: styled.footer`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: var(--bg-footer);
	`,
	FooterText: styled.span`
		text-align: center;
		font-size: 14px;
	`,
}

export default css
