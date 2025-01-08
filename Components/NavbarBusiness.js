import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";

const drawerWidth = 240;
const pages = [
  {
    name: "NYE cards",
    id: "#nye_cards",
  },
  {
    name: "Payments",
    id: "#payments",
  },
  {
    name: "Current account",
    id: "#current_account",
  },
  {
    name: "Loans",
    id: "#loans",
  },
  {
    name: "About NYE",
    id: "#about",
  },
  {
    name: "Customer care",
    id: "#custumer",
  },
];

function NavbarBusiness({ current, setCurrent }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            display: { xs: "block", md: "none" },
            my: 2,
            paddingLeft: "20px",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                fontSize: "12px",
                borderRadius: "24px",
                textTransform: "none",
                fontFamily: "var(--font-family)",
                color: "var(--main-color2)",
                fontWeight: "600",
              }}
            >
              Personal
            </Button>
          </Link>
          <Link href="/business">
            <Button
              sx={{
                fontSize: "12px",
                borderRadius: "24px",
                textTransform: "none",
                fontFamily: "var(--font-family)",
                backgroundColor: "var(--main-color2)",
                fontWeight: "600",
              }}
              variant="contained"
              color="secondary"
            >
              {" "}
              Business
            </Button>
          </Link>
        </Breadcrumbs>
      </div>
      <Divider />
      <List>
        {pages.map((item, index) => (
          <ListItem
            key={index}
            sx={{ color: "var(--main-color2)" }}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleCurrent = (ID) => {
    setCurrent(ID);
  };

  return (
    <AppBar elevation={0} position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="#4c1a84"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#4c1a84',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image
              src="/LOGO.svg"
              alt="Logo"
              width={300}
              height={150}
              style={{
                width: "150px",
                height: "auto",
              }}
              priority
            />
          </Box>
          <div role="presentation">
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Link href="/" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "12px",
                    borderRadius: "24px",
                    textTransform: "none",
                    fontFamily: "var(--font-family)",
                    color: "var(--main-color2)",
                    fontWeight: "600",
                  }}
                  color="secondary"
                >
                  Personal
                </Button>
              </Link>
              <Link href="/business">
                <Button
                  sx={{
                    fontSize: "12px",
                    borderRadius: "24px",
                    textTransform: "none",
                    fontFamily: "var(--font-family)",
                    backgroundColor: "var(--main-color2)",
                    fontWeight: "600",
                  }}
                  variant="contained"
                  color="secondary"
                >
                  {" "}
                  Businessss
                </Button>
              </Link>
            </Breadcrumbs>
          </div>

          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#a13273",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ mr: 2, display: { xs: "flex", md: "none" } }}>
            <Image
              src="/LOGO.svg"
              alt="Logo"
              width={300}
              height={150}
              style={{
                width: "150px",
                height: "auto",
              }}
              priority
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                href={page.id}
                onClick={() => handleCurrent(page.id)}
                sx={{
                  my: 4,
                  display: "flex",
                  color: "var(--main-color2)",
                  fontSize: "14px",
                  textTransform: "none",
                  fontFamily: " var(--font-family)",
                  fontWeight: "600",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={2}>
              <Button
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontSize: "12px",
                  borderRadius: "24px",
                  textTransform: "none",
                  fontFamily: "var(--font-family)",
                  color: "var(--main-color2)",
                  fontWeight: "600",
                }}
                color="secondary"
              >
                Log in
              </Button>
              <Button
                sx={{
                  fontSize: "12px",
                  borderRadius: "24px",
                  textTransform: "none",
                  fontFamily: "var(--font-family)",
                  backgroundColor: "var(--main-color2)",
                  fontWeight: "600",
                }}
                variant="contained"
                color="secondary"
              >
                Sign Up
                <NavigateNextIcon />
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarBusiness;
