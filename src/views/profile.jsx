import { Container, Row, Col } from "react-bootstrap"

export const Profile = () => {
    return (
        <>
            <Container className="homeContainer">
                <Row>

                    {/* Main content area */}
                    <Col md={9}>
                        {/* Search Pane */}
                            Prince
                        {/* Left content area */}
                    </Col>

                    {/* Right content area */}
                    <Col md={3}>
                        {/* Right content goes here */}
                        RightContent
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Profile;