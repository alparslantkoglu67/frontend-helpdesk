import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EPostaOnayListesi = () => {
    const [kayitlar, setKayitlar] = useState([
        { email: 'example1@example.com', durum: 'Aktif', kaydeden: 'Admin', tarih: new Date().toLocaleString() },
        { email: 'example2@example.com', durum: 'Pasif', kaydeden: 'Admin', tarih: new Date().toLocaleString() },
        // Diğer kayıtlar burada...
    ]);

    return (

        <div className="d-flex flex-column justify-content-center align-items-center">

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="bg-secondary text-light ">E-Posta</th>
                        <th className="bg-secondary text-light ">Durumu</th>
                        <th className="bg-secondary text-light ">Kaydeden</th>
                        <th className="bg-secondary text-light ">Kayıt Tarihi</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {kayitlar.map((kayit, index) => (
                        <tr key={index}>
                            <td>{kayit.email}</td>
                            <td>{kayit.durum}</td>
                            <td>{kayit.kaydeden}</td>
                            <td>{kayit.tarih}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button variant="primary" className="mt-3" style={{ width: '200px' }}>Yeni Kayıt Ekle</Button>
        </div>

    );
};

export default EPostaOnayListesi;
