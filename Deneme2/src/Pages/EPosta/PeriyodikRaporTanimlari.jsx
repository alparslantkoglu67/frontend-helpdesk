import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PeriyodikRaporTanimlari = () => {
    // Örnek veri (gerçek verileri API'den alabilirsiniz)
    const users = [
        {
            id: 1,
            email: 'ornek@example.com',
            description: 'Açıklama örneği',
            registrationDate: '2024-11-04',
            username: 'Kullanıcı1',
            reportType: 'Rapor Tipi 1',
            isActive: 'Evet',
            sendTime: '12:00',
            title: 'Örnek Başlık',
            message: 'Örnek Mesaj',
            timeRange: '1 hafta',
        },
        {
            id: 1,
            email: 'ornek@example.com',
            description: 'Açıklama örneği',
            registrationDate: '2024-11-04',
            username: 'Kullanıcı1',
            reportType: 'Rapor Tipi 1',
            isActive: 'Evet',
            sendTime: '12:00',
            title: 'Örnek Başlık',
            message: 'Örnek Mesaj',
            timeRange: '1 hafta',
        },
        {
            id: 1,
            email: 'ornek@example.com',
            description: 'Açıklama örneği',
            registrationDate: '2024-11-04',
            username: 'Kullanıcı1',
            reportType: 'Rapor Tipi 1',
            isActive: 'Evet',
            sendTime: '12:00',
            title: 'Örnek Başlık',
            message: 'Örnek Mesaj',
            timeRange: '1 hafta',
        },
        {
            id: 1,
            email: 'ornek@example.com',
            description: 'Açıklama örneği',
            registrationDate: '2024-11-04',
            username: 'Kullanıcı1',
            reportType: 'Rapor Tipi 1',
            isActive: 'Evet',
            sendTime: '12:00',
            title: 'Örnek Başlık',
            message: 'Örnek Mesaj',
            timeRange: '1 hafta',
        },
        {
            id: 1,
            email: 'ornek@example.com',
            description: 'Açıklama örneği',
            registrationDate: '2024-11-04',
            username: 'Kullanıcı1',
            reportType: 'Rapor Tipi 1',
            isActive: 'Evet',
            sendTime: '12:00',
            title: 'Örnek Başlık',
            message: 'Örnek Mesaj',
            timeRange: '1 hafta',
        },
        {
            id: 1,
            email: 'ornek@example.com',
            description: 'Açıklama örneği',
            registrationDate: '2024-11-04',
            username: 'Kullanıcı1',
            reportType: 'Rapor Tipi 1',
            isActive: 'Evet',
            sendTime: '12:00',
            title: 'Örnek Başlık',
            message: 'Örnek Mesaj',
            timeRange: '1 hafta',
        },
        {
            id: 1,
            email: 'ornek@example.com',
            description: 'Açıklama örneği',
            registrationDate: '2024-11-04',
            username: 'Kullanıcı1',
            reportType: 'Rapor Tipi 1',
            isActive: 'Evet',
            sendTime: '12:00',
            title: 'Örnek Başlık',
            message: 'Örnek Mesaj',
            timeRange: '1 hafta',
        },
        // Diğer kullanıcı verileri burada tanımlanabilir
    ];

    return (

        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-end mb-3">
                <button type="button" className="btn btn-primary">Yeni Ekle</button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered" id="grid">
                    <thead className="table-light">
                        <tr>
                            <th className="bg-secondary text-light ">#</th>
                            <th className="bg-secondary text-light ">E-Posta</th>
                            <th className="bg-secondary text-light  ">Açıklama</th>
                            <th className="bg-secondary text-light  ">Kayıt Tarihi</th>
                            <th className="bg-secondary text-light  ">Kullanıcı Adı</th>
                            <th className="bg-secondary text-light  ">Rapor Tipi</th>
                            <th className="bg-secondary text-light  ">Aktif</th>
                            <th className="bg-secondary text-light ">Gönderme Zamanı</th>
                            <th className="bg-secondary text-light ">Başlık</th>
                            <th className="bg-secondary text-light  ">Mesaj</th>
                            <th className="bg-secondary text-light ">Zaman Aralığı</th>
                            <th className="bg-secondary text-light ">PDF Rapor</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.description}</td>
                                <td>{user.registrationDate}</td>
                                <td>{user.username}</td>
                                <td>{user.reportType}</td>
                                <td>{user.isActive}</td>
                                <td>{user.sendTime}</td>
                                <td>{user.title}</td>
                                <td>{user.message}</td>
                                <td>{user.timeRange}</td>
                                <td>
                                    <button className="btn btn-success btn-sm">İndir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default PeriyodikRaporTanimlari;
