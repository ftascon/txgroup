import apiConfig from '../../src/api';
import { CardHighlighted, CardImageHighlighted, CardContentHighlighted } from './styles';
import Typography from '@material-ui/core/Typography';

const Highlighted = ({ title, image, description }) => (
    <CardHighlighted>
        <CardImageHighlighted
            src={`${apiConfig.apiUrl}${image.url}`}
            alt="Contemplative Reptile"
        />
        <CardContentHighlighted>
            <div>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </div>
        </CardContentHighlighted>
    </CardHighlighted>
);

export { Highlighted };
