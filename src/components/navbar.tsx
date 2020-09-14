import React from "react";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import pink from "@material-ui/core/colors/pink";

const primary = pink[900];
const textColor = "#ffffff";
const titleColor = "tan";

// CSS Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
    color: titleColor,
  },
}));

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <Box component="nav" className={classes.root}>
        <AppBar position="static" style={{ background: primary }}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              {t("title")}
            </Typography>

            <IconButton onClick={handleClick}>
              <TranslateIcon style={{ color: textColor }} />
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                English
              </MenuItem>
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage("id");
                }}
              >
                Indonesia
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
