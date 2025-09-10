import React, { useEffect, useState } from 'react'
import Main from './views/global/pages/main'
import Header from './views/global/pages/header'
import Footer from './views/global/pages/footer'
import AboutMe from './views/global/pages/aboutMe'
import Links from './views/global/pages/links'
import { Routes, Route, useLocation } from 'react-router'
import css from './styles/styles.css'
import { GlobalStyles } from './styles/styles.css'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import './i18n'

function App(props) {
	const { t, i18n } = useTranslation()

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	const { AppOverflow } = css

	const [theme, setTheme] = useState('dark')
	useEffect(() => {
		document.body.className = theme
	}, [theme])

	const toggleTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}

	const location = useLocation()

	return (
		<>
			<GlobalStyles />
			<AppOverflow style={{ paddingBottom: '50px' }}>
				<Header
					theme={theme}
					onToggleTheme={toggleTheme}
					onChangeLanguage={changeLanguage}
					lng={i18n.language}
				/>
				<AnimatePresence mode='wait'>
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<Routes location={location} key={location.pathname}>
							<Route path={'/'} element={<Main />} />
							<Route path={'/home'} element={<Main />} />
							<Route path={'/about'} element={<AboutMe />} />
							<Route path={'/links'} element={<Links />} />
						</Routes>
					</motion.div>
				</AnimatePresence>
				<Footer />
			</AppOverflow>
		</>
	)
}

export default App
