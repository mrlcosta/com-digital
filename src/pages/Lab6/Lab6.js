import React from 'react';
import * as S from "./Lab6.styles";
import Lab6pdf from '../../assets/Lab6.pdf'
import lab6tabela from '../../assets/lab6tabela.png'

import audioLab6 from '../../assets/audioLab6.m4a'
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
                    src={audioLab6}
                    autoPlay
                    controls
                />
            </S.SectionProject>

            <S.ProjectsContainer>
                <S.SectionProject>
                <a target="_blank" href="https://drive.google.com/drive/folders/1gqDFfTmtIbshgN14V6Vveoqj41AMFTUO" className="btn_novo_perfil" rel="noreferrer">
                    <S.ProjectTitle>
                        Link para os arquivos de áudio
                    </S.ProjectTitle>
                </a>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Relatório
                    </S.ProjectTitle>
                    <object data={Lab6pdf} width="900" height="700">oi</object>

                    <S.ProjectTitle>
                        Conclusão
                    </S.ProjectTitle>

                    <S.IMG src={lab6tabela} alt="tabela"/>

                    <S.ProjectParagraph>
                        Os experimentos consolidam os conhecimentos abordados na disciplina de CSM, como o comportamento da frequência fundamental do espectrograma, a menor componente do sinal de fala, observa-se a diferença na entonação dos membros do grupo, mesmo com texto semelhantes a diferença de entonação e de microfone causa observáveis. Dentre os integrantes, o Muriel apresentou a menor frequência de F0 em 526 Hz, correspondendo a voz mais grave do grupo, enquanto o Lucas apresentou a voz mais aguda dentre os demais chegando até 3333 Hz.
                    </S.ProjectParagraph>
                </S.SectionProject>
                
                
                
            </S.SectionProject>
      
            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
