import React, { useState, useEffect } from "react";
import { useField } from "../hooks/";
import { Button, Checkbox, Form, Grid,Card } from "semantic-ui-react";
import loginService from "../services/login";

const MainPage = props => {

  return (
    <Grid>
    <Grid.Column width={2}  /><a className="ui card" href="#card-example-link-card">
  <div className="content">
    <div className="header">Elliot Baker</div>
    <div className="meta">Friend</div>
    <div className="description">
      Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his
      cat.
    </div>
  </div>
</a>
    <Grid.Column width={2} />
    <a className="ui card" href="#card-example-link-card">
  <div className="content">
    <div className="header">Elliot Baker</div>
    <div className="meta">Friend</div>
    <div className="description">
      Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his
      cat.
    </div>
  </div>
</a>
    <Grid.Column width={2} />
    <a className="ui card" href="#card-example-link-card">
  <div className="content">
    <div className="header">Elliot Baker</div>
    <div className="meta">Friend</div>
    <div className="description">
      Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his
      cat.
    </div>
  </div>
</a>
    <Grid.Column width={4} />
    <Grid.Column width={4} />
    <Grid.Column width={4} />
    <Grid.Column width={4} />
    <Grid.Column width={4} />
  </Grid>
  );
};
export default MainPage;