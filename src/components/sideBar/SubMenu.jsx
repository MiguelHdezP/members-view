import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background: #c6c6c6;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const NoLink = styled.div`
  display: flex;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background: #c6c6c6;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const DropdownLink = styled(Link)`
  background: #f5f5f5;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 14px;

  &:hover {
    background: #fff;
    cursor: pointer;
  }
`;

const SubMenu = ({ toggleClass, setToggleClassFn, item, id }) => {
  const { path, subNav, icon, title, iconOpened, iconClosed } = item;
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const itemList = (icon, title, subNav, subnav, iconClosed, iconOpened) => {
    return (
      <>
        <div className={toggleClass === id ? "item-active-state" : ""}>
          {icon}
          {title}
        </div>
        <div>{subNav && subnav ? iconOpened : subNav ? iconClosed : null}</div>
      </>
    );
  };

  return (
    <>
      {path.length ? (
        <SidebarLink
          to={path}
          onClick={() => {
            setToggleClassFn(id);
            return subNav && showSubnav;
          }}
          className={toggleClass === id ? "item-active-state" : ""}
        >
          {itemList(icon, title, subNav, subnav, iconClosed, iconOpened)}
        </SidebarLink>
      ) : (
        <NoLink onClick={subNav && showSubnav}>
          {itemList(icon, title, subNav, subnav, iconClosed, iconOpened)}
        </NoLink>
      )}
      {subnav &&
        subNav.map((item, index) => {
          const { path, title, icon } = item;
          return (
            <DropdownLink to={path} key={index}>
              {icon}
              {title}
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
