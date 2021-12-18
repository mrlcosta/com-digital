import React from 'react';
import * as S from "./Lab2.styles";

export default function Lab2() {
 
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
                <a target="_blank" href="https://colab.research.google.com/drive/1QP6CsLnzE0YLTGrqV4RjItbnPcIckkfD?usp=sharing" className="btn_novo_perfil" rel="noreferrer">
                    <S.ProjectTitle>
                        Link para o Relatório
                    </S.ProjectTitle>
                </a>
            </S.SectionProject>



        </S.BodyContainer>
    </>
  );
}
