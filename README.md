# Compound Component
React CCP(Compound Component Pattern) 적용해보기

## Compound Component란?
> 서로 연관된 컴포넌트를 한 파일에 묶은 후에 최상위 컴포넌트에 정적 프로토타입으로 지정하는 방식
> 

서로 연관된 컴포넌트를 한 파일에 모아두지만 상태는 공유하고 있지 않으므로 Context API를 사용해 상태를 공유하고 변경할 수 있게 한다.

따라서 자식 컴포넌트에 해당하는 컴포넌트 내부에서 Context를 호출해야 한다.

```jsx
function ParentComponent() {
	const [open, toggle] = useState(false)

  return (
    <FlyOutContext.Provider value={{ open, toggle }}>
      {props.children}
    </FlyOutContext.Provider>
  )
}

function ChildComponent() {}

ParentComponent.ChildComponent = ChildComponent
```

이렇게 만들면 나중에 부모 컴포넌트를 사용할 때 자식 컴포넌트가 필요한 경우라고 해도 부모 컴포넌트만 import 하면 모두 사용이 가능하다.

```jsx
return (
	<ParentComponent>
		<ParentComponent.ChildComponent/>
	</ParentComponent>
)
```

자식 컴포넌트들을 순회 처리 하는 데에도 컴포넌트 패턴을 활용할 수 있다.

React.cloneElement 를 사용하여 자식 컴포넌트들을 복제해 useState의 상태 변수와 상태 변경 메서드를 넘긴다.

```jsx
export function User(Props) {
	const [login, setLogin] = React.useState(false)
	return (
		<div>
			{react.Children.map(props.children, child => 
				React.cloneElement(child, { login, setLogin })
			)}
		</div>
)
```

## 장점

- 컴파운드 패턴은 상태를 내부적으로 가지고 있기 때문에 상태가 외부적으로 드러나지 않는다.
- 자식 컴포넌트들을 일일이 import 할 필요가 없다.