import React from 'react';
import './TableTe.css';

import editPen from "../../../assets/images/edit-pen.svg";
import trashCan from "../../../assets/images/trash-delete.svg";


const TableTe = ({ dados , fnUpdate, fnDelete }) => {
    return (
        <table className='table-data'>
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">Evento</th>
                    <th className="table-data__head-title table-data__head-title--big">Descrição</th>
                    <th className="table-data__head-title table-data__head-title--big">Tipo de evento</th>
                    <th className="table-data__head-title table-data__head-title--big">Data</th>
                    <th className="table-data__head-title table-data__head-title--little">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletar</th>
                </tr>
            </thead>



            <tbody>

                {dados.map((te) => {
                    return (
                        <tr className="table-data__head-row">
                            <td className="table-data__data table-data__data--big">
                                <th className="table-data__data--element">{te.nomeEvento}</th>
                                <th className="table-data__data--element">{te.descricao} </th>
                                <th className="table-data__data--element">{te.tiposEvento.titulo}</th>
                                <th className="table-data__data--element">{new Date(te.dataEvento).toLocaleDateString()}</th>
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={editPen} alt="" onClick={() => {
                                    fnUpdate(te.idEvento);
                                }}
                                />
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img className="table-data__icon" src={trashCan} alt="" onClick={() => {
                                    fnDelete(te.idEvento);
                                }} />
                            </td>
                        </tr>
                    )
                })}


            </tbody>
        </table>
    );
};

export default TableTe;