import React from 'react'

export const Bank = () => {
    return (
        <div className="container">

            <img src={process.env.PUBLIC_URL + '/image/profile.svg'} height="90vh"></img>
            <h1>Josué Beltrán</h1>
            <div className="contenedores">
                <div className="row">
                    <div className="col-3">
                        <div className="icon-peso">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199zm-8.999-.65A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 1 0 .286-.958A7.601 7.601 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962zM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="col">
                        <div className="dinero-valor">
                            <h4>Saldo Actual</h4>
                            <h1>$50.000</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedores">
                <div className="row">
                    <div className="col-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-flag-fill" viewBox="0 0 16 16">
                            <path
                                d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                        </svg>
                    </div>
                    <div className="col">
                        <h4>Meta: $120.000</h4>
                    </div>
                </div>
            </div>
            
            <button className="btn btn-light nequi" onClick={()=> window.open(`LTaAPaYaOiYMRpmqUJmvsAvg01KVrtEqtzGSUQ6HcOwcHTOpJrulZ6JyS32b`)}>
                <img src={process.env.PUBLIC_URL + '/image/nequi.png'} height="40vh"></img>
                Abona con <b className='nequib'>NEQUI</b>
            </button>
        </div>
    )
}
