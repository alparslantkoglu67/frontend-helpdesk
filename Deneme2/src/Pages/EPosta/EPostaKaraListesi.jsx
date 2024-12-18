import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EPostaKaraListesi = () => {
    const [kayitlar, setKayitlar] = useState([
        { id: 1, email: 'example1@example.com', aciklama: 'Açıklama 1', tarih: new Date().toLocaleString() },
        { id: 2, email: 'example2@example.com', aciklama: 'Açıklama 2', tarih: new Date().toLocaleString() },
        // Diğer kayıtlar burada...
    ]);

    const handleYeniKayit = () => {
        // Yeni kayıt eklemek için bir fonksiyon
        // Örnek: setKayitlar([...kayitlar, yeniKayit]);
        console.log("Yeni kayıt ekle butonuna basıldı.");
    };

    return (


        <div className="d-flex flex-column justify-content-center align-items-center">
            <Button variant="primary" onClick={handleYeniKayit} className="mb-3" style={{ width: '200px' }}>
                Yeni Kayıt Ekle
            </Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="bg-secondary text-light ">#</th>
                        <th className="bg-secondary text-light  ">E-Posta</th>
                        <th className="bg-secondary text-light ">Açıklama</th>
                        <th className="bg-secondary text-light ">Kayıt Tarihi</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {kayitlar.map((kayit) => (
                        <tr key={kayit.id}>
                            <td>{kayit.id}</td>
                            <td>{kayit.email}</td>
                            <td>{kayit.aciklama}</td>
                            <td>{kayit.tarih}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    );
};

export default EPostaKaraListesi;
