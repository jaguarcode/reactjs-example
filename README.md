# This is Reactjs Example

### 예제를 위주로 만들어 놓은 프로젝트

#### 언제든 꺼내어 볼 수 있는 자습서 같은 프로젝트 입니다.

### React.js를 사용하기 위해 알아야 할 것들

- React와 깊은 관련이 있는 ES6 문법들
  - 템플릿 문자열
  - 전개 연산자
  - 가변 변수와 불변 변수
  - 클래스
  - 화살표 함수
  - 객체 확장 표현식과 구조 분해 할당
  - 라이브러리 의존성 관리
  - 배열 함수
  - 비동기 함수
  - 디바운스와 스로틀
- React Component
  - JSX
  - Property
  - State
  - Life Cycle
  - Class Component
  - Functional Component
  - Array Component
  - Callback Function
  - Handling Events
- Design
  - Visual Testing
  - Storybook
  - react with styles
  - Jest & Enzyme(엔자임)
  - CSS
  - Style Component
- HigherOrder Component

  - Currying & Compose
  - Decorator Pattern

    - 독립된 데코레이터로 기능을 구성하기 위한 방법
    - Java에서는 Interface 사용, Javascript에서는 Currying(Higher-order function) 사용

    ```javascript
    // 함수형 컴포넌트를 반환하는 하이어오더 컴포넌트
    function higherOrderComponent(Compoenent) {
      return function Enhanced(props) {
        return <Component {...props} />;
      };
    }

    // 클래스형 컴포넌트를 반환하는 하이어오더 컴포넌트
    function higherOrderComponent(Component) {
      return class Enhanced extends React.Component {
        render() {
          return <Component {...this.props} />;
        }
      };
    }
    ```

    - 하이어오더 컴포넌트를 만들때는 암묵적으로 '컴포넌트 인자 하나만 전달한다.'는 규칙

  - 다중 커링

- Context
- Context API
  - Redux
