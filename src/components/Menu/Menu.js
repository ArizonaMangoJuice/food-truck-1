import React from "react";

const MenuCard = ({title, img}) => {
    return (
        <section className="menu-card">
            <img className="menu-icon" src={require(`../../images/${img}`)} alt="" />
            <h2 className="menu-title">{title}</h2>
        </section>
    );
};

const Menu = () => {

  const menu = [
    <MenuCard title='Lorem Ipsum' img='logo.png'/>,
    <MenuCard title='Lorem Ipsum' img='logo.png'/>,
    <MenuCard title='Lorem Ipsum' img='logo.png'/>,
  ];


  return <section className="menu">{menu}</section>;
};

export default Menu;
