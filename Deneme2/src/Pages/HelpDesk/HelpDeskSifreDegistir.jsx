import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HelpDeskSifreDegistir = () => {
    const [oldPassword1, setOldPassword1] = useState('');
    const [oldPassword2, setOldPassword2] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Şifrelerin kontrolü
        if (oldPassword1 !== oldPassword2) {
            setMessage('Şifreler eşleşmiyor!');
        } else {
            setMessage('Şifreler doğru şekilde girildi.'); // Burada şifre doğrulama işlemleri yapılabilir
        }
    };

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-header text-center bg-secondary text-white">
                                <strong>Kullanıcı Şifresi Girişi</strong>
                            </div>
                            <div className="card-body">
                                {message && <span className="text-danger d-block mb-3">{message}</span>}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="OldUserCode1" className="form-label">Şifre</label>
                                        <input
                                            name="OldUserCode1"
                                            type="password"
                                            id="OldUserCode1"
                                            className="form-control"
                                            value={oldPassword1}
                                            onChange={(e) => setOldPassword1(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="OldUserCode2" className="form-label">Şifre 2</label>
                                        <input
                                            name="OldUserCode2"
                                            type="password"
                                            id="OldUserCode2"
                                            className="form-control"
                                            value={oldPassword2}
                                            onChange={(e) => setOldPassword2(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" name="btnOldUserCodesOK" className="btn btn-primary">Tamam</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpDeskSifreDegistir;
