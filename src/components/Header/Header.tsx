import Container from '@mui/material/Container';
import './Header.scss';
import HeaderMenu from './HeaderMenu';

export interface PugleHeaderProps {
    logo: Partial<LogoProps>;
}

interface LogoProps {
    alt: string;
    src: string;
    width?: string | number;
    height?: string | number;

}

const Header = (props: PugleHeaderProps): JSX.Element => {
const { logo } = props;

const ImageComponent = (
    <img 
    src={logo.src}
    alt={logo.alt}
    width={logo.width}
    height={logo.height}
    />
);

    return (
    <header>
       <Container className='container-header-styles'>
        <figure className='logo-image-specs'>
        <a href='https://google.com'>
            {ImageComponent}
        </a>
        </figure>
         <aside className='menu-wrapper-styles'>
    <HeaderMenu />
         </aside>
         </Container>
    </header>);
}

export default Header;