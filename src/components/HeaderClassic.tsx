import styled from '@emotion/styled';
import Logo3s from "../assets/img/logo-3s.png";
import LogoUnilab from "../assets/img/logo-unilab.png";
import { useAppTheme } from "../hooks/useAppTheme";
import { useState, useEffect } from 'react';



const HeaderClassic = ({ isDark = false }: {
    isDark?: boolean;
}) => {
    const [currentTheme, toggleCurrentTheme] = useAppTheme();

    const ImageLogo = styled.img({
        width: "300px",
        padding: '10px'
    });
    const Header = styled.header({
        backgroundColor: isDark ? '#212529' : '#3fa2db'
    });


    return (

        <Header>
            <div className="row">
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center">
                    <a className="text-muted" href="#">
                        <ImageLogo src={Logo3s} alt="Logo 3s" />
                    </a>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 d-flex align-items-end  justify-content-center">
                    <p className="blog-header-logo text-white font-weight-bold"></p>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
                    <a className="text-muted" href="#">
                        <ImageLogo src={LogoUnilab} alt="Logo 3s" />
                    </a>
                </div>
            </div>
        </Header>

    )
}

export default HeaderClassic;
