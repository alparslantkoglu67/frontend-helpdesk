import React from 'react';

const LoginForm = () => {
    return (


        <form action="#" method="post">
            <div className="form-group mb-3">
                <label htmlFor="username">Kullanıcı Adı</label>
                <input type="text" className="form-control" id="username" name="txtUsername" maxLength="50" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password1">Şifre</label>
                <input type="password" className="form-control" id="password1" name="txtPIN1" maxLength="50" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password2">Şifre 2</label>
                <input type="password" className="form-control" id="password2" name="txtPIN2" maxLength="50" />
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-2">Giriş</button>
            <button type="button" className="btn btn-secondary btn-block" onClick={() => alert('Şifre sıfırlama talebi gönderildi!')}>
                Şifremi Unuttum
            </button>
        </form>

    );
};

export default LoginForm;
