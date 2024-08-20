// Sidebar.js
import React, { useState } from 'react';
import { Box, Drawer, MenuItem, MenuList, Select, Typography, Divider, List, ListItem, ListItemText, ListItemIcon, Collapse, IconButton } from '@mui/material';
import { Menu, ExpandLess, ExpandMore, Person, Event, Schedule, LibraryBooks, ExitToApp } from '@mui/icons-material';

const Sidebar = () => {
  const [role, setRole] = useState('admin');
  const [open, setOpen] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [openAttendance, setOpenAttendance] = useState(false);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };

  const handleAttendanceClick = () => {
    setOpenAttendance(!openAttendance);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: open ? 240 : 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: open ? 240 : 0, boxSizing: 'border-box', padding: "5px 10px"},
        }}
      >
        <Box sx={{ overflow: 'hidden', height: '100%' }}>
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Profile</Typography>
            <IconButton onClick={handleToggleSidebar}>
              <ExitToApp />
            </IconButton>
          </Box>
          <Box sx={{ m: 2 }}>
            <Select value={role} onChange={handleRoleChange} fullWidth size='small'>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
            </Select>
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={handleProfileClick}>
              <ListItemIcon><Person /></ListItemIcon>
              <ListItemText primary="My Profile" />
              {openProfile ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openProfile} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Profile Security" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Change Password" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleAttendanceClick}>
              <ListItemIcon><Event /></ListItemIcon>
              <ListItemText primary="Attendance" />
              {openAttendance ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openAttendance} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4, fontSize: ".7em" }}>
                  <ListItemText primary="Faculty Attendence" />
                </ListItem>
                <ListItem button sx={{ pl: 4, fontSize: ".7em" }}>
                  <ListItemText primary="Guest Attendence" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button >
              <ListItemIcon><Schedule /></ListItemIcon>
              <ListItemText primary="Schedule" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary="Leave" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><LibraryBooks /></ListItemIcon>
              <ListItemText primary="Library" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {!open && (
        <IconButton onClick={handleToggleSidebar} sx={{ position: 'absolute', top: 16, left: 16 }}>
          <Menu />
        </IconButton>
      )}
    </Box>
  );
};

export default Sidebar;
