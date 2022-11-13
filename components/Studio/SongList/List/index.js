import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chip, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function List(props) {
  return (
    <Box
      sx={{ width: "100%" }}
      className="bg-dark p-lg-5 p-md-5 p-1 rounded shadow-lg"
    >
      {props.songListData.map((item, idx) => (
        <Card
          className="my-2"
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#000",
          }}
          key={idx}
        >
          <CardContent className="d-flex flex-row p-0">
            <CardMedia
              component="img"
              sx={{ width: "30%" }}
              src={`/avatar/songPic/${item.songPic}`}
              alt="song Pic"
            />
            <CardContent className="text-light">
              <Typography component="div" variant="h5">
                {item.name}
              </Typography>
              <Typography component="div" variant="h6">
                {props.data.username}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="text-light"
              >
                <VisibilityIcon className="me-3" />
                {item.views}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                className="text-light"
              >
                <FavoriteIcon className="me-3 text-danger" />
                {item.likes}
              </Typography>
              <IconButton
                className="text-light"
                size="small"
                onClick={() => {
                  props.changeSrc(item.song);
                  if (props.audioRef.current) {
                    props.audioRef.current.pause();
                    props.audioRef.current.load();
                    props.audioRef.current.play();
                  }
                }}
              >
                <PlayArrowIcon className="text-light fs-1 playButton" />
              </IconButton>
            </CardContent>
          </CardContent>
          <Accordion
            sx={{ backgroundColor: "#000" }}
            className="text-light p-0"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-light" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            />
            <AccordionDetails>
              <div id="artistDet" className="d-flex flex-row my-3">
                <Typography className="fw-bold">Artist</Typography>
                <div className="mx-5">
                  {item.artist.map((artist, idx) => (
                    <Chip
                      className="bg-danger text-light mx-2"
                      label={artist}
                      key={idx}
                    />
                  ))}
                </div>
              </div>
              <div id="prodDet" className="d-flex flex-row my-3">
                <Typography className="fw-bold">Producer</Typography>
                <div className="mx-5">
                  {item.producer.map((prod, idx) => (
                    <Chip
                      className="bg-danger text-light mx-2"
                      label={prod}
                      key={idx}
                    />
                  ))}
                </div>
              </div>
              <div id="writerDet" className="d-flex flex-row my-3">
                <Typography className="fw-bold">Writer</Typography>
                <div className="mx-5">
                  {item.writer.map((wri, idx) => (
                    <Chip
                      className="bg-danger text-light mx-2"
                      label={wri}
                      key={idx}
                    />
                  ))}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}
    </Box>
  );
}
{
  /* <Box sx={{ display: "flex", flexDirection: "column" }}>
            
          </Box> */
}
