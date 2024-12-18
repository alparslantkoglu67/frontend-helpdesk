import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css'; // DatePicker için stil
import DatePicker from 'react-datepicker';

const TabletHareketleri = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div>


            <div className="d-flex flex-column justify-content-center align-items-center" >

                <div className="loadpanel">
                    <div className="dx-overlay-content">
                        <div className="dx-loadpanel-content-wrapper">
                            <div className="dx-loadpanel-indicator">
                                <div className="dx-loadindicator-content">
                                    <div className="dx-loadindicator-icon">
                                        {[...Array(8)].map((_, index) => (
                                            <div key={index} className={`dx-loadindicator-segment dx-loadindicator-segment${index}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="dx-loadpanel-message">Yükleniyor</div>
                        </div>
                    </div>
                </div>
                <div id="popup" />
                <div className="logMainSection" id="LogMainSection">
                    <div className="LogFormSection" >
                        <div className="logSearchText">IMEI No</div>
                        <div id="autocompleteContainer" className="autoCompleteLog" style={{ marginBottom: '1rem' }}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="IMEI Ara"
                                autoComplete="off"
                            />
                        </div>
                        <form className="logForm">
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label htmlFor="startdate" className="required">
                                    Başlangıç Tarihi: <span className="text-danger">*</span>
                                </label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="form-control"
                                    placeholderText="Başlangıç Tarihini Seçin"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="enddate" className="required">
                                    Bitiş Tarihi:<span className="text-danger">*</span>
                                </label>
                                <div style={{ marginLeft: '9rem', marginTop: '-2rem' }}>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        className="form-control"
                                        placeholderText="Bitiş Tarihini Seçin"
                                        dateFormat="dd/MM/yyyy"

                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary mt-3">
                                Sorgula
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabletHareketleri;
