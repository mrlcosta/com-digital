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
                    <Link to="/lab2" className="btn_novo_perfil">
                        <S.ProjectNameAllow> 
                            Lab2 - Captura e Processamento de Imagem e Vídeo 
                        </S.ProjectNameAllow>
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow>
                    <Link to="/lab3" className="btn_novo_perfil">
                            <S.ProjectNameAllow> 
                                Lab 3 - Codificação de Imagem com DCT e Animação Básica
                            </S.ProjectNameAllow>
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow>
                    <Link to="/lab4" className="btn_novo_perfil">
                        <S.ProjectNameAllow> 
                            Lab 4 - Codificação de Imagem com DWT
                        </S.ProjectNameAllow> 
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow>
                    <Link to="/lab5" className="btn_novo_perfil">
                        <S.ProjectNameAllow> 
                            Lab 5 - Percepção Auditiva 
                        </S.ProjectNameAllow> 
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow>
                    <Link to="/lab6" className="btn_novo_perfil">
                        <S.ProjectNameAllow> 
                            LAB 6 - PDS de Voz 
                        </S.ProjectNameAllow> 
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow >
                    <Link to="/lab7" className="btn_novo_perfil">
                        <S.ProjectNameAllow>
                            Lab 7 - Principios de Codificação da Voz
                        </S.ProjectNameAllow> 
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow >
                    <Link to="/lab8" className="btn_novo_perfil">
                        <S.ProjectNameAllow>
                            Lab 8 - Codificação de Áudio
                        </S.ProjectNameAllow> 
                    </Link>
                </S.ProjectRow>


                <S.ProjectRow>
                    <Link to="/lab9" className="btn_novo_perfil">
                        <S.ProjectNameAllow>
                            Lab 9 - MIDI e Respostas Impulsivas
                        </S.ProjectNameAllow> 
                    </Link>
                </S.ProjectRow>
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
