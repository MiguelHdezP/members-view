import React, { useState } from "react";
import "./Sidebar.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SideBarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  float: left;
`;

const NavIcon = styled(Link)`
  font-size: 1rem;
}
`;

const SidebarNav = styled.nav`
  background: #e7e7e7;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [toggleClass, setToggleClass] = useState(0);
  const showSidebar = () => setSidebar(!sidebar);

  const setToggleClassFn = (num) => {
    setToggleClass(num);
  };

  return (
    <>
      <IconContext.Provider value={{ className: "sidebar-icons" }}>
        <Nav>
          <NavIcon to="#">
            <BsFillGearFill onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu
                  item={item}
                  key={index}
                  toggleClass={toggleClass}
                  setToggleClassFn={setToggleClassFn}
                  id={item.id}
                />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
