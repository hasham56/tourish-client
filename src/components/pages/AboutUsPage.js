import React, { Component } from "react";
import HeroImage from "./../modules/HeroImage";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  pageContentWrapper: {
    minHeight: "calc(100vh - 149px)",
    [theme.breakpoints.up(600)]: {
      minHeight: "calc(100vh - 158px)"
    },
    [theme.breakpoints.up(960)]: {
      minHeight: "calc(100vh - 194px)"
    }
  },
  aboutUsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  paperWrapper: {
    display: "flex",
    width: "70%",
    justifyContent: "flex-start",
    marginBottom: "40px",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center"
    }
  },
  photo: {
    minWidth: "220px",
    maxWidth: "220px",
    padding: "20px"
  },
  titleText: {
    paddingTop: "10px"
  },
  content: {
    padding: "10px 20px 0 20px",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      padding: "20px"
    }
  }
});

class AboutUsPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.pageContentWrapper}>
        <HeroImage imageLink="./londonEye.jpg" height={"40vh"} />
        <div className={classes.aboutUsWrapper}>
          <Typography variant="h2" className={classes.titleText} gutterBottom>
            About Us
          </Typography>

          <Paper className={classes.paperWrapper}>
            <div>
              <img
                src="./group.png"
                alt="Group"
                className={classes.photo}
              />
            </div>
            <div className={classes.content}>
              <Typography variant="body1" gutterBottom>
                Muhammad Akbar, Muhammad Hasham and Daniyal Haroon are the Founding memebers of tourish. They belong to Lahore, Pakistan. It was their FYP and they worked on it effortlessly to achieve the their goal and launch this tourism company to provide ease for tourist coming in Pakistan. Our initial goal is to deploy Tourish in Pakistan but our ultimate goal is to deploy Tourish worldwide.
              </Typography>
              <p />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsPage);
