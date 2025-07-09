import { Container, Row, Col } from "react-bootstrap"
import React from "react";
import { MyProfile } from "./Profile/MyProfile";
import Advertisment from './Home/Components/Advertisment'
export const Profile = () => {
    return (
        <>
            <Container className="homeContainer">
                <Row>

                    {/* Main content area */}
                    <Col md={9}>
                        {/* Search Pane */}
                        <MyProfile/>
                        {/* Left content area */}
                    </Col>

                    {/* Right content area */}
                    <Col md={3}>
                        {/* Right content goes here */}
                        <Advertisment/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Profile;