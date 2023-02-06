export interface ColorOptions {
    primary: {
        500: string
    },
    secondary: {
        500: string,
        800: string,
        darkmode(active: boolean): string,
    },
    special: {
        300: string,
        800: string
    },
    action: {
        500: string
    },
    danger: {
        500: string
    },
    info: {
        500: string
    },
    add: {
        500: string
    },
    unfold: {
        500: string
    },
    selection: {
        background: string,
        color: string
    },
    placeholder: string,
    boxShadows: {
        out: string,
        in: string
    },
    animation: string
}

export interface ThemeOptions {
    colors: ColorOptions;
    border: {
        radius: string,
        radiusSlight: string,
    }
}