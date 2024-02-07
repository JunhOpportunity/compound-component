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
