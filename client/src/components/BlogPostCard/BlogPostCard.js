import apiConfig from '../../src/api';
import { Card, CardImage, CardContent } from './styles';
import Typography from '@material-ui/core/Typography';

const BlogPostCard = ({ title, image, description }) => (
    <Card>
        <CardImage
            src={`${apiConfig.apiUrl}${image.url}`}
            alt="Contemplative Reptile"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
        </CardContent>
    </Card>
);

export { BlogPostCard };
