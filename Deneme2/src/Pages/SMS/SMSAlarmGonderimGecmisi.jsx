import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SMSAlarmGonderimGecmisi = () => {
    return (
        <div>

            <div className="d-flex flex-column justify-content-center align-items-center" >

                <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '2rem' }}>
                    <div className="row mb-3" >
                        <div className="col" >
                            <h5>Başlangıç ve Bitiş Tarihleri ile Telefon Numarası Ara</h5>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-4 mb-3" >
                            <label htmlFor="startDate">Başlangıç Tarihi</label>
                            <input type="date" className="form-control" id="startDate" defaultValue="2024-11-03" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="endDate">Bitiş Tarihi</label>
                            <input type="date" className="form-control" id="endDate" defaultValue="2024-11-04" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="phoneNumber">Telefon Numarası</label>
                            <input type="tel" className="form-control" id="phoneNumber" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '200px' }}>Ara</button>

                    <br /><br />

                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th className='bg-secondary text-light '>Operatör</th>
                                <th className='bg-secondary text-light '>GSM Telefon No</th>
                                <th className='bg-secondary text-light '>Mesaj</th>
                                <th className='bg-secondary text-light '>Kaydeden</th>
                                <th className='bg-secondary text-light '>Kayıt Tarihi</th>
                                <th className='bg-secondary text-light '>İşlem Tarihi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Örnek satırlar, gerçek verilerle değiştirilmelidir */}
                            <tr>
                                <td>Örnek Operatör</td>
                                <td>+90 555 555 55 55</td>
                                <td>Örnek Mesaj</td>
                                <td>Alparslan Türkoğlu</td>
                                <td>2024-11-01</td>
                                <td>2024-11-02</td>
                            </tr>
                            {/* Diğer satırları burada listele */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SMSAlarmGonderimGecmisi;
