import { Card, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
  },
  title: {
    fontSize: 14,
  },
});

export default function TodoCard({ content }) {
  const classes = useStyles();
  return(
  <Card className={classes.root}>
   <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {content}
        </Typography>
        <Button variant="contained" color="primary">
          Done!
        </Button>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </CardContent>
      </Card>
  )
}