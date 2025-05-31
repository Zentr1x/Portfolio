import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ReflectionCard({ title, date, description, image }) {
  return (
    <Card variant="outlined">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
          <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ReflectionCard;
