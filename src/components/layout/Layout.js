import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../Home";


function Layout() {
	return (
		<Router>
			<Navbar bg="dark" variant="dark" expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand>Recipe Puppy</Navbar.Brand>
				</NavLink>
			</Navbar>
			<Container>
				<Switch>
                    <Route exact path={["/", "/home"]} component={Home} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Layout;
