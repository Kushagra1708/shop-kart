import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

const navbar = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  {
    name: "Our Products",
    id: "product",
    child: [
      { name: "Product 1", id: "p1" },
      { name: "Product 2", id: "p2" },
      { name: "Product 3", id: "p3" },
      { name: "Product 4", id: "p4" },
    ],
  },
  { name: "Contact Us", id: "contact" },
];

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "black",
      }}
    >
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{
          borderBottom: "1px solid white",
        }}
      >
        <Grid item lg={6}>
          <Typography
            sx={{
              color: "#FFF",
              fontWeight: 100,
              fontSize: 50,
            }}
          >
            Shopkart
          </Typography>
        </Grid>
        {/* <Grid item lg={4}></Grid> */}
        <Grid item lg={5}>
          <Stack direction={"row"} spacing={2} sx={{ justifyContent: "end" }}>
            <Typography
              sx={{
                color: "#FFF",

                fontWeight: 400,
              }}
            >
              WISHLIST (0)
            </Typography>
            <Typography
              sx={{
                color: "#FFF",

                /* Body text 14 */
                fontWeight: 400,
              }}
            >
              BAG (0)
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        // spacing={2}
      >
        {Object.keys(navbar).map((nav, index) => {
          return (
            <Grid item lg={2.75} key={index}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  mt: { lg: 1 },
                }}
              >
                {navbar[nav].name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Navbar;
