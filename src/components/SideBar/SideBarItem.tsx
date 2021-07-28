import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";

export function SideBarItem() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavItem title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
      </NavItem>
      <NavItem title="AUTOMAÇÃO">
        <NavLink icon={RiDashboardLine} href="/form">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Automação
        </NavLink>
      </NavItem>
    </Stack>
  );
}
