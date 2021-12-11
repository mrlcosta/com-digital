import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: #a4e0dd; */
    height: 150px;
`;
export const HeaderContainer = styled.div`
    background-color: #dbdbdb;
    width: 100%;
    height: 95vh;
    margin-bottom: 100px;
`;

export const SectionTeam = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    /* background-color: #d1dedb; */
    height: 100px;
`;

export const HeaderTitle = styled.span`
    text-align: center;
    font-size: 50px;
    font-family: monospace;
`;

export const TeamTitle = styled.span`
    margin-left: 40px;
    text-align: center;
    font-size: 37px;
    font-family: sans-serif;
`;

export const PersonalCardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    /* background-color: #00ff; */
    height: 500px;
`;

export const PersonalCard = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    /* background-color: #00ffff; */
    width: 250px;
    overflow-wrap: break-word;
`;

export const PersonalImg = styled.img`
    /* height: 300px; */
    border-radius: 50%;
`;

export const CourseTitle = styled.span`
    text-align: center;
    font-size: 20px;
    /* font-family: sans-serif; */
    font-family: monospace;
    margin: 10px 0px;
    color: #8b5742;
`;

export const PersonalName = styled.span`
    text-align: center;
    font-size: 35px;
    font-family: sans-serif;
    margin: 0px 0px;
    font-weight: 600;
    color: #000;
`;

export const PersonalDescription = styled.span`
    text-align: center;
    font-size: 15px;
    font-family: sans-serif;
    margin: 15px 0px;
    padding: 10px;
    color: #4d4d4d;
`;


export const BodyContainer = styled.div`
    background-color: #182228;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* align-content: center; */
`;

export const SectionProject = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    /* background-color: #d1dedb; */
    height: 100px;
`;

export const ProjectTitle = styled.span`
    margin-left: 40px;
    text-align: center;
    font-size: 37px;
    font-family: sans-serif;
    color: #e1e1e1;
`;

export const ProjectsContainer = styled.div`
    background-color: #2c353a;
    width: 90%;
    /* height: 500px; */
    margin: 60px auto;
    border-radius: 25px;
    padding: 0 40px 10px 40px;
    display: flex;
    flex-direction: column;

`;

export const ProjectRow = styled.div`
    border-bottom: 1px solid #535353;
    height: 50px;
    margin-top: 30px;
`;

export const ProjectName = styled.span`
    margin-left: 40px;
    font-size: 30px;
    font-family: sans-serif;
    color: #e1e1e1;
    cursor: no-drop;
    /* cursor: pointer; */
`;

export const ProjectNameAllow = styled.span`
    margin-left: 40px;
    font-size: 30px;
    font-family: sans-serif;
    color: #e1e1e1;
    cursor: pointer;
    /* cursor: pointer; */
`;