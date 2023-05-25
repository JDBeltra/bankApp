import React from 'react'

export const Login = () => {
    return (
        <div className="container">
            <img src={process.env.PUBLIC_URL + 'images/login.svg'} style={{ marginBottom: '12px', height: 'calc(100vh - 70vh)' }} />
            <div className="mb-3">
                <input type="text" className="form-control" style={{ backgroundColor: '#302d57', border: 'none', borderRadius: '13px', color: '#fff' }} placeholder="Documento" />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" style={{ backgroundColor: '#302d57', border: 'none', borderRadius: '13px', color: '#fff' }} placeholder="Contraseña" />
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-primary d-md-block" style={{ borderRadius: '20px', backgroundColor: '#fa457b', border: 'none' }}>
                    <b>Entra</b>
                </button>
            </div>
        </div>
    )
}
