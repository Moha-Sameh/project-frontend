import React from "react";
import {
  Container,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  CssBaseline,
  Card,
  makeStyles,
} from "@material-ui/core/";

//Alumni store
import alumniStore from "../dataStore/alumniStore";
import { observer } from "mobx-react";

const Alumni = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/*Map through database to fetch a specific amount of students */}

            {alumniStore.alumni.map((item) =>
              item.id <= 6 ? (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://prepsec.org/wp-content/uploads/2017/09/unknown-person-icon-Image-from.png"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h1">
                        {item.firstName + " " + item.lastName}
                      </Typography>
                      <Typography>{item.college.name} </Typography>
                      <Typography>{item.college.department}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null
            )}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default observer(Alumni);
