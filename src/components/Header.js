import React from 'react'
import { Link as MenuLink } from 'react-router-dom'
import styled from 'styled-components';

const MenuBar = styled.ul`
    list-style:none;
    display:flex;
`
const Menu = styled.li`
    padding:10px;
`
const Link = styled(MenuLink)`
    text-decoration:none;
    padding:5px 20px;
    background:#ccc;
    color:#000;
    border-radius:20px;
    &.active{
      background:#4cca5c;
      color:#fff
    }
`
export function Header() {
  return (
    <MenuBar>
      <Menu>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </Menu>
      <Menu>
        <Link to='/create' activeClassName="active">Create</Link>
      </Menu>
    </MenuBar>
  )
}