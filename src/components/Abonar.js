import React from 'react';

export const Abonar= () => {
    return (
        <div className="container">
            <div className="contenedores">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-describedby="button-search"
                        style={{ backgroundColor: '#302d57', border: 'none', color: '#fff' }} placeholder="Documento" />
                    <button className="btn btn-outline-info" type="button" id="button-search"
                        style={{ borderTopRightRadius: '13px', borderBottomRightRadius: '13px' }}>Buscar</button>
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" aria-describedby="button-search"
                        style={{ backgroundColor: '#302d57', border: 'none', color: '#fff' }} placeholder="Valor del Abono" />
                    <button className="btn btn-primary d-md-block"
                        style={{ borderTopRightRadius: '13px', borderBottomRightRadius: '13px', backgroundColor: '#fa457b', border: 'none' }}>
                        <b>Abonar</b>
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <h3>
                    Abonados
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-wallet2"
                        viewBox="0 0 16 16">
                        <path
                            d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                    </svg>
                </h3>
                <div className="carta">
                    <div className="abonados">
                        <table className="table table-borderless table-sm">
                            <tbody>
                                <tr>
                                    <td><p style={{ lineHeight: '1' }}>Josue David Beltran Beltran</p></td>
                                    <td> <p className="rosa">** 2023-06-12 **</p></td>
                                    <td><p>$20.000</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4 className="total">Acumulado: <b>$ 170.000</b></h4>
                </div>
            </div>
        </div>
    );
};