
export interface colourScheme {
  primary: string,
  secondary: string,
  highlight: string
}

export const light: colourScheme = {
  primary: "white",
  secondary: "black",
  highlight: "[#FFCF4C]"
}

export const dark: colourScheme = {
  primary: "black",
  secondary: "white",
  highlight: "[#FFCF4C]"
}

export const colourSchemes: colourScheme[] = [light, dark]
