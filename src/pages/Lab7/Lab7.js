import React from 'react';
import * as S from "./Lab7.styles";
import Lab7pdf from '../../assets/Lab7.pdf'

import audioLab7 from '../../assets/audioLab6.wav'
import ReactAudioPlayer from 'react-audio-player';

export default function Lab6() {
 
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
                    src={audioLab7}
                    autoPlay
                    controls
                />
            </S.SectionProject>

            <S.ProjectsContainer>
                <S.SectionProject>
                <a target="_blank" href="https://drive.google.com/drive/u/0/folders/1EwsJLrtZNwmG9jIS4FplcpT0l0QTdnLk" className="btn_novo_perfil" rel="noreferrer">
                    <S.ProjectTitle>
                        Link para os arquivos de áudio
                    </S.ProjectTitle>
                </a>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Relatório
                    </S.ProjectTitle>
                    <object data={Lab7pdf} width="900" height="700">oi</object>

                </S.SectionProject>
                
                
                
            </S.SectionProject>
      
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
