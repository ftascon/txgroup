import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled(AppBar)`
    flex-grow: 1;
    background: transparent;
    border-bottom: 1px solid #000;
    color: #000;
    box-shadow: none;
`;

export const Title = styled(Typography)`
    flex-grow: 1;
    font-family: 'Playfair Display', serif;
`;