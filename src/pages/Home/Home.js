import React from 'react';
import * as S from "./Home.styles";
import muriel from '../../assets/muriel.jpg'
import mieri from '../../assets/mieri.jpeg'
import jeff from '../../assets/jeff.jpeg'
import victor from '../../assets/vitor.jpeg'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <S.HeaderContainer>
            <S.Header>
                <S.HeaderTitle>
                    CODIFICAÇÃO DE SINAIS MULTIMÍDIA
                </S.HeaderTitle>
            </S.Header>

            <S.SectionTeam>
                <S.TeamTitle>
                    Nosso time
                </S.TeamTitle>
            </S.SectionTeam>

            <S.PersonalCardContainer>
                <S.PersonalCard>
                    <S.PersonalImg src={muriel}/>
                    <S.CourseTitle>Eng. Informação</S.CourseTitle>
                    <S.PersonalName>Muriel Costa</S.PersonalName>
                    <S.PersonalDescription>
                        Entusiasta da área, articulista do embarcados e desenvolvedor de projetos freelancer.
                    </S.PersonalDescription>
                </S.PersonalCard>

                <S.PersonalCard>
                    <S.PersonalImg src={victor}/>
                    <S.CourseTitle>Eng. Informação</S.CourseTitle>
                    <S.PersonalName>Victor Muniz</S.PersonalName>
                    <S.PersonalDescription>
                        Estudante de engenharia de informação e bacharelado em matemática na UFABC, com ênfase em análise de dados e telecomunicações.
                    </S.PersonalDescription>
                </S.PersonalCard>

                <S.PersonalCard>
                    <S.PersonalImg src={mieri}/>
                    <S.CourseTitle>Eng. Informação</S.CourseTitle>
                    <S.PersonalName>Lucas Mieri</S.PersonalName>
                    <S.PersonalDescription>
                    Experiência em Java, engenharia de software e metodologias ágeis. Interessado em resolução de problemas aplicados ao mercado financeiro. Facilidade para aprender, trabalhar em grupo e se adaptar a novos desafios.
                    </S.PersonalDescription>
                </S.PersonalCard>


                <S.PersonalCard>
                    <S.PersonalImg src={jeff}/>
                    <S.CourseTitle>Eng. Informação</S.CourseTitle>
                    <S.PersonalName>Jefferson Paiva</S.PersonalName>
                    <S.PersonalDescription>
                        Analista de desenvolvimento de automação de processos e relatórios, usando VBA e SAP.
                        conhecimento em elaboração e criação de indicadores, para tomada de gestão da equipe.
                    </S.PersonalDescription>
                </S.PersonalCard>
            </S.PersonalCardContainer>
        </S.HeaderContainer>

        <S.BodyContainer>
            <S.SectionProject>
                <S.ProjectTitle>
                    Projetos
                </S.ProjectTitle>
            </S.SectionProject>

            <S.ProjectsContainer>
                <S.ProjectRow >  
                    <Link to="/lab1" className="btn_novo_perfil">
                        <S.ProjectNameAllow > 
                            lab1 - Nós Multimídia 
                        </S.ProjectNameAllow>
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow>
                    <a target="_blank" href="https://colab.research.google.com/drive/1M6iMx0vx2vbGYF4N4u9bNiCqAIP0ChfZ?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow> 
                            Lab2 - Captura e Processamento de Imagem e Vídeo (abrir com o Colab)
                        </S.ProjectNameAllow>
                    </a >
                </S.ProjectRow>

                <S.ProjectRow>
                    {/* <Link to="/lab2" className="btn_novo_perfil"> */}
                        <a target="_blank" href="https://colab.research.google.com/drive/1SO6druWKfXvf6SQ40Cf0G-ACKHV9V1Fi" className="btn_novo_perfil" rel="noreferrer">
                            <S.ProjectNameAllow> 
                                Lab 3 - Codificação de Imagem com DCT e Animação Básica (abrir com o Colab)
                            </S.ProjectNameAllow>
                        </a>
                    {/* </Link> */}
                </S.ProjectRow>

                <S.ProjectRow>
                    <a target="_blank" href="https://drive.google.com/file/d/1B9V06YxIs9o9rxyvE5_FgawYyTVhVSKj/view?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow> 
                            Lab 4 - Codificação de Imagem com DWT (abrir com o Colab)
                        </S.ProjectNameAllow> 
                    </a>
                </S.ProjectRow>

                <S.ProjectRow>
                    <a target="_blank" href="https://drive.google.com/file/d/1SnVDV74APEpXPDPGoDbLrIy18-1HxdKE/view?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow> 
                            Lab 5 - Percepção Auditiva (abrir com o Colab)
                        </S.ProjectNameAllow> 
                    </a>
                </S.ProjectRow>

                <S.ProjectRow>
                    <a target="_blank" href="https://drive.google.com/file/d/1-H3dK_rhHlAtXbuDRgTMliYZIJ_c-maR/view?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow> 
                            LAB 6 - PDS de Voz (abrir com o Colab)
                        </S.ProjectNameAllow> 
                    </a>
                </S.ProjectRow>

                <S.ProjectRow >
                    <a target="_blank" href="https://colab.research.google.com/drive/1pGzq49sEmKstBpFt1l5wMX0b1A3N-F_V?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow>
                            Lab 7 - Principios de Codificação da Voz
                        </S.ProjectNameAllow> 
                    </a>
                </S.ProjectRow>

                <S.ProjectRow >
                    <a target="_blank" href="https://drive.google.com/file/d/1hfapW_eoUxRCKo1V37VAYP52Q29h8u-f/view" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow>
                            Lab 8 - Codificação de Áudio
                        </S.ProjectNameAllow> 
                    </a>
                </S.ProjectRow>


                <S.ProjectRow>
                    <a target="_blank" href="https://drive.google.com/file/d/1hFcwIUmeq8N7X5e-KO42Tl1TQazF4ezT/view?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow>
                            Lab 9 - MIDI e Respostas Impulsivas (abrir com o Colab)
                        </S.ProjectNameAllow> 
                    </a>
                </S.ProjectRow>
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
