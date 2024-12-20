import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const Navigation = () => {
  const { loginWithRedirect, isAuthenticated , logout} = useAuth0();
  return (
    <Navbar >
    <NavbarBrand>
      <AcmeLogo />
      <p className="font-bold text-inherit" >Foodies</p>
    </NavbarBrand>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <NavLink color="foreground" to="/">
          Home
        </NavLink>
      </NavbarItem>
      <NavbarItem >
        <NavLink aria-current="page" color="foreground" to="/Menu">
          Menu
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink color="foreground" to="/About">
          About
        </NavLink>
      </NavbarItem>
      <NavbarItem>
        <NavLink color="foreground" to="/Contact">
          Contact
        </NavLink>
      </NavbarItem>
      {
        isAuthenticated ? (
          <NavbarItem>
        <NavLink color="foreground" >
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </NavLink>
      </NavbarItem>

        ) :(
          <NavbarItem>
        <NavLink color="foreground" >
        <li onClick={() => loginWithRedirect()}>Log In</li>
        </NavLink>
      </NavbarItem>

        )
      }
      
      
    </NavbarContent>

    {/* <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent> */}
  </Navbar>
  
  )
}

export default Navigation;