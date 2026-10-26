import profile from '../data/profile'
import SocialLinks from './socialLinks'
import './hero.css'
function Hero() {
return (
<section id='home' className='hero section container'>
<p className='hero__greeting'>Hey, my name is</p>
<h1 className='hero__name'>{profile.name}.</h1>
<p className='hero__role'>{profile.role}</p>
<p className='hero__tagline'>{profile.tagline}</p>
<div className='hero__actions'>
<a href='#projects' className='btn btn--primary'>View my work</a>
<a href='#contact' className='btn btn--outline'>Contact me</a>
</div>
<div className='hero__socials'>
<SocialLinks />
</div>
</section>
)
}
export default Hero
