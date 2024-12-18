import React, { useState } from 'react';

const SunucuLoglari = () => {
    const [startDate, setStartDate] = useState('04.11.2024');
    const [endDate, setEndDate] = useState('04.11.2024');
    const [selectedServer, setSelectedServer] = useState('arvento11');

    const handleServerChange = (event) => {
        setSelectedServer(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const users = [
        {
            username: 'User1',
            ip: '192.168.1.1',
            deviceNo: 'Device1',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-11-01 12:00:00 GMT',

        },
        {
            username: 'User2',
            ip: '192.168.3.2',
            deviceNo: 'Device2',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-12-01 09:55:23 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },
        {
            username: 'User3',
            ip: '192.168.3.3',
            deviceNo: 'Device3',
            action: 'Login',
            description: 'User logged in successfully',
            registrationDate: '2024-05-09 03:09:59 GMT',

        },

        // Diğer kullanıcılar burada...
    ];

    return (


        <div className="d-flex flex-column justify-content-center align-items-center">

            <div className="p-4" >

                <table className="table" style={{ marginBottom: '-1rem', border: 'none' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <tbody >
                            <tr style={{ border: 'none' }}>
                                <td style={{ border: 'none' }}>
                                    <select
                                        name="DropDownListServer"
                                        value={selectedServer}
                                        onChange={handleServerChange}
                                        className="form-select"
                                        style={{ marginTop: '5px' }}
                                    >
                                        <option value="config">config</option>
                                        <option value="arvento1">arvento1</option>
                                        <option value="arvento11" selected>
                                            arvento11
                                        </option>
                                    </select>
                                </td>
                                <td >
                                    <table style={{ border: 'none' }}>
                                        <tbody >
                                            <tr >
                                                <td style={{ border: 'none' }}><div >Başlangıç Tarihi :</div></td>
                                                <td style={{ border: 'none' }}>
                                                    <input
                                                        type="text"
                                                        value={startDate}
                                                        readOnly
                                                        onClick={() => alert('Tarih Seçici Açılacak')} // Tarih seçici eklenebilir
                                                        className="form-control"


                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        onClick={() => alert('Tarih Seçici Açılacak')}

                                                    // Tarih seçici eklenebilir
                                                    >
                                                        ...
                                                    </button>
                                                </td>
                                                <td style={{ border: 'none' }}>Bitiş Tarihi :</td>
                                                <td style={{ border: 'none' }}>
                                                    <input
                                                        type="text"
                                                        value={startDate}
                                                        readOnly
                                                        onClick={() => alert('Tarih Seçici Açılacak')} // Tarih seçici eklenebilir
                                                        className="form-control"


                                                    />
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        onClick={() => alert('Tarih Seçici Açılacak')}

                                                    // Tarih seçici eklenebilir
                                                    >
                                                        ...
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                </table>

            </div>
            <div className="card bg-primary text-light mb-4 mt-2">
                <h3>Kullanıcı Bilgileri</h3>
            </div>

            <table className="table table-bordered table-striped">
                <thead className="thead-primary">
                    <tr>
                        <th className="bg-secondary text-light">Kullanıcı Adı</th>
                        <th className="bg-secondary text-light">IP</th>
                        <th className="bg-secondary text-light">Cihaz No</th>
                        <th className="bg-secondary text-light">İşlem</th>
                        <th className="bg-secondary text-light">Açıklama</th>
                        <th className="bg-secondary text-light">Kayıt Tarihi (GMT)</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.ip}</td>
                            <td>{user.deviceNo}</td>
                            <td>{user.action}</td>
                            <td>{user.description}</td>
                            <td>{user.registrationDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default SunucuLoglari;
