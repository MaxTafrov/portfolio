import React from 'react'
import css from '../../../styles/styles.css'
import { useTranslation } from 'react-i18next'

const AboutMe = props => {
	const { MainText, MainTitle } = css
	const { t } = useTranslation()
	return (
		<>
			<MainTitle>{t('headerTranslate.aboutMeHeader')}</MainTitle>
			<MainText>{t('aboutMe.text1')}</MainText>
			<MainText>{t('aboutMe.text2')}</MainText>
		</>
	)
}
export default AboutMe
