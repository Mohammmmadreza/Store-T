import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';





export default function ActionAreaCard(props) {
  return (
    <Card  sx={{ maxWidth: 345,margin:5 ,display:'inline-flex'}} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.price} تومان
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
