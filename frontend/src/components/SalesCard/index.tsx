import NotificationButton from "../NotificationButton";
import './styles.css';

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <td className="show992">ID</td>
                            <td className="show576">Data</td>
                            <td>Vendedor</td>
                            <td className="show992">Visitas</td>
                            <td className="show992">Vendas</td>
                            <td>Total</td>
                            <td>Notificar</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Jailson</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Jailson</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 53002,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Jailson</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 4900,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <div className="dsmeta-red-btn">
                                        <NotificationButton/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard;
