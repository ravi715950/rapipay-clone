import { Box, Typography, Grid } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <Box className="footer">
        <Box py={10}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Box>
                <Typography className="footerH5" variant="h5">
                  Personal
                </Typography>
                <ul className="footerUl">
                  <li>
                    <Link className="footerLink" href="#">
                      {" "}
                      NYE cards{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      {" "}
                      Payments{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Personal loans{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Investments{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Insurance{" "}
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="h5" className="footerH5">
                  Business
                </Typography>
                <ul className="footerUl">
                  <li>
                    <Link href="#" className="footerLink">
                      {" "}
                      NYE cards{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      {" "}
                      Payments{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Business loans{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Investments{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Insurance{" "}
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="h5" className="footerH5">
                  Company
                </Typography>
                <ul className="footerUl">
                  <li>
                    <Link href="#" className="footerLink">
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Careers{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Media{" "}
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box>
                <Typography variant="h5" className="footerH5">
                  Policy
                </Typography>
                <ul className="footerUl">
                  <li>
                    <Link href="#" className="footerLink">
                      {" "}
                      PE Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      {" "}
                      Performance Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Investments
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      Grievance
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={12} md={2}></Grid>

            <Grid item xs={12} md={2}>
              <Box>
                <Typography variant="h5" className="footerH5">
                  Follow Us On
                </Typography>
                <ul
                  style={{
                    display: "inline-flex",
                    flexFlow: "row wrap",
                    listStyle: "none",
                  }}
                >
                  <li>
                    <Link href="#" className="footerLink">
                      <YouTubeIcon
                        sx={{ padding: "10px", width: "36px", height: "36px" }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="footerLink">
                      <LinkedInIcon
                        sx={{ padding: "10px", width: "36px", height: "36px" }}
                      />
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            paddingTop: "32px",
            paddingBottom: "48px",
            padding: "32px ",
            borderTop: "1px solid #d8dce6",
            textAlign: "center",
          }}
        >
          <Typography>
            ©{" "}
            <Link href="#" style={{ color: "#fff" }} target="_blank">
              Ravindra Kumar
            </Link>{" "}
            All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
