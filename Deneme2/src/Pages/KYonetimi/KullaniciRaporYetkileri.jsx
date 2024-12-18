import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const KullaniciRaporYetkileri = () => {
    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">
                <Row>
                    <Col id="td2" style={{ borderRight: '#D7D4D4 0px solid' }}>
                        <div className="border border-secondary p-3 mb-3" style={{ marginLeft: '20px', marginRight: '25px' }}>
                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3" style={{ fontWeight: 700 }}>
                                        Kullanıcı Adı:
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Kullanıcı Adı"

                                            className="dx-texteditor-input"
                                        />
                                    </Col>
                                    <Col sm="4" >
                                        <Button id="queryButton" variant="primary" style={{ marginTop: '-0.1rem' }} >
                                            Sorgula
                                        </Button>
                                        <Button className="btn btn-secondary" id="newQueryButton" variant="primary" >
                                            Yeni Sorgulama
                                        </Button>
                                    </Col>
                                    <Form.Text className="text-muted" style={{ fontWeight: 'bold' }}>
                                        Kullanıcı adı bulundu.
                                    </Form.Text>
                                    <Form.Text id="controlResult" style={{ fontWeight: 'bold', color: 'red', marginLeft: '8px' }}>
                                        {/* Error message can go here */}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="3" style={{ fontWeight: 700 }}>
                                        Raporlar:
                                    </Form.Label>
                                    <Col sm="5">
                                        <Form.Control as="select" multiple style={{ height: '100px' }} className="dx-texteditor-input">
                                            {/* Options can be mapped here */}
                                            <option value="report1">Rapor 1</option>
                                            <option value="report2">Rapor 2</option>
                                        </Form.Control>
                                    </Col>
                                    <Col sm="4">
                                        <Button className="btn btn-primary" id="reportRightSaveButton" variant="primary">
                                            Kaydet
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>

                        <div className="demo-container">
                            <div id="data-grid-demo">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'center' }} className="bg-secondary text-light  ">
                                                <input type="checkbox" />
                                            </th>
                                            <th className="bg-secondary text-light ">Kullanıcı Adı</th>
                                            <th className="bg-secondary text-light  ">Rapor Adı</th>
                                            <th className="bg-secondary text-light  ">Kaydeden</th>
                                            <th className="bg-secondary text-light  ">Tarih</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {/* Sample data, should be dynamically rendered */}
                                        <tr>
                                            <td style={{ textAlign: 'center' }}><input type="checkbox" /></td>
                                            <td>erkan.yildirim</td>
                                            <td>Boş-Dolu Bilgi Raporu</td>
                                            <td>SYSTEM</td>
                                            <td>6/4/2018, 7:42 AM</td>
                                        </tr>
                                        <tr>
                                            <td style={{ textAlign: 'center' }}><input type="checkbox" /></td>
                                            <td>erkan.yildirim</td>
                                            <td>Bölge İçi Mesafe</td>
                                            <td>SYSTEM</td>
                                            <td>11/22/2021, 6:50 AM</td>
                                        </tr>
                                        {/* Add more rows as needed */}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default KullaniciRaporYetkileri;
