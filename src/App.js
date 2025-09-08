import React, { useState } from 'react'
import Main from './views/global/pages/main'
import Header from './views/global/pages/header'
import Footer from './views/global/pages/footer'
import AboutMe from './views/global/pages/aboutMe'
import Links from './views/global/pages/links'
import { Routes, Route } from 'react-router'
import css from './styles/styles.css'

function App(props) {
	const { AppOverflow } = css
	const {} = props
	const { setShowPage } = useState('main')

	return (
		<>
			<AppOverflow>
				<Header onClick={setShowPage} />
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
