import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Banner() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingLeft: { xs: "20px", md: "60px" },
        paddingRight: "20px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingLeft: { xs: "0px", md: "60px" } }}>
            <Typography
              sx={{
                color: "var(--main-color)",
                fontSize: "48px",
                wordSpacing: "999px",
                fontFamily: "var(--font-family)",
                marginTop: "80px",
                fontWeight: "700",
              }}
              variant="h2"
            >
              Rewarding. Revolutionary. Reliable.
            </Typography>
            <Typography
              sx={{
                color: "var(--main-color)",
                fontSize: "20px",
                lineHeight: "56px",
                fontWeight: "400",
                fontFamily: "var(--font-family)",
              }}
              variant="p"
            >
              One platform for all your financial needs.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingLeft: { xs: "0px", md: "60px" } }}>
            <Image
              src="/website_business_allDevices.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="img"
              style={{
                width: "100%",
                height: "auto",
                marginTop: "20px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
