import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import axios from "axios";
import FlagIcon from "@mui/icons-material/Flag";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function TopUser(props) {
  const match = useMediaQuery("(max-width: 768px)");
  const [topUserData, setData] = React.useState(null);
  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "/api/topUser",
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setData(res.data);
        }
      });
  }, []);
  return (
    <Container
      className="p-1 my-5 rounded shadow-lg bg-transparent"
      sx={{ minHeight: "500px" }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: match ? "center" : "left" }}
        className="mx-3 my-5"
      >
        <i class="fa-solid fa-fire me-3"></i>
        Top Artists
      </Typography>

      {topUserData !== null && topUserData.length !== 0 ? (
        <Grid container spacing={3}>
          {topUserData.map((item, idx) => (
            <Grid item lg={3} xs={12}>
              <Card className="bg-dark rounded m-auto" elevation={10}>
                <CardActionArea>
                  {item.userPic ? (
                    <CardMedia
                      component="img"
                      src={`/avatar/userPic/${item.userPic}`}
                      alt="user Pic"
                    />
                  ) : (
                    <Avatar
                      sizes="lg"
                      variant="square"
                      className="w-100"
                      sx={{ padding: "25%" }}
                    >
                      <PersonIcon sx={{ fontSize: "2rem" }} />
                    </Avatar>
                  )}

                  <CardContent className="text-light">
                    <Typography gutterBottom variant="h5" component="div">
                      {item.username}{" "}
                      {item.verified ? (
                        <VerifiedUserIcon className="text-success" />
                      ) : null}
                    </Typography>
                    <Typography>
                      <FlagIcon className="me-3" /> {item.country}
                    </Typography>
                    <Typography>
                      <BookmarkIcon className="me-3 text-warning" />{" "}
                      {item.followers}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Follow
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No users Yet!!</Typography>
      )}
    </Container>
  );
}
