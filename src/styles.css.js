import styled from 'styled-components'

const css = {
	HeaderContainer: styled.header`
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 10px 20px;
	`,
	Logo: styled.div`
		display: block;
		color: #333;
		font-size: 36px;
		width: 15%;
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
	`,
	MenuContainer: styled.nav`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin-left: -15%;
		width: 100%;
	`,

	MainContainer: styled.main`
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: flex-start;
		margin-top: 15px;

		height: calc(100vh - 160px);
		&:hover {
			background-color: #faf7f7;
		}
	`,
	MainTitle: styled.h1`
		padding-left: 20px;

		margin-bottom: 20px;
	`,
	MainText: styled.p`
		display: flex;
		font-size: 18px;
		color: #555;
		max-width: 600px;
		text-align: center;
		padding-left: 10px;
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
