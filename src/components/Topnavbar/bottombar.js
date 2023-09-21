import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ChildImage from "../../images/apg.png";
import Btnimg from "../../images/Button.png";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const Bottombar = () => {
  // const outerTheme = useTheme();
  return (
    // <ThemeProvider theme={customTheme(outerTheme)}>
    <Box>
      <Box
        sx={{
          width: "1440px",
          height: "520px",
          flexShrink: 0,
          backgroundImage: `url(${ChildImage})`,
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item md={5}>
            <Stack direction={"column"} spacing={0}>
              <Typography
                sx={{
                  // width: "385px",
                  // height: "52px",
                  // flexShrink: 0,
                  color: "#808080",

                  /* Subtitles */
                  // fontFamily: "Syne",
                  fontSize: 48,
                  // fontStyle: "normal",
                  fontWeight: 300,
                }}
              >
                Newslleter
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#808080",
                }}
              >
                Get news about articles and updates in your inbox.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={5}>
            <Stack direction={"column"} spacing={2}>
              <TextField
                variant="standard"
                label="Name"
                InputLabelProps={{
                  style: {
                    color: "var(--Grey-Scale-200, rgba(255, 255, 255, 0.50))",
                  },
                }}
              />
              <TextField
                variant="standard"
                label="Email"
                InputLabelProps={{
                  style: {
                    color: "var(--Grey-Scale-200, rgba(255, 255, 255, 0.50))",
                  },
                }}
              />
              <TextField
                variant="standard"
                label="Message"
                InputLabelProps={{
                  style: {
                    color: "var(--Grey-Scale-200, rgba(255, 255, 255, 0.50))",
                  },
                }}
              />
            </Stack>
          </Grid>
          <Grid item md={10}>
            <Typography
              sx={{
                fontSize: 135,
                fontWeight: 800,
                color: "white",
              }}
            >
              GET
            </Typography>
            <Typography
              sx={{
                fontSize: 135,
                fontWeight: 800,
                color: "white",
              }}
            >
              IN TOUCH
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        component={"div"}
        sx={{
          width: 100,
          height: 100,
          position: "relative",
          zIndex: 1,
          pt: 40,
          ml: 110,
        }}
      >
        <img src={Btnimg} height={"auto"} width={"fit-content"} />
      </Box>
      <Box component={"div"}>
        <Typography
          sx={{
            color: "black",
            fontSize: 12,
          }}
        >
          copyright 2023-24 | All Rights reserved by SG
        </Typography>
      </Box>
    </Box>
  );
};
export default Bottombar;
