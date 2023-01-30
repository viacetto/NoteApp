const light = {
    primary: {
        500: "linear-gradient(270deg, #c9d7de, transparent)"
    },
    secondary: {
        500: "#c9d7de",
        800: "rgb(127 137 142/15%)",
        darkmode: function(active) {
            return active ?"#d8d4ab": this[500]
        },
    },
    special: {
        300: "#516b76",
        800: "#000"
    },
    action: {
        500: "#a4c4d4"
    },
    danger: {
        500: "#dec9c9"
    },
    info: {
        500: "#d8d4ab"
    },
    add: {
        500: "#a2cf96"
    },
    unfold: {
        500: "#a0b9c5"
    },
    selection: {
        background: "transparent",
        color: "#000000"
    },
    placeholder: '#c9d7de75',
    boxShadows: {
        out: `inset 0 0 15px rgba(55, 84, 170,0),
        inset 0 0 20px rgba(255, 255, 255,0),
        7px 7px 15px rgba(55, 84, 170,.15),
        -7px -7px 20px rgba(255, 255, 255,1),
        inset 0px 0px 4px rgba(255, 255, 255,.2)`,
        in: ` inset 7px 7px 15px rgba(55, 84, 170,.15),
        inset -7px -7px 20px rgba(255, 255, 255,1),
        0px 0px 4px rgba(255, 255, 255,.2);`
    },
    animation: '0.4s ease-in-out'
}
const dark = {
    primary: {
        500: "linear-gradient(270deg, #141c1f, black)"
    },
    secondary: {
        500: "#141c1f",
        800: 'rgb(19 19 19)',
        darkmode: function(active) {
            return active ? this[500]:"#3f3827"
        },
    },
    special: {
        300: "#27313f",
        800: "#fff"
    },
    action: {
        500: "#27313f"
    },
    danger: {
        500: "#3f2727"
    },
    info: {
        500: "#3f3827"
    },
    add: {
        500: "#4e6e45"
    },
    unfold: {
        500: "#30454f"
    },
    selection: {
        background: "transparent",
        color: "#ffffff"
    },
    placeholder: '#0f1416',
    boxShadows: {
        out: `inset 0 0 15px rgb(75 75 76 / 0%), inset 0 0 20px rgb(91 91 91 / 0%), 7px 7px 15px rgb(0 0 0 / 15%), -7px -7px 20px rgb(11 14 15), inset 0px 0px 4px rgb(48 47 47 / 20%)`,
        in: ` inset 7px 7px 15px rgb(67 67 67 / 14%), inset 2px 0px 20px rgb(0 0 0), 0px 0px 4px rgb(0 0 0 / 14%)`
    },
    animation: '0.4s ease-in-out'
}
export default (darkmode) => {
    return {
        colors: darkmode ? dark : light,
        border: {
            radius: "100px",
            radiusSlight: "25px",
        }
    }
}
