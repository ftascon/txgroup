import styled from 'styled-components';

export const Card = styled.div`
    padding: 15px;
`;

export const CardHighlighted = styled(Card)`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardImageHighlighted = styled(CardImage)`
    width: auto;
    max-width: 66%;
`;

export const CardContent = styled.div`
    padding: 15px;
    background: #fff;
    margin-top: -3px;
    min-height: 145px;
`;

export const CardContentHighlighted = styled(CardContent)`
    margin-top: 0;
    display: flex;

    > div {
        margin: auto;
    }
`;
