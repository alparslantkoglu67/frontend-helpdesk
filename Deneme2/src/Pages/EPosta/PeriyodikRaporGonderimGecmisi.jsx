import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // CSS dosyanızı buraya dahil edin

const PeriyodikRaporGonderimGecmisi = () => {
    const [startDate, setStartDate] = useState("03.11.2024");
    const [endDate, setEndDate] = useState("04.11.2024");
    const [selectedServer, setSelectedServer] = useState("arvento11");

    const servers = ["config", "arvento1", "arvento11"];
    const usersData = [
        { username: 'user1', email: 'user1@example.com', reportType: 'Type1', active: true, registrationDate: '2024-11-01', title: 'Title1', message: 'Message1' },
        { username: 'user2', email: 'user2@example.com', reportType: 'Type2', active: false, registrationDate: '2024-11-02', title: 'Title2', message: 'Message2' },
        { username: 'user1', email: 'user1@example.com', reportType: 'Type1', active: true, registrationDate: '2024-11-01', title: 'Title1', message: 'Message1' },
        { username: 'user2', email: 'user2@example.com', reportType: 'Type2', active: false, registrationDate: '2024-11-02', title: 'Title2', message: 'Message2' },
        { username: 'user1', email: 'user1@example.com', reportType: 'Type1', active: true, registrationDate: '2024-11-01', title: 'Title1', message: 'Message1' },
        { username: 'user2', email: 'user2@example.com', reportType: 'Type2', active: false, registrationDate: '2024-11-02', title: 'Title2', message: 'Message2' },
        { username: 'user1', email: 'user1@example.com', reportType: 'Type1', active: true, registrationDate: '2024-11-01', title: 'Title1', message: 'Message1' },
        { username: 'user2', email: 'user2@example.com', reportType: 'Type2', active: false, registrationDate: '2024-11-02', title: 'Title2', message: 'Message2' },
        // Diğer kullanıcı verileri burada yer alabilir...
    ];

    return (

        <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '2rem' }}>
            <div className="row mb-3">
                <div className="col">
                    <select className="form-select" value={selectedServer} onChange={(e) => setSelectedServer(e.target.value)}>
                        {servers.map((server, index) => (
                            <option key={index} value={server}>{server}</option>
                        ))}
                    </select>
                </div>
                <div className="col" style={{ marginTop: '-1.5rem' }}>
                    <div className="row">
                        <div className="col">
                            <label>Başlangıç Tarihi</label>
                            <input
                                type="text"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="form-control"
                                readOnly
                            />
                        </div>
                        <div className="col">
                            <label>Bitiş Tarihi</label>
                            <input
                                type="text"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="form-control"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>

            <table className="table table-striped text-center custom-table">
                <thead>
                    <tr>
                        <th className="bg-secondary text-light ">Kullanıcı Adı</th>
                        <th className="bg-secondary text-light ">E-Posta</th>
                        <th className="bg-secondary text-light  ">Rapor Tipi</th>
                        <th className="bg-secondary text-light  ">Aktif</th>
                        <th className="bg-secondary text-light ">Kayıt Tarihi</th>
                        <th className="bg-secondary text-light  ">Başlık</th>
                        <th className="bg-secondary text-light  ">Mesaj</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.reportType}</td>
                            <td>{user.active ? 'Evet' : 'Hayır'}</td>
                            <td>{user.registrationDate}</td>
                            <td>{user.title}</td>
                            <td>{user.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default PeriyodikRaporGonderimGecmisi;
