import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpDeskKullanicilar = () => {
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);

    const handleRowClick = (index) => {
        setSelectedRowIndex(index);
    };

    return (
        <div>

            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="mb-3">
                    <button className="btn btn-primary" id="ButtonNew">
                        Yeni Kayıt
                    </button>
                </div>

                {/* Tablo */}
                <table className="table table-hover" style={{ width: '1000px' }}>
                    <thead className="table-light">
                        <tr>
                            <th className='bg-secondary text-light '>#</th>
                            <th className='bg-secondary text-light '>Kullanıcı Adı</th>
                            <th className='bg-secondary text-light ' >IP</th>
                            <th className='bg-secondary text-light '>Kayıt Tarihi</th>
                            <th className='bg-secondary text-light '>Ana Grup</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {[1, 2, 3, 4, 5].map((item, index) => (

                            <tr key={index}
                                onClick={() => handleRowClick(index)}
                                className={selectedRowIndex === index ? 'table-warning' : 'table-light'}
                                style={{
                                    cursor: 'pointer', // Tıklanabilir olduğunu belirtmek için
                                }}>
                                <td>
                                    {item}
                                </td>
                                <td>
                                    Kullanıcı{item}
                                </td>
                                <td>
                                    192.168.1.{item}
                                </td>
                                <td>
                                    2024-01-0{item}
                                </td>
                                <td>
                                    Grup A
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>

                {/* Sayfalama */}
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <span className="page-link">Önceki</span>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">1</span>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#!">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#!">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#!">Sonraki</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HelpDeskKullanicilar;
