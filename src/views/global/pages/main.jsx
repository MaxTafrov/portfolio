import React from 'react'
import css from '../../../styles/styles.css'
import { useTranslation } from 'react-i18next'

const { MainContainer, MainText, MainTitle, Links } = css
const Main = props => {
	const { t } = useTranslation()

	return (
		<>
			<MainContainer>
				<MainTitle>{t('home.skills')}</MainTitle>
				<MainText>HTML / CSS (Grid, Flex-box)</MainText>
				<MainText>JavaScript (ES6+)</MainText>
				<MainText>
					React ({t('home.elementary')}/{t('home.pre-intermediate')})
				</MainText>
				<MainText>Git/GitHub</MainText>
				<MainText>English ({t('home.intermediate')})</MainText>
				<MainTitle>{t('home.projects')}</MainTitle>
				<MainText>
					<Links
						href='https://todo-list-iota-five-17.vercel.app'
						target='_blank'
					>
						{' '}
						Todo List App
					</Links>
				</MainText>
				<MainText>
					<Links href='https://github.com/MaxTafrov/portfolio' target='_blank'>
						Portfolio
					</Links>
				</MainText>
				<MainText>
					<Links
						href='https://minesweeper-liard-ten.vercel.app'
						target='_blank'
					>
						Minesweeper
					</Links>
					<MainText>
						<Links href='https://weathery-app-livid.vercel.app' target='_blank'>
							Weather App
						</Links>
					</MainText>
				</MainText>
			</MainContainer>
		</>
	)
}

export default Main
