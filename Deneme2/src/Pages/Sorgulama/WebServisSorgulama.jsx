import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const WebServisSorgulama = () => {
    const [username, setUsername] = useState('');
    const [queryResult, setQueryResult] = useState(null);
    const [queryMade, setQueryMade] = useState(false);

    const handleQueryClick = () => {
        // Burada API'den kullanıcı sorgulama işlemi yapılabilir.
        setQueryMade(true);
        setQueryResult({
            status: 'Aktif',
            controlResult: 'Başarılı'
        });
    };

    const handleNewQueryClick = () => {
        setUsername('');
        setQueryResult(null);
        setQueryMade(false);
    };

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">

                <div style={{ width: '70%', border: '2px solid #D7D4D4', padding: '18px', borderRadius: '10px', }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="usernameTextBox">

                            <Form.Control
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Kullanıcı Adı"

                            />
                        </Form.Group>

                        <div className="d-flex">
                            <Button variant="primary" onClick={handleQueryClick} disabled={!username} style={{ marginRight: '1rem' }}>
                                Sorgula
                            </Button>
                            {queryMade && (
                                <Button variant="secondary" onClick={handleNewQueryClick} className="ml-3">
                                    Yeni Sorgulama
                                </Button>
                            )}
                        </div>
                    </Form>

                    {queryResult && (
                        <div className="d-flex flex-column justify-content-center align-items-center mt-4 ">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={{ background: 'green', color: 'ghostwhite' }}>Durum</th>
                                        <th style={{ background: 'orange', color: 'black' }}>Kontrol Sonucu</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr >
                                        <td style={{ fontWeight: 'bold', color: 'green', }}>{queryResult.status}</td>
                                        <td style={{ fontWeight: 'bold', color: 'orange', }}>{queryResult.controlResult}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WebServisSorgulama;
