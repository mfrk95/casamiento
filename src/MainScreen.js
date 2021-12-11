import React from "react";

import nosotros from "./assets/nosotros3.jpg";
import fatima from "./assets/fatima.jpg";
import anillos from "./assets/ring.png";
import copas from "./assets/copas.png";
import regalo from "./assets/regalo.png";
import { Grid, Typography, Button } from "@mui/material";
import useStyles from "./MainScreen.styles";
import Countdown from "react-countdown";

export default function MainScreen() {
  const classes = useStyles();
  const nosCasamosString = "¡NOS CASAMOS!";
  const nosCasamosIneMati = "Ine & Mati";
  const nosCasamosFecha = "Sábado 17 de Diciembre 2022";
  const [mostrarDatos, setMostrarDatos] = React.useState(false);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return "Time's up!";
    } else {
      return (
        <Grid
          item
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <Typography
              style={{
                marginRight: 50,
                fontWeight: "400",
                fontSize: 30,
                textAlign: "center",
                color: "white",
                letterSpacing: "3px",
              }}
            >
              {days} <br />
              <Typography
                style={{
                  marginTop: -10,
                  fontWeight: "400",
                  fontSize: 22,
                  textAlign: "center",
                  color: "white",
                  letterSpacing: "3px",
                }}
              >
                días
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: 30,
                textAlign: "center",
                color: "white",
                letterSpacing: "3px",
              }}
            >
              {hours} <span style={{ marginLeft: -5, marginRight: 5 }}>:</span>{" "}
              <br />
              <Typography
                style={{
                  marginTop: -10,
                  marginLeft: -15,
                  marginRight: 5,
                  fontWeight: "400",
                  fontSize: 22,
                  textAlign: "center",
                  color: "white",
                  letterSpacing: "3px",
                }}
              >
                hr
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: 30,
                textAlign: "center",
                color: "white",
                letterSpacing: "3px",
              }}
            >
              {minutes}{" "}
              <span style={{ marginLeft: -5, marginRight: 5 }}>:</span>
              <br />
              <Typography
                style={{
                  marginTop: -10,
                  marginLeft: -10,
                  marginRight: 5,
                  fontWeight: "400",
                  fontSize: 22,
                  textAlign: "center",
                  color: "white",
                  letterSpacing: "3px",
                }}
              >
                min
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: 30,
                textAlign: "center",
                color: "white",
                letterSpacing: "3px",
              }}
            >
              {seconds} <br />
              <Typography
                style={{
                  marginTop: -10,
                  fontWeight: "400",
                  fontSize: 22,
                  textAlign: "center",
                  color: "white",
                  letterSpacing: "3px",
                }}
              >
                s
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      );
    }
  };
  return (
    <Grid container>
      <Grid
        item
        className={classes.nosotrosGrid}
        style={{
          backgroundImage: `url(${nosotros})`,
        }}
        xs={12}
      >
        <Grid item xs={5} xl={4} className={classes.nosCasamosGrid}>
          <Typography className={classes.nosCasamosFont}>
            {nosCasamosString}
          </Typography>
          <Typography className={classes.nosCasamosIneMati}>
            {nosCasamosIneMati}
          </Typography>
          <Typography className={classes.nosCasamosFechaFont}>
            {nosCasamosFecha}
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} className={classes.fatimaYAnillosGrid}>
        <Grid xl={3} item className={classes.fatimaGrid}>
          <img src={fatima} alt="fatima" className={classes.fatimaFoto} />
        </Grid>
        <Grid container xs={4} className={classes.anillosConTextoGrid}>
          <Grid item className={classes.anilloGrid}>
            <img src={anillos} alt="anillos" className={classes.anilloIcon} />
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Typography className={classes.teEsperamosFont}>
              Te esperamos a las 18 hs en
            </Typography>
            <Typography className={classes.estacionFatimaFont}>
              ESTACIÓN FÁTIMA
            </Typography>
            <Typography className={classes.islaFont}>Isla Jorge 290</Typography>
            <Typography className={classes.provinciaFont}>
              Provincia de Buenos Aires
            </Typography>
            <Grid className={classes.comoLlegarGrid}>
              <Button
                target="_blank"
                href="https://goo.gl/maps/8RmrhbMaVFJMeCyD7"
                className={classes.comoLlegarButton}
              >
                CÓMO LLEGAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: " column",
            alignItems: "center",
            justifyContent: "center",
            height: 400,
            width: "inherit",
            marginTop: 110,
            backgroundSize: "cover",
            backgroundImage: `url(${copas})`,
          }}
        >
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 30,
              fontFamily: "Montserrat",
              fontSize: 35,
              color: "white",
              textShadow: "1px 1px grey",
              letterSpacing: "3px",
            }}
          >
            Por favor, confirmá tu asistencia por este medio.
          </Typography>
          <Typography
            style={{
              fontFamily: "Montserrat",
              fontSize: 35,
              color: "white",
              textShadow: "1px 1px grey",
              letterSpacing: "3px",
              marginBottom: "40px",
            }}
          >
            ¡Gracias!
          </Typography>
          <Button
            target="_blank"
            href="https://forms.gle/crmDetJu5aayLtSf7"
            style={{
              fontFamily: "Montserrat",
              color: "white",
              whiteSpace: "nowrap",
              fontSize: 20,
              letterSpacing: 2,
              backgroundColor: "#d3955d",
              textShadow: "1px 1px grey",
              marginTop: 30,
              height: 75,
              width: 400,
              borderRadius: 8,
            }}
          >
            CONFIRMAR ASISTENCIA
          </Button>
        </Grid>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "auto",
          }}
        >
          <Grid item style={{ marginTop: 80 }}>
            <img src={regalo} alt="regalo" style={{ height: 60, width: 60 }} />
          </Grid>
          <Grid
            item
            style={{
              marginTop: 30,
              alignSelf: "center",
              justifySelf: " center",
              maxWidth: 550,
            }}
          >
            <Typography
              style={{
                fontWeight: "400",
                fontSize: 22,
                textAlign: "center",
                wordSpacing: -2,
                color: "#455864",
                letterSpacing: "4px",
              }}
            >
              El mejor regalo es tu presencia pero, si queres tener un detalle
              con nosotros, te dejamos los datos de nuestra cuenta.
            </Typography>
            <Typography
              style={{
                marginTop: 40,
                fontWeight: "400",
                fontSize: 22,
                textAlign: "center",
                wordSpacing: -2,
                color: "#455864",
                letterSpacing: "4px",
              }}
            >
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
                Alias: MADRE.PATIO.RAYO
              </Typography>
            </Grid>
          ) : null}
          <Grid item style={{ marginTop: 15 }}>
            <Button
              style={{
                fontFamily: "Montserrat",
                color: "white",
                fontSize: 20,
                letterSpacing: 2,
                backgroundColor: "#d3955d",
                textShadow: "1px 1px grey",
                marginTop: 30,
                height: 60,
                width: 220,
                borderRadius: 8,
              }}
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
    </Grid>
  );
}
