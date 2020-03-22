import React from 'react';
import './TopBanner.css';
import { InputGroup, FormControl, Button, Container, Row } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div className="Top-Banner">
            <div className="search-food">
            <h2>Best food waiting for your belly</h2>
            <Container>
                <Row className="justify-content-md-center">
                <InputGroup className="mb-3 search">
                    <FormControl
                        placeholder="Search food item"
                        aria-label="Search food item"
                        aria-describedby="basic-addon2"
                    />
                    
                        <Button className="search-btn">Button</Button>
                    
                </InputGroup>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default TopBanner;