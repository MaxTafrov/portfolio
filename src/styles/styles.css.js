import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 35px;
		padding-bottom: 50px;

		@media (max-width: 768px) {
			padding-bottom: 80px;
		}
	`,

	HeaderContainer: styled.header`
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 10px 20px;

		@media (max-width: 768px) {
			flex-direction: column;
			padding: 10px;
		}
	`,

	Logo: styled.div`
		display: flex;
		font-size: 36px;
		width: 40%;
		margin-right: 50px;

		@media (max-width: 768px) {
			width: 100%;
			margin-right: 0;
			justify-content: center;
			margin-bottom: 10px;
		}
	`,

	HeaderButton: styled.button`
		background-color: var(--bg-button);
		color: var(--text-color);
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 18px;
		padding: 10px 20px;
		margin-left: 10px;
		transition: background-color 0.5s ease;

		&:hover {
			background-color: #808080;
		}

		@media (max-width: 768px) {
			font-size: 16px;
			padding: 8px 12px;
			margin-left: 0;
			width: 100%;
			max-width: 200px;
			margin-bottom: 10px;
		}
	`,

	MenuContainer: styled.nav`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin: 0 auto;
		width: 100%;

		@media (max-width: 768px) {
			flex-direction: column;
		}
	`,

	MainContainer: styled.main`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-top: 15px;
		transition: background-color 0.3s ease;
		padding: 0 10px;
	`,

	MainTitle: styled.h2`
		padding-left: 20px;
		align-items: center;
		text-align: center;

		@media (max-width: 768px) {
			font-size: 24px;
			padding-left: 0;
		}
	`,

	MainText: styled.p`
		display: flex;
		font-size: 18px;
		max-width: 600px;
		text-align: center;
		padding-left: 10px;
		align-items: center;

		@media (max-width: 768px) {
			font-size: 16px;
			padding-left: 0;
		}
	`,

	FooterContainer: styled.footer`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		padding: 0 20px;
		background-color: var(--bg-footer);
		transition: background-color 0.5s ease, color 0.5s ease;

		@media (max-width: 768px) {
			flex-direction: column;
			height: auto;
			padding: 10px 20px;
		}
	`,

	FooterLogo: styled.span`
		font-size: 18px;
		font-weight: bold;

		@media (max-width: 768px) {
			margin-bottom: 5px;
			text-align: center;
		}
	`,

	FooterLinks: styled.div`
		display: flex;
		gap: 20px;

		@media (max-width: 768px) {
			flex-wrap: wrap;
			justify-content: center;
			gap: 10px;
		}
	`,

	FooterLink: styled.a`
		text-decoration: none;
		color: var(--text-color);
		margin: 0 10px;
		font-size: 18px;
		display: flex;
		align-items: center;
		transition: color 0.3s ease;

		&:hover {
			color: #808080;
		}

		&:last-child {
			margin-right: 60px;

			@media (max-width: 768px) {
				margin-right: 10px;
			}
		}

		@media (max-width: 768px) {
			font-size: 16px;
			margin: 5px;
		}
	`,
}

export default css
