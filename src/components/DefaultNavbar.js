import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class DefaultNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Youtube TV</NavbarBrand>
                    <Collapse isOpen={true} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#news">News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#favorite">Favorite</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}