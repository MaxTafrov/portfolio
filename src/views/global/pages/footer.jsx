import React from 'react'
import css from '../../../styles/styles.css'

const { FooterContainer, FooterLogo, FooterLinks, FooterLink } = css

const Footer = () => {
	return (
		<FooterContainer>
			<FooterLogo>Maxim Tafrov portfolio</FooterLogo>
			<FooterLinks>
				<FooterLink href='https://github.com/MaxTafrov' target='_blank'>
					GitHub
				</FooterLink>
				<FooterLink href='https://t.me/maksudaww' target='_blank'>
					Telegram
				</FooterLink>
				<FooterLink
					href='https://linkedin.com/in/maxim-tafrov-56a243378/'
					target='_blank'
				>
					Linkedin
				</FooterLink>
			</FooterLinks>
		</FooterContainer>
	)
}
export default Footer
