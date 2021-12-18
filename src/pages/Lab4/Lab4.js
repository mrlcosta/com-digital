import React from 'react';
import * as S from "./Lab4.styles";
import Lab4pdf from '../../assets/Lab4.pdf'
import audioLab4 from '../../assets/audioLab4.mp3'
import ReactAudioPlayer from 'react-audio-player';

export default function Lab4() {
 
  return (
    <>

        <S.BodyContainer>

            <S.SectionProject>
                <S.ProjectTitle>
                    Audio descrição
                </S.ProjectTitle>
            </S.SectionProject>

            <S.SectionProject>
                <ReactAudioPlayer
                    src={audioLab4}
                    autoPlay
                    controls
                />
            </S.SectionProject>

            <S.ProjectsContainer>
                <S.SectionProject>
                    <S.ProjectTitle>
                        Relatório
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={Lab4pdf} width="900" height="700">oi</object>
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
