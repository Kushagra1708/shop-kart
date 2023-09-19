import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import ChildImage from "../../images/jgcap.png";
import ChildImage1 from "../../images/star.png";
const Layerone = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "749px",
          zIndex: -1,
          bgcolor: "black",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            width: "63%",
            height: "354px",
            flexShrink: 0,
            ml: 65,
            marginTop: 30,
            right: 0,
            // opacity: 0.2,
            background: "var(--Pimary-colour, #F07E15)",
          }}
        ></Box>
      </Box>
      <Box>
        <Grid container justifyContent={"center"}>
          <Grid item md={6}>
            <Stack direction={"column"}>
              <Typography
                component={"div"}
                sx={{
                  position: "relative",
                  fontSize: 170,
                  ml: 20,
                  width: 200,
                  height: 110,
                  color: "white",
                  fontWeight: 800,
                }}
              >
                Fresh
              </Typography>
              <Typography
                component={"div"}
                sx={{
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "0.9px",
                  fontSize: 200,
                  width: 250,
                  height: 150,

                  ml: 40,
                  color: "white",
                }}
              >
                2022
              </Typography>
              <Typography
                component={"div"}
                sx={{
                  position: "relative",
                  // zIndex: -1,
                  ml: 25,
                  fontSize: 200,
                  height: 150,

                  width: 200,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Look
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={6}>
            <Box
              component={"div"}
              sx={{
                position: "absolute",
              }}
            >
              <img
                src={ChildImage}
                height={"100%"}
                width={"100%"}
                alt="Boy Image"
              />
            </Box>
            <Box
              component={"div"}
              sx={{
                position: "relative",
                zIndex: -1,
              }}
            >
              <img
                src={ChildImage1}
                height={"70%"}
                width={"70%"}
                alt="Star Image"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Layerone;
