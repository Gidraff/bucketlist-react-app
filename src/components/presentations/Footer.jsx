import React from 'react';

import { Grid, Nav, NavItem } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Grid>
        <Nav justified>
          <NavItem
            eventKey={1}
          />

        </Nav>
        <div className="text-center">
                    &#169; Gidraff Karanja 2017
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
