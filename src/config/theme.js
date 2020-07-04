import { createMuiTheme } from "@material-ui/core/styles";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  },
});
