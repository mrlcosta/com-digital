import React from 'react';
import * as S from "./Lab5.styles";
import Lab5pdf from '../../assets/Lab5.pdf'
import jefferson_com_fone from '../../assets/jefferson_com_fone.pdf'
import jefferson_sem_fone from '../../assets/jefferson_sem_fone.pdf'
import lucas_com_fone from '../../assets/lucas_com_fone.pdf'
import lucas_sem_fone from '../../assets/lucas_sem_fone.pdf'
import muriel_com_fone from '../../assets/muriel_com_fone.pdf'
import muriel_sem_fone from '../../assets/muriel_sem_fone.pdf'
import victor_com_fone from '../../assets/victor_com_fone.pdf'
import victor_sem_fone from '../../assets/victor_sem_fone.pdf'

import audioLab5 from '../../assets/audioLab5.mp3'
import ReactAudioPlayer from 'react-audio-player';

export default function Lab5() {
 
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
                    src={audioLab5}
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
                <object data={Lab5pdf} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Jefferson com fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={jefferson_com_fone} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Jefferson sem fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={jefferson_sem_fone} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Lucas com fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={lucas_com_fone} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Lucas sem fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={lucas_sem_fone} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Muriel com fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={muriel_com_fone} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Muriel sem fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={muriel_sem_fone} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Victor com fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={victor_com_fone} width="900" height="700">oi</object>

                <S.SectionProject>
                    <S.ProjectTitle>
                        Victor sem fone
                    </S.ProjectTitle>
                </S.SectionProject>
                <object data={victor_sem_fone} width="900" height="700">oi</object>

            </S.ProjectsContainer>

        </S.BodyContainer>
    </>
  );
}
