import React from "react";
import clsx from "clsx";
import DrawerComp from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import SettingsIcon from "@material-ui/icons/Settings";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateAuth } from "../../../redux/reducers/authReducer";
import PropTypes from "prop-types";
import DrawerStyles from "./Drawer.style";
import "./Drawer.css";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = DrawerStyles;

function Drawer({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    dispatch(updateAuth({ user: false, userData: {} }));
    history.push("/");
  };

  const { userData } = useSelector((state) => state.auth);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundColor: "#343a40", height: "10vh" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
            <button id="logoutButton" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerComp
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            {
              name: "Home",
              icon: <HomeIcon style={{ color: "white" }} />,
              to: "/dashboard/user/",
            },
            {
              name: "Inbox",
              icon: <InboxIcon style={{ color: "white" }} />,
              to: "/dashboard/user/message-box",
            },
            {
              name: "Settings",
              icon: <SettingsIcon style={{ color: "white" }} />,
              to: "/dashboard/user/settings",
            },
          ].map((obj, index) => (
            <Link to={obj.to} key={index}>
              <ListItem button>
                {" "}
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText style={{ color: "white" }} primary={obj.name} />
              </ListItem>
            </Link>
          ))}
          {userData.type === "recruiter" && (
            <Link to="/dashboard/user/new-opening/">
              <ListItem button>
                <ListItemIcon>
                  <FiberNewIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary="Create Job" />
              </ListItem>
            </Link>
          )}
        </List>
      </DrawerComp>
      <main className={classes.content} style={{ padding: 0 }}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

Drawer.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Drawer;
