import Grid from '@material-ui/core/Grid';
import { BlogPostCard, Highlighted } from '../BlogPostCard';

const BlogPostPreview = ({ posts, limited = false }) => (
    <>
    <Grid container>
        <Grid item xs={12}>
          <Highlighted
              title={posts[0].title}
              image={posts[0].image}
              description={posts[0].description}/>
        </Grid>

        {posts.map((post) => (
          <Grid item xs={4}>
            <BlogPostCard
              title={post.title}
              image={post.image}
              description={post.description}/>
          </Grid>
        ))}
    </Grid>
    
    {limited === true && <button>View all</button>}
    </>
);

export { BlogPostPreview };