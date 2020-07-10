import styled from "styled-components";
import Link from "next/link";

const ToolbarContainer = styled.div`
  background-color: #222;
  height: 80px;
  color: #ccc;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ToolbarContent = styled.div`
  display: flex;
  width: 960px;
  align-items: center;
`;

const ToolbarLink = styled.div`
  margin-right: 25px;
  text-decoration: none;
  cursor: pointer;
`;

export default function Toolbar() {
  return (
    <ToolbarContainer>
      <ToolbarContent>
        <Link href="/">
          <ToolbarLink>SW:CCG DB</ToolbarLink>
        </Link>
        <Link href="/my-decks">
          <ToolbarLink>My decks</ToolbarLink>
        </Link>
        <Link href="/decklists">
          <ToolbarLink>Decklists</ToolbarLink>
        </Link>
        <Link href="/cards">
          <ToolbarLink>Cards</ToolbarLink>
        </Link>
      </ToolbarContent>
    </ToolbarContainer>
  );
}
