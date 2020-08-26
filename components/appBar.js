import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'

import Link from 'next/link'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link href="/">
            <a>TomDev</a>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
