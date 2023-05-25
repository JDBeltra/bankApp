import React from 'react'

export const Historial = () => {
    return (
        <div className="container">
            <div className="historia md-3">
                <div className="fecha">** 2022-06-12 **</div>
                <div className="contenedores">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Inscripcion Inicial</p>
                        <h4>$20.000</h4>
                    </div>
                </div>
            </div>
            <div className="historia md-3">
                <div className="fecha">** 2022-06-12 **</div>
                <div className="contenedores">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Recibido por Banco - Elizabeth Beltran</p>
                        <h4>$20.000</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

