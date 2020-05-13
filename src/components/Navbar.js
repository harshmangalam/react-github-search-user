import React from "react";
import { Menu, Segment,Header,Icon } from "semantic-ui-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = React.useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu pointing secondary size="massive" color="pink">
        <Menu.Item>
          <Header as="h2">
            <Icon name="github" />
            <Header.Content>Github User Data</Header.Content>
          </Header>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
