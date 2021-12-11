import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  nosotrosGrid: {
    backgroundSize: "cover",
    width: "100%",
    [theme.breakpoints.up("xl")]: {
      height: 1000,
    },
    height: 700,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  nosCasamosGrid: {
    backgroundColor: "rgba(122, 130, 137, 0.4)",
    height: 600,
    maxWidth: 500,
    [theme.breakpoints.up("xl")]: {
      marginRight: "10em !important",
    },
    marginRight: "4em !important",
  },
  nosCasamosFont: {
    color: "white",
    fontFamily: "Amatic SC, cursive !important",
    fontSize: "100px !important",
    fontWeight: "bold !important",
    marginTop: "100px !important",
    [theme.breakpoints.up("xl")]: {
      marginRight: "100px !important",
      marginLeft: "100px !important",
    },
    marginLeft: "80px !important",
  },
  nosCasamosIneMati: {
    color: "white",
    fontFamily: "Amatic SC, cursive !important",
    fontSize: "90px !important",
    textAlign: "center",
  },
  nosCasamosFechaFont: {
    color: "white",
    fontFamily: "Amatic SC, cursive !important",
    fontSize: "50px !important",
    fontWeight: "bold !important",
    textAlign: "center",
  },

  fatimaYAnillosGrid: {
    height: 650,
    display: "flex !important",
    justifyContent: "space-between",
  },
  fatimaGrid: {
    display: "flex",
    alignSelf: "flex-start",
    [theme.breakpoints.up("xl")]: {
      marginLeft: "250px !important",
      marginTop: "100px !important",
    },
    marginLeft: "140px !important",
    marginTop: "100px !important",
  },

  fatimaFoto: {
    minWidth: "100%",
    maxHeight: 500,
    borderRadius: 3,
  },

  anillosConTextoGrid: {
    display: "flex !important",
    flexDirection: "column !important",
    justifySelf: "flex-end",
    marginTop: "100px !important",
    [theme.breakpoints.up("xl")]: {
      marginRight: "250px !important",
    },
    marginRight: "150px !important",
    height: 400,
  },

  anilloGrid: {
    alignSelf: "flex-start",
    alignSelf: "center",
  },

  anilloIcon: {
    height: 80,
    width: 80,
  },

  teEsperamosFont: {
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px !important",
    },
    textAlign: "center",
    fontFamily: "Montserrat !important",
    fontSize: "25px !important",
    color: "#455864",
    letterSpacing: "3px !important",
  },

  estacionFatimaFont: {
    marginTop: "8px !important",
    textAlign: "center",
    fontWeight: "400 !important",
    fontSize: "30px !important",
    color: "#455864",
    letterSpacing: "3px !important",
  },

  islaFont: {
    marginTop: "40px !important",
    textAlign: "center",
    fontFamily: "Montserrat !important",
    fontSize: "25px !important",
    color: "#455864",
    letterSpacing: "3px !important",
  },

  provinciaFont: {
    textAlign: "center",
    fontFamily: "Montserrat !important",
    fontSize: "25px !important",
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
    textShadow: "1px 1px grey",
    marginTop: "30px !important",
    height: 60,
    width: 220,
    borderRadius: "8px !important",
  },
}));

export default useStyles;
