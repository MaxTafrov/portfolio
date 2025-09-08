import styled, { createGlobalStyle } from 'styled-components'

const css = {
	GlobalStyle: createGlobalStyle`
	*{
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
	font-family: 'Montserrat', sans-serif;
	}
	`,

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
		color: #333;
		font-size: 36px;
		width: 40%;
		margin-right: 50px;
	`,

	HeaderButton: styled.button`
		background-color: #adadad;
		color: black;
		border: none;
		padding: 10px 20px;
		margin-left: 10px;
		border-radius: 5px;
		cursor: pointer;
		font-size: 18px;
		transition: background-color 0.3s ease;
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
		&:hover {
			background-color: #faf7f7;
		}
	`,
	MainTitle: styled.h2`
		padding-left: 20px;
		align-items: center;
	`,
	MainText: styled.p`
		display: flex;
		font-size: 18px;
		color: #555;
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
		width: 100%;
		height: 80px;
		background-color: #e5e5e5;
	`,
	FooterText: styled.span`
		text-align: center;
		color: #777;
		font-size: 14px;
	`,
}

export default css
