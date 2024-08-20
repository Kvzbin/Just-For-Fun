import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Divider,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Inbox,
  Mail,
  ChevronLeft,
  ChevronRight,
  Margin,
} from "@mui/icons-material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import TextField from "@mui/material/TextField";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import NoteAltRoundedIcon from "@mui/icons-material/NoteAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const SidebarLeft = ({ sidebarColor }) => {
  const [open, setOpen] = useState(true);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  const [Role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleClickMenu1 = () => {
    setOpenMenu1(!openMenu1);
  };

  const handleClickMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };

  return (
    <>
      <aside style={{ backgroundColor: sidebarColor }}>
        <IconButton
          onClick={handleToggleSidebar}
          sx={{
            // position: "fixed",
            // top: 7,
            left: open ? 250 : 60,
            zIndex: 1000,
          }}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            width: open ? 250 : 60,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: open ? 250 : 60,
              boxSizing: "border-box",
              transition: "width 0.3s",
              padding: "5px 12px",
              // overflow: "hidden",
              height: "84.5vh",
              top: "52px",
            },
          }}
        >
          <div>
            <List>
              <ListItem>
                <ListItemIcon sx={{
                  padding: "0 0",
                  Margin: "0",
                  ml: "-2px"
                }}>
                  <PeopleAltIcon />
                </ListItemIcon>
                <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
                  <InputLabel id="demo-select-small-label">Role</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={Role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Employee</MenuItem>
                    <MenuItem value={20}>Admin</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </List>
          </div>
          <List>
            <ListItem onClick={handleClickMenu1}>
              <ListItemIcon>
                <AssignmentIndRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
              {openMenu1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 5, fontSize: 14 }}>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary="Profile Security" />
                </ListItem>
                <ListItem button sx={{ pl: 5, fontSize: 14 }}>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItem>
              </List>
            </Collapse>

            <Divider />

            <ListItem button onClick={handleClickMenu2}>
              <ListItemIcon>
                <NoteAltRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Attendence" />
              {openMenu2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMenu2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 5 }}>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary="Guest Attendence" />
                </ListItem>
                <ListItem button sx={{ pl: 5 }}>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary="Faculty Attendence" />
                </ListItem>
              </List>
            </Collapse>

            <Divider />

            <ListItem>
              <ListItemIcon size="small">
                <CalendarMonthRoundedIcon />
              </ListItemIcon>
              <ListItemText size="small" primary="Schedule" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Leave" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
          </List>
        </Drawer>
      </aside>
    </>
  );
};

export default SidebarLeft;
