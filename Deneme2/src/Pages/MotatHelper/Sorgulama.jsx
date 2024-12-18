import React, { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

const Sorgulama = () => {
    const [searchType, setSearchType] = useState('Plaka'); // Search type state
    const [searchText, setSearchText] = useState(''); // Search input text

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value); // Update search type when radio button changes
    };

    const handleSearch = () => {
        // Search action logic
        console.log(`Searching for ${searchType}: ${searchText}`);
    };

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">

                {/* Radio Buttons for Search Type */}
                <Form>
                    <div className="d-flex align-items-center" >
                        <Form.Check
                            type="radio"
                            label="IMEI"
                            name="searchType"
                            value="IMEI"
                            checked={searchType === 'IMEI'}
                            onChange={handleSearchTypeChange}
                            className="mr-2"
                            style={{
                                marginRight: '2rem',
                            }}
                        />
                        <Form.Check
                            type="radio"
                            label="Plaka"
                            name="searchType"
                            value="Plaka"
                            checked={searchType === 'Plaka'}
                            onChange={handleSearchTypeChange}
                            className="mr-2"
                        />
                    </div>
                </Form>

                {/* Search Input Field */}
                <div className="searchField">
                    <div className="searchTypeText" >{searchType}</div>
                    <InputGroup className="mb-3" >
                        <FormControl
                            placeholder={`${searchType}'ya göre ara.`}
                            aria-label={searchType}
                            aria-describedby="search-button"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <Button
                            variant="primary"
                            id="search-button"
                            onClick={handleSearch}
                        >
                            Sorgula
                        </Button>
                    </InputGroup>
                </div>
            </div >
        </div>
    );
};

export default Sorgulama;
