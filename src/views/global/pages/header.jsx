import React from 'react'
import css from '../../../styles/styles.css'
import { useNavigate } from 'react-router'

const { HeaderContainer, Logo, MenuContainer, HeaderButton } = css

const Header = ({ onToggleTheme, theme }) => {
	const navigate = useNavigate()

	return (
		<HeaderContainer>
			<Logo>Portfolio</Logo>
			<MenuContainer>
				<HeaderButton onClick={() => navigate('/home')}>Home</HeaderButton>
				<HeaderButton onClick={() => navigate('/about')}>About me</HeaderButton>
			</MenuContainer>
			<HeaderButton onClick={onToggleTheme}>
				{theme === 'dark' ? 'Light' : 'Dark'}
			</HeaderButton>
			<HeaderButton>RU</HeaderButton>
		</HeaderContainer>
	)
}

export default Header
