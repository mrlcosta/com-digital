import React from 'react';
import * as S from "./Lab9.styles";
import Lab9pdf from '../../assets/Lab9.pdf'

import audioLab9 from '../../assets/audioLab9.m4a'
import ReactAudioPlayer from 'react-audio-player';

export default function Lab8() {
 
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
                    src={audioLab9}
                    autoPlay
                    controls
                />
            </S.SectionProject>

            <S.ProjectsContainer>
                <S.SectionProject>
                    <a target="_blank" href="https://drive.google.com/drive/folders/1kn92JwVCb9AuBXmYV5LnKh8OFsM1mh1I" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectTitle>
                            Link para os arquivos de áudio
                        </S.ProjectTitle>
                    </a> 
                    <br/> <br/>

                    <S.SectionProject>
                        <S.ProjectTitle>
                            Relatório
                        </S.ProjectTitle>
                        <object data={Lab9pdf} width="900" height="700">oi</object>

                    </S.SectionProject>
                    
                    
                    
                </S.SectionProject>
      
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
