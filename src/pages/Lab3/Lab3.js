import React from 'react';
import * as S from "./Lab3.styles";
import Lab3pdf from '../../assets/Lab3.pdf'
import audioLab3 from '../../assets/audioLab3.mp3'
import ReactAudioPlayer from 'react-audio-player';

export default function Lab3() {
 
  return (
    <>

        <S.BodyContainer>
            
            <S.SectionProject>
                <S.ProjectTitle>
                    Video
                </S.ProjectTitle>
            </S.SectionProject>

            <S.SectionProject>
                <iframe key='1' title='video DCT' src="https://drive.google.com/file/d/126HGRnNSOaVVy1ovgkY-Btc6-cdpkiYF/preview" width="400" height="400" allow="autoplay"></iframe>
            </S.SectionProject>

            <S.SectionProject>
                <S.ProjectTitle>
                    Audio descrição
                </S.ProjectTitle>
            </S.SectionProject>

            <S.SectionProject>
                <ReactAudioPlayer
                    src={audioLab3}
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
                <object data={Lab3pdf} width="900" height="700">oi</object>
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
