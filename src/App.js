import React, { useEffect, useState } from 'react'
import Main from './views/global/pages/main'
import Header from './views/global/pages/header'
import Footer from './views/global/pages/footer'
import AboutMe from './views/global/pages/aboutMe'
import Links from './views/global/pages/links'
import { Routes, Route } from 'react-router'
import css from './styles/styles.css'
import { GlobalStyles } from './styles/styles.css'
import { useTranslation } from 'react-i18next'
import './i18n'

function App(props) {
	const { t, i18n } = useTranslation()

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	const { AppOverflow } = css

	const [showPage, setShowPage] = useState('home')

	const [theme, setTheme] = useState('dark')
	useEffect(() => {
		document.body.className = theme
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}

	return (
		<>
			<GlobalStyles />
			<AppOverflow>
				<Header
					theme={theme}
					onToggleTheme={toggleTheme}
					onChangeLanguage={changeLanguage}
					lng={i18n.language}
				/>
				<Routes>
					<Route path={'/home'} element={<Main />} />
					<Route path={'/about'} element={<AboutMe />} />
					<Route path={'/links'} element={<Links />} />
				</Routes>

				<Footer />
			</AppOverflow>
		</>
	)
}

export default App
