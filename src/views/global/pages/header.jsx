import React from 'react'
import css from '../../../styles.css'

const { HeaderContainer, Logo, MenuContainer, HeaderButton } = css

const Header = () => {
	return (
		<HeaderContainer>
			<Logo>My portfolio</Logo>
			<MenuContainer>
				<HeaderButton>Home</HeaderButton>
				<HeaderButton>About me</HeaderButton>
				<HeaderButton>Links</HeaderButton>
			</MenuContainer>
		</HeaderContainer>
	)
}

export default Header
