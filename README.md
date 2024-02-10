# Compound Component
React CCP(Compound Component Pattern) 적용해보기

## Compound Component란?
> 서로 연관된 컴포넌트를 한 파일에 묶은 후에 최상위 컴포넌트에 정적 프로토타입으로 지정하는 방식
> 

## Compound Component를 사용하는 이유

CCP는 깔끔한 코드 작성에 효과적이기 때문입니다.

그러나 클린 코드를 위해서만 이 패턴을 사용하는 것은 아닙니다.

### 1. 재사용성

하위 컴포넌트들을 결합하여 하나의 상위 컴포넌트로 만들기 때문에 각각의 하위 컴포넌트들을 재사용 할 수 있을 뿐만 아니라 상위 컴포넌트도 재사용이 가능해집니다.

### 2. 유연성

하위 컴포넌트를 각각 추가하거나 제외시킬 수 있기 때문에 컴포넌트의 형태와 동작을 쉽게 변경할 수 있습니다.

### 3. 구조의 명확성

상위 컴포넌트와 하위 컴포넌트 간의 관계가 명확해지므로 코드의 가독성을 높이고 유지보수가 용이해집니다.

### 4. 추상화

상위 컴포넌트를 통해 컴포넌트의 내부 동작을 추상화하고 숨길 수 있습니다.

## 사용 방법

CCP는 사용 방법이 굉장히 간단합니다.

상위 컴포넌트에서 필요한 하위 컴포넌트들을 상위 컴포넌트 내부에 모아두고 필요할 때 사용하는 것이 전부입니다.

1. 필요한 하위 컴포넌트들을 모두 import 하기
2. 컴포넌트를 호출할 때 사용할 이름을 정하고 해당 컴포넌트를 할당하기
`상위컴포넌트.호출이름 = 하위컴포넌트;` 
3. 필요한 하위 컴포넌트들을 호출해 사용하기

```jsx
import AaComponent from "./AaComponent";
import BbComponent from "./BbComponent" ;
import CcComponent from "./CcComponent ";

export default function CompoundComponent({children}: {children: ReactNode}) {
  return (
    <div>{children}</div>
  );
}

CompoundComponent.Aa = AaComponent;
CompoundComponent.Bb = BbComponent;
CompoundComponent.Cc = CcComponent;
```

```jsx

import CompoundComponent from "./component/CompoundComponent"

function App() {
  return (
    <CompoundComponent>
      <CompoundComponent.Aa />
      <CompoundComponent.Bb />
      <CompoundComponent.Cc />
    </CompoundComponent>
  );
}
```

이제 `CompoundComponent` 가 필요한 곳이라면 하위 컴포넌트들을 일일이 import 하지 않고 상위 컴포넌트 하나만 import 하더라도 모두 사용할 수 있습니다.

또한 `CompoundComponent` 를 다른 곳에서 재사용 할 때 동일한 형태가 아니라 하위 컴포넌트인 `Aa` , `Bb` , `Cc`  컴포넌트 중 일부만 사용하고 싶다면 간단하게 해당 컴포넌트만 추가하지 않으면 됩니다.

```jsx
// 하위 컴포넌트인 Bb 컴포넌트는 사용하고 싶지 않은 경우
import CompoundComponent from "./component/CompoundComponent"

function Main() {
  return (
    <CompoundComponent>
      <CompoundComponent.Aa />
      <CompoundComponent.Cc />
    </CompoundComponent>
  );
}
```
어떤가요? 더 깔끔하게 작성되었다고 느껴지시나요?

좀 더 깔끔하고 명확한 구조를 갖춘 코드가 완성되었습니다.

### ② CCP를 활용해 컴포넌트 재사용하기

![image](https://github.com/JunhOpportunity/compound-component/assets/89464762/b94d4a78-c13f-4ea6-9ba2-1b88f13ab6e5)


그렇다면 이번에는 CCP를 조금 더 활용해보기 위해 컴포넌트 재사용 방법에 대해 알아봅시다.

만약, 해당 유저의 상세 페이지로 이동하는 `평판 작성하러 가기` 버튼을 눌러서 상세 페이지로 이동했을 때 맨 위에 `UserCard` 의 버튼만 제거한 채로 같은 유저 카드를 보여주고 싶다면 어떻게 해야할까요?

하위 컴포넌트인 `<UserCard.Navigate />` 만 제거하면 바로 구현이 가능합니다.

```jsx
function App() {
  return (
    <UserCard user={user}>
      <UserCard.ProfileImage />
      <UserCard.Name />
      <UserCard.Job />
      <UserCard.Intro />
    </UserCard>
  );
}
```

따라서 컴포넌트를 약간 변경해서 재사용하고 싶은 경우에도 CCP를 사용하면 효율적이라는 것을 알게 되었습니다.
