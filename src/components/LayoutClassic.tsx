import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../3s-style.css"
import styled from '@emotion/styled';
import HeaderClassic from '../components/HeaderClassic';
import NavBar from '../components/NavBar';
import ContrastButton from '../components/ContrastButton';
import { OrderList } from '../features/orders/OrderList';
import { UserList } from '../features/users/UserList';
import { FooterClassic } from './FooterClassic';

const ImageLogo = styled.img({
    width: "300px",
    padding: '10px'
});


const LayoutClassic = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ContrastButton />
            <div className="container">
                <HeaderClassic />
                <NavBar />

                <main className="container card p-5">


                    <div className="row g-5">
                        <div className="col-md-8">
                            {children}
                        </div>
                        <div className="col-md-4">
                            <div className="position-sticky">

                                <div className="p-4 mb-3 bg-body-tertiary rounded">
                                    <h4 className="fst-italic">Filtros</h4>
                                    <p className="mb-0">Esta versão do 3s foi reconstruída utilizando o React e o Typescript. Além de estar na esteira de software com deploys automatizado e diversas técnicas e práticas mais recentes do mercado.</p>
                                </div>
                                <div className="p-4 mb-3 bg-body-tertiary rounded">
                                    <h4 className="fst-italic">3s em novas tecnologias</h4>
                                    <p className="mb-0">Esta versão do 3s foi reconstruída utilizando o React e o Typescript. Além de estar na esteira de software com deploys automatizado e diversas técnicas e práticas mais recentes do mercado.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>
            </div>

            <FooterClassic />


        </>
    )
}

export { LayoutClassic };
