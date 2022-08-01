import {createTheme} from '@mui/material/styles'
import {red, green} from '@mui/material/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: green[800],
        },
        secondary: {
            main: red[800]
        },
    }
})

export default theme;