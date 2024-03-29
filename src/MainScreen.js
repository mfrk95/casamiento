import React from "react";

import mob from "./assets/mob.jpg";
import web from "./assets/web.jpg";
import fatima from "./assets/fatima.png";
import champagne from "./assets/champagne.png";
import capillaFatima from "./assets/capillaFatima.png";
import anillos from "./assets/ring.png";
import regalo from "./assets/regalo.png";
import { Grid, Typography, Button } from "@mui/material";
import useStyles from "./MainScreen.styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Countdown from "react-countdown";

export default function MainScreen() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mostrarDatos, setMostrarDatos] = React.useState(false);

  const mobileVersion = (
    <Grid xs={12}>
      <Grid container xs={12} className={classes.capillaYAnillos}>
        <Grid
          container
          xs={12}
          md={4}
          lg={6}
          className={classes.anillosConTextoGrid}
        >
          <Grid item className={classes.anilloGrid}>
            <img src={anillos} alt="anillos" className={classes.anilloIcon} />
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Typography className={classes.teEsperamosFont}>
              Te esperamos a las 17:00 hs en
            </Typography>
            <Typography className={classes.capillaFatimaFont}>
              ESTACIÓN FÁTIMA
            </Typography>
            <Typography className={classes.islaFont}>Isla Jorge 290</Typography>
            <Typography className={classes.provinciaFont}>
              Provincia de Buenos Aires
            </Typography>
            <Grid className={classes.comoLlegarGrid}>
              <Button
                target="_blank"
                href="https://goo.gl/maps/5bR4BastEa2kdEJ57"
                className={classes.comoLlegarButton}
              >
                CÓMO LLEGAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={10} lg={3} xl={3} item className={classes.capillaGrid}>
          <img src={fatima} alt="capilla" className={classes.capillaFoto} />
        </Grid>
      </Grid>
    </Grid>
  );

  const desktopVersion = (
    <Grid xs={12}>
      <Grid container xs={12} className={classes.capillaYAnillos}>
        <Grid xs={10} md={6} lg={3} xl={3} item className={classes.capillaGrid}>
          <img src={fatima} alt="capilla" className={classes.capillaFoto} />
        </Grid>

        <Grid
          container
          xs={12}
          md={6}
          lg={4}
          className={classes.anillosConTextoGrid}
        >
          <Grid item className={classes.anilloGrid}>
            <img src={anillos} alt="anillos" className={classes.anilloIcon} />
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Typography className={classes.teEsperamosFont}>
              Te esperamos a las 17:00 hs en
            </Typography>
            <Typography className={classes.capillaFatimaFont}>
              ESTACIÓN FÁTIMA
            </Typography>
            <Typography className={classes.islaFont}>Isla Jorge 290</Typography>
            <Typography className={classes.provinciaFont}>
              Provincia de Buenos Aires
            </Typography>
            <Grid className={classes.comoLlegarGrid}>
              <Button
                target="_blank"
                href="https://goo.gl/maps/5bR4BastEa2kdEJ57"
                className={classes.comoLlegarButton}
              >
                CÓMO LLEGAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return "Time's up!";
    } else {
      return (
        <Grid item className={classes.timerMainContainer}>
          <Grid item>
            <Typography className={classes.timerDaysText}>
              {days} <br />
              <Typography className={classes.timerDaysLabel}>días</Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.timerHoursText}>
              {hours} <span className={classes.timerHoursColon}>:</span> <br />
              <Typography className={classes.timerHoursLabel}>hr</Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.timerMinutesText}>
              {minutes} <span className={classes.timerMinutesColon}>:</span>
              <br />
              <Typography className={classes.timerMinutesLabel}>min</Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.timerSecondsText}>
              {seconds} <br />
              <Typography className={classes.timerSecondsLabel}>s</Typography>
            </Typography>
          </Grid>
        </Grid>
      );
    }
  };
  return (
    <Grid container>
      <Grid item className={classes.nosotrosGrid} xs={12} lg={12}>
        <img className={classes.nosotrosFoto} src={mobile ? mob : web} />
      </Grid>

      {mobile ? mobileVersion : desktopVersion}

      <Grid container className={classes.confirmaAsistenciaGrid}>
        <Typography className={classes.confirmarAsistenciaText}>
          Por favor, confirmá tu asistencia por este medio.
        </Typography>
        <Typography className={classes.confirmarAsistenciaGraciasText}>
          ¡Gracias!
        </Typography>
        <Button
          target="_blank"
          href="https://forms.gle/crmDetJu5aayLtSf7"
          className={classes.confirmarAsistenciaButton}
        >
          CONFIRMAR ASISTENCIA
        </Button>
      </Grid>
      <Grid container className={classes.regaloContainer}>
        <Grid item className={classes.regaloIconContainer}>
          <img src={regalo} alt="regalo" className={classes.regaloIcon} />
        </Grid>
        <Grid item className={classes.regaloTextContainer}>
          <Typography className={classes.regaloText}>
            El mejor regalo es tu presencia pero, si querés tener un detalle con
            nosotros, te dejamos los datos de nuestra cuenta.
          </Typography>
          <Typography className={classes.regaloGraciasText}>
            ¡Muchas gracias!
          </Typography>
        </Grid>
        {mostrarDatos ? (
          <Grid
            item
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: " center",
              alignItems: " center",
              height: 100,
            }}
          >
            <Typography
              style={{
                fontWeight: "400",
                fontSize: 19,
                color: "#455864",
              }}
            >
              Banco Santander Rio
            </Typography>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: 19,
                color: "#455864",
              }}
            >
              CBU: 0720769588000005917004
            </Typography>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: 19,
                color: "#455864",
              }}
            >
              Alias: INEYMATISECASAN
            </Typography>
          </Grid>
        ) : null}
        <Grid item style={{ marginTop: 15 }}>
          <Button
            className={classes.verDatosButton}
            onClick={() => {
              setMostrarDatos(!mostrarDatos);
            }}
          >
            VER DATOS
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          marginTop: 60,
          height: 120,
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "#807c6f",
        }}
      >
        <Countdown date={"2022-12-17T18:00:00"} renderer={renderer} />
      </Grid>
    </Grid>
  );
}
