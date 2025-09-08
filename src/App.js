import React, { useEffect, useState } from 'react'
import Main from './views/global/pages/main'
import Header from './views/global/pages/header'
import Footer from './views/global/pages/footer'
import AboutMe from './views/global/pages/aboutMe'
import Links from './views/global/pages/links'
import { Routes, Route } from 'react-router'
import css from './styles/styles.css'
import { GlobalStyles } from './styles/styles.css'

function App(props) {
	const { AppOverflow } = css

	const { setShowPage } = useState('main')

	const [theme, setTheme] = useState('light')
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
					onClick={setShowPage}
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
