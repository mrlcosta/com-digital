import React from 'react';
import * as S from "./Lab1.styles";
import muriel from '../../assets/muriel.jpg'
import mieri from '../../assets/mieri.jpeg'
import jeff from '../../assets/jeff.jpeg'
import victor from '../../assets/vitor.jpeg'
import audio from '../../assets/audioLab1.ogg'
import video from '../../assets/videoLab1.mp4'
import pdfLab1 from '../../assets/pdfLab1.pdf'
import ReactAudioPlayer from 'react-audio-player';

export default function Lab1() {
 
  return (
    <>
        <S.HeaderContainer>

            <ReactAudioPlayer
            src={audio}
            autoPlay
            controls
            />
            
            <S.Header>
                <S.HeaderTitle>
                    NÓS MULTIMÍDIA
                </S.HeaderTitle>
            </S.Header>

            <S.SectionTeam>
                <S.TeamTitle>
                    Quem somos
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
                    Video da galinha pintadinha live action
                </S.ProjectTitle>
            </S.SectionProject>

            <S.SectionProject>
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </S.SectionProject>

            <S.SectionProject>
                <S.ProjectTitle>
                    Video do youtube
                </S.ProjectTitle>
            </S.SectionProject>

            <S.SectionProject>
                <iframe width="365" height="465px" src="https://www.youtube.com/embed/Omnpu8mzX4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </S.SectionProject>

            <S.ProjectsContainer>
                <S.SectionProject>
                    <S.ProjectTitle>
                        Relatório
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={pdfLab1} width="900" height="700">oi</object>
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
