import styled from "styled-components";

const UserCard = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 0px 1px;
  position: relative;
`;

const PersonName = styled.div`
  text-align: center;
  color: #696969;
  font-weight: bold;
  font-size: 20px;
`;

const PersonJob = styled.div`
  text-align: center;
  color: #696969;
  font-weight: lighter;
  font-size: 10px;
`;

const PersonInfo = styled.div`
  border-radius: 5px;
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 100px;
  width: 90%;
  overflow-y: auto;
  font-size: 15px;
`;

const ProfileImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #7bb241;
  fill: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BetaTesterBedge = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10px;
  top: 10px;
  fill: #7bb241;
`;

const GoPageBtn = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: white;
  color: #7bb241;
  border: 1px solid #7bb241;
  transition-duration: 0.3s;
  :hover {
    color: white;
    background-color: #7bb241;
  }
  cursor: pointer;
`;

export default function PersonBox() {
  // const address = personData.userNickname;
  return (
    <></>
    // <UserCard>
    //   <ProfileImgBox>
    //     <ProfileImg>
    //       <Img src={personData.profileImgUrl} />
    //     </ProfileImg>
    //   </ProfileImgBox>
    //   <PersonName>{personData.userDisplayName}</PersonName>
    //   <PersonJob>{personData.userJob} </PersonJob>
    //   <PersonInfo>{personData.personInfo}</PersonInfo>
    //   <GoPageBtn>평판 작성하러 가기</GoPageBtn>
    // </UserCard>
  );
}
