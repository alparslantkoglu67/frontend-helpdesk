import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SMSAlarmTanimlari = () => {
    const [operatorNo, setOperatorNo] = useState('');
    const [deviceNo, setDeviceNo] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [serverName, setServerName] = useState('arvento1');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form gönderim işlemleri
        console.log({ operatorNo, deviceNo, startDate, endDate, serverName });
    };

    return (
        <div>


            <div className="container mt-4 bg-light" style={{ width: '500px' }}>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="operatorNo" className="form-label text-dark" >
                            Telefon No / Operator No:<span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="operatorNo"
                            value={operatorNo}
                            onChange={(e) => setOperatorNo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deviceNo" className="form-label text-dark">
                            Cihaz No / Device No:<span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="deviceNo"
                            value={deviceNo}
                            onChange={(e) => setDeviceNo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="startDate" className="form-label text-dark">
                            Başlangıç Tarihi / Start Date:<span className="text-danger">*</span>
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="endDate" className="form-label text-dark">
                            Bitiş Tarihi / End Date:<span className="text-danger">*</span>
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-dark">
                            Sunucu Adı / Server Name:
                        </label>
                        <div>
                            <div className="form-check text-dark">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="serverName"
                                    id="configServer"
                                    value="config"
                                    checked={serverName === 'config'}
                                    onChange={() => setServerName('config')}
                                    style={{ marginLeft: '5rem' }}
                                />
                                <label className="form-check-label" htmlFor="configServer" style={{ marginRight: '8rem' }}>
                                    config
                                </label>
                            </div>
                            <div className="form-check text-dark">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="serverName"
                                    id="anotherServer"
                                    value="anotherServer"
                                    checked={serverName === 'anotherServer'}
                                    onChange={() => setServerName('anotherServer')}
                                    style={{ marginLeft: '5rem' }}
                                />
                                <label className="form-check-label " htmlFor="anotherServer" style={{ marginRight: '8rem' }}>
                                    anotherServer
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sorgula/Query</button>
                </form>
            </div>
        </div>
    );
};

export default SMSAlarmTanimlari;
