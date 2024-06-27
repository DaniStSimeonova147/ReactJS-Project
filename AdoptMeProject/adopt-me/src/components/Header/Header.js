import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Drawer, IconButton, List, ListItemButton, Toolbar, } from '@mui/material';

import { AuthContext } from '../../contexts/AuthContext';

const styles = {
  header: {
    backgroundColor: "#2565ae",
  },
  link: {
    fontFamily: "cursive",
    color: "inherit",
    fontSize: "24px",
    fontWeight: 300,
  },
};

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const closeDrawer = () => {
    setOpenDrawer(false);
  };

  const drawerItems = (
    <List>
      <ListItemButton style={styles.link} component={Link} to="/" onClick={closeDrawer}>
        Adopt ME{" "}
      </ListItemButton>
      {!isAuthenticated ? (
        <>
          <ListItemButton style={styles.link} component={Link} to="/login" onClick={closeDrawer}>
            Login
          </ListItemButton>
          <ListItemButton style={styles.link} component={Link} to="/register" onClick={closeDrawer}>
            Register
          </ListItemButton>
        </>
      ) : (
        <>
          <ListItemButton style={styles.link} component={Link} to="/create-pet" onClick={closeDrawer}>
            Add Pet
          </ListItemButton>
          <ListItemButton style={styles.link} component={Link} to="/logout" onClick={closeDrawer}>
            Logout
          </ListItemButton>
        </>
      )}
      <ListItemButton style={styles.link} component={Link} to="/catalog" onClick={closeDrawer}>
        Wait List
      </ListItemButton>
    </List>
  );

  return (
    <AppBar style={styles.header} color="primary">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <List style={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" component={Link} to="/">
            <img width="50px" src="/images/homeLogo.png" alt="img1" />
          </IconButton>
          <ListItemButton style={styles.link} component={Link} to="/">
            Adopt ME
          </ListItemButton>
        </List>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
              {drawerItems}
            </Drawer>
          </>
        ) : (
          <List style={{ display: "flex", alignItems: "center" }}>
            <ListItemButton style={styles.link} component={Link} to="/catalog">
              Wait List
            </ListItemButton>
            {!isAuthenticated ? (
              <>
                <ListItemButton style={styles.link} component={Link} to="/login">
                  Login
                </ListItemButton>
                <ListItemButton style={styles.link} component={Link} to="/register">
                  Register
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton style={styles.link} component={Link} to="/create-pet">
                  Add Pet
                </ListItemButton>
                <ListItemButton style={styles.link} component={Link} to="/logout">
                  Logout
                </ListItemButton>
              </>
            )}
          </List>
        )}
      </Toolbar>
    </AppBar>
  );
};
