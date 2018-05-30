import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions'
import Link from '../components/Link/Link';

import '@material/textfield/dist/mdc.textfield.min.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';
import { TextField } from 'rmwc/TextField';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle
} from 'rmwc/TopAppBar';

const Login = ({ dispatch }) => {
  return (
    <div>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarNavigationIcon use="menu" />
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>

      {/* Fully Featured Example */}
      {/* <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon use="menu" />
            <TopAppBarTitle>Title</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem aria-label="Download" alt="Download">
              file_download
            </TopAppBarActionItem>
            <TopAppBarActionItem
              aria-label="Print this page"
              alt="Print this page"
            >
              print
            </TopAppBarActionItem>
            <TopAppBarActionItem
              aria-label="Bookmark this page"
              alt="Bookmark this page"
            >
              bookmark
            </TopAppBarActionItem>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar> */}
    </div>
  )
}

export default connect()(Login)