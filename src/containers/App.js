import React from 'react';

import {
  Route,
  Link,
  Switch as RouterSwitch
} from 'react-router-dom';

import {
  Grid,
  GridCell,
  GridInner
} from 'rmwc/Grid';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle
} from 'rmwc/TopAppBar';

import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerToolbarSpacer
} from 'rmwc/Drawer';

import {
  List,
  ListItem,
  ListItemText
} from 'rmwc/List';

import {
  Card,
  CardPrimaryAction,
  CardAction,
  CardActions,
  CardMedia,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';
import { ListDivider } from 'rmwc/List';
import { Icon } from 'rmwc/Icon';
import { Typography } from 'rmwc/Typography';

import Ads from '../components/Ads/Ads';

import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';
import '@material/drawer/dist/mdc.drawer.min.css';
import '@material/list/dist/mdc.list.min.css';
import '@material/card/dist/mdc.card.min.css';
import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';
import '@material/typography/dist/mdc.typography.min.css';

import '../components/App/App.css';

class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = { menuIsOpen: false };
    this.handleMenu = this.openMenu.bind(this);
  }

  openMenu(ev) { 
    ev.preventDefault();
    this.setState(prevState => ({
      menuIsOpen: !this.state.menuIsOpen
    }))
  }

  render() {
    return (
      <div>
        <TopAppBar fixed className="app__top-app-bar"> 
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarNavigationIcon use="menu" onClick={() => this.setState(prevState => ({
                menuIsOpen: true
              }))} />
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <Drawer temporary
          open={this.state.menuIsOpen}
          onClose={() => this.setState(prevState => ({
            menuIsOpen: false
          }))}>
          <DrawerHeader>
            DrawerHeader
                  </DrawerHeader>
          <DrawerContent>
            <ListItem>
              <ListItemText>
                <Link to={'/principal/teste-react.jsp/anuncios'}>Cookies</Link>
            </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Pizza</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Icecream</ListItemText>
            </ListItem>
          </DrawerContent>
        </Drawer>
        <main className="app__content">
          <Grid>
            <GridCell span="4">
              <Card style={{ width: '21rem' }}>
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage:
                        'url(https://material-components-web.appspot.com/images/16-9.jpg)'
                    }}
                  />
                  <div style={{ padding: '0 1rem 1rem 1rem' }}>
                    <Typography use="headline6" tag="h2">
                      Our Changing Planet
                    </Typography>
                    <Typography
                      use="subtitle2"
                      tag="h3"
                      theme="text-secondary-on-background"
                      style={{ marginTop: '-1rem' }}
                    >
                      by Kurt Wagner
                    </Typography>
                    <Typography use="body1" tag="div" theme="text-secondary-on-background">
                      Visit ten places on our planet that are undergoing the biggest changes
                      today.
                    </Typography>
                  </div>
                </CardPrimaryAction>
                <CardActions>
                  <CardActionButtons>
                    <CardAction>Read</CardAction>
                    <CardAction>Bookmark</CardAction>
                  </CardActionButtons>
                  <CardActionIcons>
                    <CardAction
                      iconToggle
                      on={{ label: 'Remove from favorites', content: 'favorite' }}
                      off={{ label: 'Add to favorites', content: 'favorite_border' }}
                    />
                    <CardAction icon use="share" />
                    <CardAction icon use="more_vert" />
                  </CardActionIcons>
                </CardActions>
              </Card>
            </GridCell>
            <GridCell span="8">
              <Card outlined style={{ width: '21rem' }}>
                <Typography
                  use="subtitle1"
                  tag="div"
                  style={{ padding: '0.5rem 1rem' }}
                  theme="text-secondary-on-background"
                >
                  Headlines
                </Typography>

                <ListDivider />

                <CardPrimaryAction>
                  <div style={{ padding: '1rem' }}>
                    <Typography use="headline5" tag="div">
                      Copper on the rise
                    </Typography>
                    <Typography use="body1" tag="p" theme="text-secondary-on-background">
                      Copper price soars amid global market optimism and increased demand.
                    </Typography>
                  </div>
                </CardPrimaryAction>

                <ListDivider />

                <CardPrimaryAction>
                  <div style={{ padding: '1rem' }}>
                    <Typography use="headline5" tag="div">
                      U.S. tech startups rebound
                    </Typography>
                    <Typography use="body1" tag="p" theme="text-secondary-on-background">
                      Favorable business conditions have allowed startups to secure more
                      fundraising deals compared to last year.
                    </Typography>
                  </div>
                </CardPrimaryAction>

                <ListDivider />

                <CardPrimaryAction>
                  <div style={{ padding: '1rem' }}>
                    <Typography use="headline5" tag="div">
                      Asia's clean energy ambitions
                    </Typography>
                    <Typography use="body1" tag="p" theme="text-secondary-on-background">
                      China plans to invest billions of dollars for the development of over
                      300 clean energy projects in Southeast Asia.
                    </Typography>
                  </div>
                </CardPrimaryAction>

                <ListDivider />

                <CardActions fullBleed>
                  <CardAction>
                    All Business Headlines <Icon use="arrow_forward" />
                  </CardAction>
                </CardActions>
              </Card>
            </GridCell>
            <GridCell span="12">
              <Grid>
                <GridCell span="4">
                  <Card style={{ width: '21rem' }}>
                    <CardPrimaryAction>
                      <CardMedia
                        sixteenByNine
                        style={{
                          backgroundImage:
                            'url(https://material-components-web.appspot.com/images/16-9.jpg)'
                        }}
                      />
                      <div style={{ padding: '0 1rem 1rem 1rem' }}>
                        <Typography use="headline6" tag="h2">
                          Our Changing Planet
                    </Typography>
                        <Typography
                          use="subtitle2"
                          tag="h3"
                          theme="text-secondary-on-background"
                          style={{ marginTop: '-1rem' }}
                        >
                          by Kurt Wagner
                    </Typography>
                        <Typography use="body1" tag="div" theme="text-secondary-on-background">
                          Visit ten places on our planet that are undergoing the biggest changes
                          today.
                    </Typography>
                      </div>
                    </CardPrimaryAction>
                    <CardActions>
                      <CardActionButtons>
                        <CardAction>Read</CardAction>
                        <CardAction>Bookmark</CardAction>
                      </CardActionButtons>
                      <CardActionIcons>
                        <CardAction
                          iconToggle
                          on={{ label: 'Remove from favorites', content: 'favorite' }}
                          off={{ label: 'Add to favorites', content: 'favorite_border' }}
                        />
                        <CardAction icon use="share" />
                        <CardAction icon use="more_vert" />
                      </CardActionIcons>
                    </CardActions>
                  </Card>
                </GridCell>
                <GridCell span="4">
                  <Card style={{ width: '21rem' }}>
                    <CardPrimaryAction>
                      <CardMedia
                        sixteenByNine
                        style={{
                          backgroundImage:
                            'url(https://material-components-web.appspot.com/images/16-9.jpg)'
                        }}
                      />
                      <div style={{ padding: '0 1rem 1rem 1rem' }}>
                        <Typography use="headline6" tag="h2">
                          Our Changing Planet
                    </Typography>
                        <Typography
                          use="subtitle2"
                          tag="h3"
                          theme="text-secondary-on-background"
                          style={{ marginTop: '-1rem' }}
                        >
                          by Kurt Wagner
                    </Typography>
                        <Typography use="body1" tag="div" theme="text-secondary-on-background">
                          Visit ten places on our planet that are undergoing the biggest changes
                          today.
                    </Typography>
                      </div>
                    </CardPrimaryAction>
                    <CardActions>
                      <CardActionButtons>
                        <CardAction>Read</CardAction>
                        <CardAction>Bookmark</CardAction>
                      </CardActionButtons>
                      <CardActionIcons>
                        <CardAction
                          iconToggle
                          on={{ label: 'Remove from favorites', content: 'favorite' }}
                          off={{ label: 'Add to favorites', content: 'favorite_border' }}
                        />
                        <CardAction icon use="share" />
                        <CardAction icon use="more_vert" />
                      </CardActionIcons>
                    </CardActions>
                  </Card>
                </GridCell>
                <GridCell span="4">
                  <Card style={{ width: '21rem' }}>
                    <CardPrimaryAction>
                      <CardMedia
                        sixteenByNine
                        style={{
                          backgroundImage:
                            'url(https://material-components-web.appspot.com/images/16-9.jpg)'
                        }}
                      />
                      <div style={{ padding: '0 1rem 1rem 1rem' }}>
                        <Typography use="headline6" tag="h2">
                          Our Changing Planet
                    </Typography>
                        <Typography
                          use="subtitle2"
                          tag="h3"
                          theme="text-secondary-on-background"
                          style={{ marginTop: '-1rem' }}
                        >
                          by Kurt Wagner
                    </Typography>
                        <Typography use="body1" tag="div" theme="text-secondary-on-background">
                          Visit ten places on our planet that are undergoing the biggest changes
                          today.
                    </Typography>
                      </div>
                    </CardPrimaryAction>
                    <CardActions>
                      <CardActionButtons>
                        <CardAction>Read</CardAction>
                        <CardAction>Bookmark</CardAction>
                      </CardActionButtons>
                      <CardActionIcons>
                        <CardAction
                          iconToggle
                          on={{ label: 'Remove from favorites', content: 'favorite' }}
                          off={{ label: 'Add to favorites', content: 'favorite_border' }}
                        />
                        <CardAction icon use="share" />
                        <CardAction icon use="more_vert" />
                      </CardActionIcons>
                    </CardActions>
                  </Card>
                </GridCell>
              </Grid>
            </GridCell>
          </Grid>  
        </main>
      </div>
    )  
  }

}

export default App;