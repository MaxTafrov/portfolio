import React from 'react'
import css from '../../../styles/styles.css'
import { useTranslation } from 'react-i18next'

const { MainContainer, MainText, MainTitle } = css
const Main = props => {
	const { t } = useTranslation()

	return (
		<>
			<MainContainer>
				<MainTitle>{t('home.skills')}</MainTitle>
				<MainText>HTML / CSS</MainText>
				<MainText>JavaScript (ES6+)</MainText>
				<MainText>
					React ({t('home.elementary')}/{t('home.pre-intermediate')})
				</MainText>
				<MainText>Git/GitHub</MainText>
				<MainText>English ({t('home.intermediate')})</MainText>
				<MainTitle>{t('home.projects')}</MainTitle>
				<MainText>
					ToDo App --- https://todo-list-iota-five-17.vercel.app
				</MainText>
				<MainText>
					Portfolio --- https://github.com/MaxTafrov/portfolio
				</MainText>
			</MainContainer>
		</>
	)
}

export default Main
