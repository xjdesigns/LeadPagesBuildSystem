#Build System

##Questions / Comments

 1. Really need to alias things within a component so we can expose them in globals, much like inuit does
 2. Do we want to include any base inuit / SASS components? Do we want to create various builds? 
 -- Yes, we should include: 

 	###Base
 	scss/template.scss

 	###Settings
 	bower_components/inuit-defaults
 	scss/_settings.colors.scss
 	scss/_settings.global.scss
 	bower_components/inuit-responsive-settings

 	###Tools
 	bower_components/inuit-functions
 	bower_components/inuit-mixins
 	bower_components/inuit-responsive-tools

 	###Generic
 	bower_components/inuit-normalize
 	bower_components/inuit-box-sizing

 	###Base
 	bower_components/inuit-page
 	bower_components/inuit-headings
 	scss/_base

 	###Objects
 	scss/_objects.wrappers
 	bower_components/inuit-layout
 	bower_components/inuit-list-block
 	bower_components/inuit-list-inline
 	bower_components/inuit-buttons

 	###Components
	components/backgrounds/_components.backgrounds
 	components/countdown/_components.countdown
	components/css-backgrounds/_components.css-backgrounds
	components/css-responsive-backgrounds/_components.css-responsive-backgrounds
	components/header-accent/_components.header-accent
	components/hero/_components.hero
	components/image-gallery/_components.image-gallery
	components/nav/_components.nav
	components/nav-mobile/_components.nav-mobile
	components/nav-sticky/_components.nav-sticky
	components/parallax/_components.parallax
	components/promo/_components.promo
	components/testimonial/_components.testimonial
	components/trust-indicators/_components.trust-indicators
	
	components/teaser/_components.teaser


 2. WTF is the difference between objects & components? Need to understand this to properly structure our apps