import React from 'react';
import {connect} from 'react-redux';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";

function MuiThemeProviderContainer({children, ...props}) {
  return (
    <MuiThemeProvider theme={createMuiTheme(props.theme)}>
      {children}
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(MuiThemeProviderContainer);
