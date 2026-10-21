import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import profile from '../data/profile'
import './socialLinks.css'
const items = [
{ key: 'github', label: 'GitHub', icon: FaGithub },
{ key: 'linkedin', label: 'LinkedIn', icon: FaLinkedin },
{ key: 'telegram', label: 'Telegram', icon: FaTelegramPlane },
]
function SocialLinks() {
return (
<ul className='social-links'>
{items.map(({ key, label, icon: Icon }) => (
<li key={key}>
<a
href={profile.socials[key]}
target='_blank'
rel='noreferrer'
aria-label={label}
>
<Icon />
</a>
</li>
))}
</ul>
)
}
export default SocialLinks