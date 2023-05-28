import Container from '@mui/material/Container';
import './Header.scss';
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
    />
);

    return (
    <header>
       <Container>
        <aside className='logo-image-specs'>
        <a>
            {ImageComponent}
        </a>
        </aside>
         Hello World!</Container>
    </header>);
}

export default Header;