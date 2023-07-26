import { Box, SxProps, Typography } from "@mui/material";

function OurStory() {
  return (
    <div>
      <Box sx={storySx}>
        <Box sx={storyWrapperSx}>
          <Typography variant="h1">Our Story</Typography>
          <Typography variant="body1">
            In the heart of Gothenburg, lived a guitarist, Linus Hernvall.
            Passionate about music, he crafted his own custom guitar pick - a
            true extension of himself. Amazed friends encouraged him to create
            more. Thus, "LH Custom Picks" was born. <br />
            <br />
            Demand grew rapidly, so Linus hired artisans to maintain quality. LH
            Custom Picks gained renown, attracting musicians from afar.
            <br />
            <br />
            With success came expansion. Specialized machinery upheld precision.
            Engravings offered a personal touch.
            <br />
            <br />
            Linus had an idea to create picks dedicated to legendary guitarists.
            Collaborations with icons from various genres became a hit.
            <br />
            <br />
            Beyond picks, LH Custom Picks organized events and workshops,
            becoming a community that celebrated the magic of music.
            <br />
            <br />
            With global recognition, Linus focused on sustainability and
            supporting social causes.
            <br />
            <br />
            His journey from a passionate guitarist to an iconic company founder
            became an inspiration. Music played on, guided by Linus's custom
            picks, touching the lives of musicians and music lovers worldwide.
            <br />
            <br />
            Now is the time for you to take part in this journey and write new
            music history with guitar picks from LH Custom Picks.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

const storySx: SxProps = {
  height: "425px",
  //   border: "2px solid green",
  display: "flex",
  justifyContent: "center",
};

const storyWrapperSx: SxProps = {
  height: "425px",
  width: "100%",
  margin: "0 25px",
  maxWidth: "780px",
  //   border: "2px solid red",
};

export default OurStory;
