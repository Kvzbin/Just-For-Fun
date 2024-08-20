// src/SettingsIcon.js
import React, { useEffect, useState } from "react";
import "./SidebarRight";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled, keyframes } from "@mui/system";

const ColorButton = styled("button")(({ color }) => ({
  backgroundColor: color,
  width: 35,
  height: 35,
  margin: 5,
  borderRadius: "50%",
  border: "2px solid black",
  cursor: "pointer",
}));

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AnimatedIcon = styled(SettingsIcon)(() => ({
  fontSize: '33px',
  animation: `${spin} 2s linear infinite`,
  position: 'fixed',
  bottom: 80,
  left: 1180,
  zIndex: 1,
  color: "grey",
  '&:hover': {
    animation: `${spin} 1s linear infinite`, // Speed up on hover
  },
}));

const SettingsSidebar = ({ handleColorChange }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Default font size in pixel
  const [theme, setTheme] = useState("light");

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize((prevSize) => (prevSize < 18 ? prevSize + 1 : prevSize));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => (prevSize > 14 ? prevSize - 1 : prevSize)); // Prevent font size from getting too small
  };

  const resetFontSize = () => {
    setFontSize(16); // Reset to default font size
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#373A40";
      document.body.style.color = "#F6F5F2";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div>
        <IconButton onClick={toggleDrawer(true)}>
          <AnimatedIcon />
          {/* <SettingsIcon
            sx={{
              position: "fixed",
              bottom: 80,
              left: 1180,
              color: "maroon",
            }}
          /> */}
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <div style={{ width: 250 }}>
            <List>
              <ListItem>
                <ListItemText primary="Change Header Color" />
              </ListItem>
              <ListItem cols={5} row>
                {["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#ffffff"].map(
                  (color) => (
                    <ColorButton
                      key={color}
                      color={color}
                      onClick={() => handleColorChange("header", color)}
                    />
                  )
                )}
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Change Footer Color" />
              </ListItem>
              <ListItem>
                {["#009688", "#4caf50", "#8bc34a", "#ffffff", "#ffeb3b"].map(
                  (color) => (
                    <ColorButton
                      key={color}
                      color={color}
                      onClick={() => handleColorChange("footer", color)}
                    />
                  )
                )}
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Change Sidebar Color" />
              </ListItem>
              <ListItem>
                {["#00bcd4", "#ffffff", "#2196f3", "#3f51b5", "#9c27b0"].map(
                  (color) => (
                    <ColorButton
                      key={color}
                      color={color}
                      onClick={() => handleColorChange("sidebar", color)}
                    />
                  )
                )}
              </ListItem>
            </List>
          </div>
          <Divider />
          <ListItem>
            <ListItemText primary="Change FontSize" />
          </ListItem>
          <ListItem>
            <Stack direction="row" spacing={1}>
              <Button
                size="small"
                variant="outlined"
                color="error"
                title="FontSizeDec"
                onClick={decreaseFontSize}
              >
                A-
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                title="FontSizeRestore"
                onClick={resetFontSize}
              >
                A
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                title="FontSizeInc"
                onClick={increaseFontSize}
              >
                A+
              </Button>
            </Stack>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Dark Mode" />
          </ListItem>
          <ListItem>
            <Stack>
            <Button
              onClick={toggleTheme}
              title="ChangeTheme"
              variant="outlined"
              size="small"
              color="secondary"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </Button>
            </Stack>
          </ListItem>
        </Drawer>
      </div>
    </>
  );
};

export default SettingsSidebar;
