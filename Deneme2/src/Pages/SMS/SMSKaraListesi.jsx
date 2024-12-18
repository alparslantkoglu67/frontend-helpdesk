import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SMSKaraListesi = () => {
    const [data, setData] = useState([
        // Örnek veri
        { id: 1, telefon: '1234567890', aciklama: 'Açıklama 1', kayitTarihi: '2024-11-01' },
        { id: 2, telefon: '0987654321', aciklama: 'Açıklama 2', kayitTarihi: '2024-11-02' },
        { id: 3, telefon: '68734353', aciklama: 'Açıklama 3', kayitTarihi: '2024-11-01' },
        { id: 4, telefon: '5646546', aciklama: 'Açıklama 4', kayitTarihi: '2024-11-02' },
        { id: 5, telefon: '546456546', aciklama: 'Açıklama 5', kayitTarihi: '2024-11-01' },
        { id: 6, telefon: '09656487654321', aciklama: 'Açıklama 6', kayitTarihi: '2024-11-02' },
        { id: 7, telefon: '1234567890', aciklama: 'Açıklama 7', kayitTarihi: '2024-11-01' },
        { id: 8, telefon: '37378', aciklama: 'Açıklama 8', kayitTarihi: '2024-11-02' },
        // Daha fazla veri ekleyebilirsiniz
    ]);

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="mb-3">


                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="bg-secondary text-light ">#</th>
                            <th className="bg-secondary text-light ">Telefon No</th>
                            <th className="bg-secondary text-light ">Açıklama</th>
                            <th className="bg-secondary text-light ">Kayıt Tarihi</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.telefon}</td>
                                <td>{item.aciklama}</td>
                                <td>{item.kayitTarihi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SMSKaraListesi;
