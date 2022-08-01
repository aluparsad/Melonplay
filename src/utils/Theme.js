import { createTheme } from '@material-ui/core/styles'
import { red, green } from '@material-ui/core/colors'

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