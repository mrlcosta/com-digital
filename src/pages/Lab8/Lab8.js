import React from 'react';
import * as S from "./Lab8.styles";
// import Lab8pdf from '../../assets/Lab8.pdf'

import audioLab8 from '../../assets/audioLab8.mp3'
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
                    src={audioLab8}
                    autoPlay
                    controls
                />
            </S.SectionProject>

            <S.ProjectsContainer>
                <S.SectionProject>
                    <a target="_blank" href="https://drive.google.com/drive/folders/1I34AW8dnAIBHYxul6LFQMCycHclPzJwY" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectTitle>
                            Link para os arquivos de áudio
                        </S.ProjectTitle>
                    </a> 
                    <br/> <br/>

                    <a target="_blank" href="https://drive.google.com/drive/folders/13AfjLGhFymzjemIS8JpRu2JrgOojpFH-" className="btn_novo_perfil" rel="noreferrer">
                        <S.ProjectTitle>
                            Link para as imagens 
                        </S.ProjectTitle>
                    </a>

                    <S.SectionProject>
                        <S.ProjectTitle>
                            Relatório
                        </S.ProjectTitle>
                        {/* <object data={Lab8pdf} width="900" height="700">oi</object> */}

                    </S.SectionProject>
                    
                    
                    
                </S.SectionProject>
      
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
