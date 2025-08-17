import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Link } from "react-router-dom";

function ReflectionCard({ title, date, description, image, nav }) {
  const isExternal = nav.startsWith("http"); // checks if link is http

  return (
    <Card variant="outlined" sx={{maxWidth:420,borderColor: "lightblue"}}>
        <CardMedia
          component="img"
          height="300"
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
        {isExternal ? (
          <a href={nav} target="_blank" rel="noopener noreferrer">
            <Button size="small">Learn more</Button>
          </a>
        ) : (
          <Link to={`/${nav}`}>
            <Button size="small">Learn more</Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}

export default ReflectionCard;
