import React, { useState } from 'react'
import css from '../../../styles/styles.css'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

const { HeaderContainer, Logo, MenuContainer, HeaderButton } = css

const Header = ({ onToggleTheme, theme, onChangeLanguage, lng }) => {
	const { t } = useTranslation()

	const navigate = useNavigate()

	const toggleLanguage = () => {
		const newLng = lng === 'ru' ? 'en' : 'ru'
		onChangeLanguage(newLng)
	}

	return (
		<HeaderContainer>
			<Logo>{t('headerTranslate.logo')}</Logo>
			<MenuContainer>
				<HeaderButton onClick={() => navigate('/home')}>
					{t('headerTranslate.home')}
				</HeaderButton>
				<HeaderButton onClick={() => navigate('/about')}>
					{t('headerTranslate.aboutMeHeader')}
				</HeaderButton>
			</MenuContainer>
			<HeaderButton onClick={onToggleTheme}>
				{theme === 'dark' ? 'Dark' : 'Light'}
			</HeaderButton>
			<HeaderButton onClick={toggleLanguage}>
				{lng === 'ru' ? 'EN' : 'RU'}
			</HeaderButton>
		</HeaderContainer>
	)
}

export default Header
