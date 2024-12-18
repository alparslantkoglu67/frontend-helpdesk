import React from 'react';

const BildirimFormu = () => {
    const handleDetachNotification = () => {
        // Sökme bildirimini işlemek için buraya kod ekleyin
        alert('Sökme Bildirimi butonuna tıklandı.');
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ marginleft: '-30rem', marginBottom: '100px' }}>
            <form className="NotificationForm dx-form dx-widget text-center" id="NotificationForm" role="form">
                <div className="dx-layout-manager dx-widget">
                    <div className="dx-widget dx-collection dx-responsivebox-screen-lg dx-responsivebox" style={{ width: '100%', height: '100%' }}>
                        <div className="dx-box-flex dx-box dx-widget" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'stretch' }}>

                            {/* Plaka Girişi */}
                            <div className="dx-item dx-box-item" style={{ display: 'flex', flexGrow: 1 }}>
                                <div className="dx-item-content" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="dx-field-item-label" htmlFor="licensePlate">
                                        Plaka:<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="licensePlate"
                                        name="LicensePlate"
                                        required
                                        autoComplete="off"
                                        style={{ width: '400px' }} // Genişlik ayarı
                                    />
                                </div>
                            </div>

                            {/* Cihaz No Girişi */}
                            <div className="dx-item dx-box-item" style={{ display: 'flex', flexGrow: 1 }}>
                                <div className="dx-item-content" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="dx-field-item-label" htmlFor="deviceNo">
                                        Cihaz No:<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="deviceNo"
                                        name="Node"
                                        required
                                        autoComplete="off"
                                        style={{ width: '400px' }} // Genişlik ayarı
                                    />
                                </div>
                            </div>

                            {/* Şirket Adı Girişi */}
                            <div className="dx-item dx-box-item" style={{ display: 'flex', flexGrow: 1 }}>
                                <div className="dx-item-content" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="dx-field-item-label" htmlFor="companyName">
                                        Şirket Adı:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="companyName"
                                        name="tn"
                                        autoComplete="off"
                                        style={{ width: '400px' }} // Genişlik ayarı
                                    />
                                </div>
                            </div>

                            {/* Şehir Girişi */}
                            <div className="dx-item dx-box-item" style={{ display: 'flex', flexGrow: 1 }}>
                                <div className="dx-item-content" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="dx-field-item-label" htmlFor="city">
                                        Şehir:<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="City"
                                        required
                                        autoComplete="off"
                                        style={{ width: '400px' }} // Genişlik ayarı
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="NotificationButtonGroup" id="NotificationButtonGroup" style={{ width: '200px', }}>
                <button
                    type="button"
                    className="btn btn-primary"
                    id="DetachButton"
                    onClick={handleDetachNotification}
                >
                    Sökme Bildirimi
                </button>
                <div id="popup"></div>
            </div>
        </div>
    );
};

export default BildirimFormu;
