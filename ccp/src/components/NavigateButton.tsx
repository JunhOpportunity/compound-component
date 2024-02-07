import { useUserCardContext } from "./UserCardContext";

export default function NavigateButton() {
  const { user } = useUserCardContext();
  const onClick = () => {
    console.log("이동");
  };
  return (
    <button className="navigate-button" onClick={onClick}>
      평판 작성하러 가기
    </button>
  );
}
