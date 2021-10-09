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
                            Nós Multimídia 
                        </S.ProjectNameAllow>
                    </Link>
                </S.ProjectRow>

                <S.ProjectRow>
                    <a target="_blank" href="https://colab.research.google.com/drive/1M6iMx0vx2vbGYF4N4u9bNiCqAIP0ChfZ?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectNameAllow> 
                            Vídeo e Animação
                        </S.ProjectNameAllow>
                    </a >
                </S.ProjectRow>

                <S.ProjectRow>
                    <S.ProjectName> 
                        DCT para Imagem
                    </S.ProjectName>
                </S.ProjectRow>

                <S.ProjectRow>
                    <S.ProjectName> 
                        Percepção Auditiva
                    </S.ProjectName> 
                </S.ProjectRow>

                <S.ProjectRow>
                    <S.ProjectName> 
                        PDS para Processamento de Voz
                    </S.ProjectName> 
                </S.ProjectRow>

                <S.ProjectRow>
                    <S.ProjectName> 
                        Codificação de Voz
                    </S.ProjectName> 
                </S.ProjectRow>

                <S.ProjectRow >
                    <S.ProjectName> 
                        Codificação de Áudio
                    </S.ProjectName> 
                </S.ProjectRow>

                <S.ProjectRow>
                    <S.ProjectName> 
                        MIDI e Acústica Básica
                    </S.ProjectName> 
                </S.ProjectRow>
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
