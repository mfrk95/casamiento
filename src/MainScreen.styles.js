import { makeStyles } from "@mui/styles";
import copas from "./assets/copas.png";

const useStyles = makeStyles((theme) => ({
  nosotrosGrid: {
    display: "flex",
    justifyContent: "center !important",
  },

  nosotrosFoto: {
    width: "100% !important",
    height: "100% !important",
  },

  capillaYAnillos: {
    [theme.breakpoints.only("xs")]: {
      height: "730px !important",
      justifyContent: "center",
    },
    [theme.breakpoints.only("sm")]: {
      height: "730px !important",
      justifyContent: "center",
    },
    height: 550,
    display: "flex !important",
    justifyContent: "space-between",
  },

  fatimaYCopas: {
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center !important",
    },
    [theme.breakpoints.only("sm")]: {
      justifyContent: "center !important",
    },
    height: 650,
    display: "flex !important",
    justifyContent: "space-between",
  },

  fatimaGrid: {
    display: "flex",
    alignSelf: "flex-start",
    [theme.breakpoints.up("xl")]: {
      marginRight: "230px !important",
    },
    [theme.breakpoints.only("lg")]: {
      marginRight: "270px !important",
    },
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
      marginLeft: "0px !important",
      marginTop: "50px !important",
    },
    [theme.breakpoints.only("sm")]: {
      justifyContent: "center",
      marginLeft: "0px !important",
      marginTop: "10% !important",
    },
    [theme.breakpoints.only("md")]: {
      justifyContent: "center",
      marginLeft: "0px !important",
      marginTop: "50px !important",
    },
    marginLeft: "70px !important",
    marginTop: "100px !important",
  },

  capillaGrid: {
    display: "flex",
    alignSelf: "flex-start",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "250px !important",
      marginTop: "100px !important",
    },
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
      marginLeft: "0px !important",
      marginTop: "0px !important",
    },
    [theme.breakpoints.only("sm")]: {
      justifyContent: "center",
      marginLeft: "0px !important",
      marginTop: "10% !important",
    },
    [theme.breakpoints.only("md")]: {
      justifyContent: "center",
      marginLeft: "0px !important",
      marginTop: "10% !important",
    },
    marginLeft: "140px !important",
    marginTop: "100px !important",
  },

  fatimaFoto: {
    [theme.breakpoints.only("xs")]: {
      height: 260,
      width: 260,
    },
    maxHeight: 500,
    borderRadius: 3,
  },

  capillaFoto: {
    [theme.breakpoints.only("xs")]: {
      height: 260,
      width: 260,
    },
    height: 458,
    width: 458,
    borderRadius: 3,
  },

  anillosConTextoGrid: {
    [theme.breakpoints.up("xl")]: {
      marginRight: "130px !important",
      height: 400,
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "30px !important",
      marginLeft: "0px !important",
      marginRight: "0px !important",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "10% !important",
      marginLeft: "0px !important",
      marginRight: "0px !important",
    },
    [theme.breakpoints.only("md")]: {
      marginTop: "10% !important",
      marginLeft: "0px !important",
      marginRight: "0px !important",
    },
    display: "flex !important",
    flexDirection: "column !important",
    justifySelf: "flex-end",
    marginTop: "120px !important",
    marginRight: "150px !important",
  },

  copasConTextoGrid: {
    [theme.breakpoints.up("xl")]: {
      marginLeft: "210px !important",
      height: 400,
    },
    [theme.breakpoints.only("lg")]: {
      marginLeft: "140px !important",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "45% !important",
      marginLeft: "5% !important",
      marginRight: "5% !important",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "0px !important",
      marginLeft: "0px !important",
      marginRight: "0px !important",
    },
    display: "flex !important",
    flexDirection: "column !important",
    justifySelf: "flex-end",
    marginTop: "100px !important",
  },

  anilloGrid: {
    alignSelf: "center",
    [theme.breakpoints.only("xs")]: {},
  },

  anilloIcon: {
    height: 80,
    width: 80,
  },

  champagneGrid: {
    alignSelf: "center",
    [theme.breakpoints.only("xs")]: {},
  },

  champagneIcon: {
    height: "60px",
    width: "60px",
  },

  teEsperamosFont: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px !important",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "16px !important",
      marginLeft: "15px !important",
      marginRight: "15px !important",
    },
    textAlign: "center",
    fontFamily: "Montserrat !important",
    fontSize: "25px !important",
    color: "#455864",
    letterSpacing: "3px !important",
    marginBottom: "16px !important",
  },

  losEsperamosFont: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px !important",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "15px !important",
      marginLeft: "15px !important",
      marginRight: "15px !important",
    },
    textAlign: "center",
    fontFamily: "Montserrat !important",
    fontSize: "25px !important",
    color: "#455864",
    letterSpacing: "3px !important",
  },

  estacionFatimaFont: {
    marginTop: "24px !important",
    textAlign: "center",
    fontWeight: "600 !important",
    fontSize: "30px !important",
    fontFamily: "Montserrat !important",
    [theme.breakpoints.only("xs")]: {
      fontSize: "18px !important",
    },
    color: "#455864",
    letterSpacing: "3px !important",
  },

  capillaFatimaFont: {
    marginTop: "8px !important",
    textAlign: "center",
    fontWeight: "600 !important",
    fontSize: "30px !important",
    fontFamily: "Montserrat !important",
    [theme.breakpoints.only("xs")]: {
      fontSize: "18px !important",
    },
    color: "#455864",
    letterSpacing: "3px !important",
  },

  islaFont: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "15px !important",
      marginTop: "20px !important",
    },
    marginTop: "25px !important",
    textAlign: "center",
    fontFamily: "Montserrat !important",
    fontStyle: "italic",
    fontSize: "25px !important",
    color: "#455864",
    letterSpacing: "3px !important",
  },

  provinciaFont: {
    textAlign: "center",
    fontFamily: "Montserrat !important",
    fontSize: "20px !important",
    fontStyle: "italic",
    [theme.breakpoints.only("xs")]: {
      marginTop: "10px !important",
      marginLeft: "10px !important",
      marginRight: "10px !important",
      fontSize: "15px !important",
    },
    color: "#455864",
    letterSpacing: "3px !important",
  },

  comoLlegarGrid: {
    display: "flex",
    justifyContent: " center",
  },

  comoLlegarButton: {
    fontFamily: "Montserrat !important",
    color: "white !important",
    fontSize: "20px !important",
    letterSpacing: "2px !important",
    backgroundColor: "#d3955d !important",
    textShadow: "1px 1px 10px #333333 !important",
    marginTop: "30px !important",
    height: 60,
    width: 220,
    borderRadius: "8px !important",
  },
  confirmaAsistenciaGrid: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.only("xs")]: {
      height: "350px !important",
      textAlign: "center !important",
      marginTop: "3% !important",
    },
    [theme.breakpoints.only("sm")]: {
      height: "600px !important",
      textAlign: "center !important",
      marginTop: "50% !important",
    },
    [theme.breakpoints.only("md")]: {
      height: "600px !important",
      textAlign: "center !important",
      marginTop: "10% !important",
    },
    height: 400,
    width: "inherit",
    marginTop: "6% !important",
    backgroundSize: "cover",
    backgroundImage: `url(${copas})`,
  },

  confirmarAsistenciaText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "23px !important",
      marginLeft: "10px !important",
      marginRight: "10px !important",
      letterSpacing: "3px !important",
    },
    marginTop: "20px !important",
    marginBottom: "30px !important",
    fontFamily: "Montserrat",
    fontSize: "35px !important",
    color: "white !important",
    textShadow: "1px 1px 10px #333333 !important",
    letterSpacing: "3px !important",
  },

  confirmarAsistenciaGraciasText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "23px !important",
      textAlign: "center !important",
      marginBottom: "15px !important",
    },
    fontFamily: "Montserrat",
    fontSize: "35px !important",
    color: "white !important",
    textShadow: "1px 1px 10px #333333 !important",
    letterSpacing: "3px !important",
    marginBottom: "40px !important",
  },

  confirmarAsistenciaButton: {
    [theme.breakpoints.only("xs")]: {
      width: "90% !important",
      height: "55px !important",
      fontSize: "15px !important",
    },
    fontFamily: "Montserrat !important",
    color: "white !important",
    whiteSpace: "nowrap !important",
    fontSize: "20px !important",
    letterSpacing: "4px !important",
    backgroundColor: "#d3955d !important",
    textShadow: "1px 1px 10px #333333 !important",
    marginTop: "30px !important",
    height: "75px !important",
    width: "400px !important",
    borderRadius: "8px !important",
  },
  regaloContainer: {
    display: "flex !important",
    flexDirection: "column !important",
    justifyContent: "flex-start !important",
    alignItems: "center !important",
    height: "auto !important",
  },
  regaloIconContainer: {
    marginTop: "80px !important",
    [theme.breakpoints.only("xs")]: {
      marginTop: "40px !important",
    },
  },
  regaloIcon: { height: "60px !important", width: "60px !important" },
  regaloTextContainer: {
    marginTop: "30px !important",
    alignSelf: "center !important",
    justifySelf: "center !important",
    maxWidth: "550px !important",
  },
  regaloText: {
    [theme.breakpoints.only("xs")]: {
      marginLeft: "10px !important",
      marginRight: "10px !important",
      fontSize: "15px !important",
      letterSpacing: "3px !important",
    },
    fontWeight: "400 !important",
    fontSize: "25px !important",
    textAlign: "center !important",
    wordSpacing: "-2px !important",
    color: "#455864 !important",
    fontFamily: "Montserrat !important",
    letterSpacing: "4px !important",
  },
  regaloGraciasText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "15px !important",
      letterSpacing: "3px !important",
    },
    marginTop: "40px !important",
    fontWeight: "400 !important",
    fontSize: "25px !important",
    textAlign: "center !important",
    wordSpacing: "-2px !important",
    color: "#455864 !important",
    letterSpacing: "4px !important",
    fontFamily: "Montserrat !important",
  },

  verDatosButton: {
    fontFamily: "Montserrat !important",
    color: "white !important",
    fontSize: "20px !important",
    letterSpacing: "2px !important",
    backgroundColor: "#d3955d !important",
    textShadow: "1px 1px 10px #333333 !important",
    marginTop: "30px !important",
    height: "60px !important",
    width: "220px !important",
    borderRadius: "8px !important",
  },
  timerMainContainer: {
    [theme.breakpoints.only("xs")]: {
      marginTop: "35px !important",
    },
    marginTop: "30px !important",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "center !important",
  },
  timerDaysText: {
    [theme.breakpoints.only("xs")]: {
      marginRight: "30px !important",
      fontSize: "25px !important",
    },
    marginRight: "50px !important",
    fontWeight: "400 !important",
    fontSize: "30px !important",
    textAlign: "center !important",
    textShadow: "1px 1px 10px #333333",
    color: "white !important",
    letterSpacing: "3px !important",
  },
  timerDaysLabel: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "15px !important",
    },
    marginTop: "-5px !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    textAlign: "center !important",
    color: "white !important",
    letterSpacing: "3px !important",
    textShadow: "1px 1px 10px #333333",
  },
  timerHoursText: {
    fontWeight: "400 !important",
    [theme.breakpoints.only("xs")]: {
      fontSize: "25px !important",
    },
    fontSize: "30px !important",
    textAlign: "center !important",
    color: "white !important",
    letterSpacing: "3px !important",
    textShadow: "1px 1px 10px #333333",
  },
  timerHoursColon: {
    marginLeft: "-5px !important",
    marginRight: "5px !important",
  },
  timerHoursLabel: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "15px !important",
    },
    marginTop: "-5px !important",
    marginLeft: "-15px !important",
    marginRight: "5px !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    textAlign: "center !important",
    color: "white !important",
    letterSpacing: "3px !important",
    textShadow: "1px 1px 10px #333333",
  },
  timerMinutesText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "25px !important",
    },
    fontWeight: "400 !important",
    fontSize: "30px !important",
    textAlign: "center !important",
    color: "white !important",
    letterSpacing: "3px !important",
    textShadow: "1px 1px 10px #333333",
  },
  timerMinutesColon: {
    marginLeft: "-5px !important",
    marginRight: "5px !important",
    textShadow: "1px 1px 10px #333333",
  },
  timerMinutesLabel: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "15px !important",
    },
    marginTop: "-5px !important",
    marginLeft: "-10px !important",
    marginRight: "5px !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    textAlign: "center !important",
    color: "white !important",
    letterSpacing: "3px !important",
    textShadow: "1px 1px 10px #333333",
  },
  timerSecondsText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "25px !important",
    },
    fontWeight: "400 !important",
    fontSize: "30px !important",
    textAlign: "center !important",
    color: "white !important",
    letterSpacing: "3px !important",
    textShadow: "1px 1px 10px #333333",
  },
  timerSecondsLabel: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "15px !important",
    },
    marginTop: "-5px !important",
    fontWeight: "400 !important",
    fontSize: "22px !important",
    textAlign: "center !important",
    color: "white !important",
    letterSpacing: "3px !important",
  },
}));

export default useStyles;
