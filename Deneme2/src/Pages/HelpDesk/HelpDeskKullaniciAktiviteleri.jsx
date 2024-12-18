import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpDeskKullaniciAktiviteleri = () => {
    const [data] = useState([
        // Buraya gerçek verilerinizi ekleyin
        { username: 'user1', category: 'Kategori 1', action: 'Eylem 1', date: '2023-01-01' },
        { username: 'user2', category: 'Kategori 2', action: 'Eylem 2', date: '2023-01-02' },
        { username: 'user3', category: 'Kategori 3', action: 'Eylem 3', date: '2023-01-03' },
        // Diğer veriler...
    ]);

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className='text-primary'>Veri Tablosu</h2>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className='bg-secondary text-light '>Kullanıcı Adı</th>
                            <th className='bg-secondary text-light '>Kategori</th>
                            <th className='bg-secondary text-light '>Yapılan İşlem</th>
                            <th className='bg-secondary text-light '>Kayıt Tarihi</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.category}</td>
                                <td>{item.action}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div>
                    <span>Sayfa 1 / 16271 (1627007 öğe)</span>
                </div>

            </div>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item ">
                        <a className="page-link" href="#first">İlk</a>
                    </li>
                    <li className="page-item ">
                        <a className="page-link" href="#before">Önceki</a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#2">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#3">3</a>
                    </li>
                    {/* Daha fazla sayfa numaraları buraya eklenebilir */}
                    <li className="page-item">
                        <a className="page-link" href="#next">Sonraki</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#last">Son</a>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default HelpDeskKullaniciAktiviteleri;
