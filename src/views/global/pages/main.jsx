import React from 'react'
import css from '../../../styles/styles.css'

const { MainContainer, MainText, MainTitle } = css
const Main = props => {
	return (
		<>
			<MainContainer>
				<MainTitle>About me</MainTitle>
				<MainText>
					Hi! My name is Maksym, I'm a junior frontend developer passionate
					about creating web applications. I've experience working with HTML,
					CSS, JS and React, that you can see bellow.{' '}
				</MainText>
				<MainText>
					I enjoy learning new technologies, solving problems. My goal is to
					grow as developer, gain valuable experience in teamwork and contribute
					in real projects.
				</MainText>
				<MainTitle>Skills</MainTitle>
				<MainText>HTML / CSS</MainText>
				<MainText>JavaScript (ES6+)</MainText>
				<MainText>React (Elementary/Pre-intermediate)</MainText>
				<MainText>Git/GitHub</MainText>
				<MainText>English (Intermediate)</MainText>
				<MainTitle>Projects</MainTitle>
				<MainText>ToDo App --- {/*link*/}</MainText>
				<MainText>Portfolio --- {/*link*/}</MainText>
				<MainText>Mini-game --- {/*link*/}</MainText>
				<MainText>Movie Search --- {/*link*/}</MainText>
			</MainContainer>
		</>
	)
}

export default Main
