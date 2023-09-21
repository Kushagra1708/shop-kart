import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

const Midbar = (props) => {
  return (
    <>
      <Box component={"div"}>
        <Grid container spacing={4}>
          <Grid item lg={11}>
            <Typography
              sx={{
                width: 689,
                // height: 151,
                color: "var(--Grey-scale-1000, #000)",

                fontSize: 90,
                // borderBottom: "1px solid black",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              New Products
            </Typography>
            <Box
              component={"div"}
              sx={{
                width: "58px",
                height: "0px",
                flexShrink: 0,
                strokeWidth: "1px",
                stroke: "#161615",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="6"
                viewBox="0 0 59 6"
                fill="none"
              >
                <path
                  d="M58 3.5H58.5V2.5H58V3.5ZM0 3L5 5.88675V0.113249L0 3ZM58 2.5L4.5 2.5V3.5L58 3.5V2.5Z"
                  fill="#161615"
                />
              </svg>
            </Box>
            <Box
              sx={{
                width: "69px",
                height: "0px",
                flexShrink: 0,
                strokeWidth: "1px",
                stroke: "#161615",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="6"
                viewBox="0 0 70 6"
                fill="none"
              >
                <path
                  d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM70 3L65 0.113249V5.88675L70 3ZM1 3.5L65.5 3.5V2.5L1 2.5L1 3.5Z"
                  fill="#161615"
                />
              </svg>
            </Box>
          </Grid>
          <Grid item lg={2}>
            <Stack direction={"column"} spacing={2}>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Body text 18 */

                  fontSize: "18px",

                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Apparel
              </Typography>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Subtitles */

                  fontSize: "26px",

                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                Accessories
              </Typography>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Body text 18 */

                  fontSize: "18px",

                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Best sellers
              </Typography>
              <Typography
                sx={{
                  color: "var(--Grey-scale-1000, #000)",

                  /* Body text 18 */

                  fontSize: "18px",

                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                50% OFF
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={10}>
            <Grid container>
              <div
                style={{
                  height: "auto",
                  width: "100%",
                  overflowX: "auto",
                  display: "flex",
                  gap: 2,
                  // overflow: "hidden",
                }}
              >
                {props.value &&
                  props.value.map((val, index) => (
                    <Grid item md={5}>
                      <Items key={index} value={val} />
                    </Grid>
                  ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Midbar;

const Items = ({ value }) => {
  return (
    <Card sx={{ height: 450, width: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={value.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "var(--Grey-scale-1000, #000)",
              fontSize: 26,
              fontWeight: 400,
            }}
          >
            {value.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: 200,
              wrap: true,
            }}
          >
            {value.description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $ {value.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
