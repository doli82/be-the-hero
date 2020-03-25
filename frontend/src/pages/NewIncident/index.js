import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from "../../services/api";

export default function NewIncidend() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(event) {
        event.preventDefault();
        const data = {
            title,
            description,
            value
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastrar o caso, tente novamente.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>                    
                </section>
                <form>
                    <input 
                    value={title}
                    onChange={event => setTitle( event.target.value )}
                    placeholder="Título do Caso" />

                    <textarea 
                    value={description}
                    onChange={event => setDescription( event.target.value )}
                    placeholder="Descrição" />

                    <input 
                    value={value}
                    onChange={event => setValue( event.target.value )}
                    placeholder="Valor em Reais" />

                    <button className="button" type="submit" onClick={handleNewIncident}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}