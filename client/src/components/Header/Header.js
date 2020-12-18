import { Wrapper, Title } from './styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Header = () => (
    <Container>
        <Wrapper position="static">
            <Toolbar>
                <Title variant="h6">
                    <b>Ariadna</b> Rodriguez Marquez
                </Title>
                <Button color="inherit">Menu</Button>
            </Toolbar>
        </Wrapper>
    </Container>
);

export { Header };