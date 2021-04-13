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
    - Java에서는 Interface 사용, Javascript에서는 Currying(Higher-order function) 사용ㅏ

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

  - Obserable Pattern
  - 컴포넌트 간의 자료 의존성을 없애는 공급자와 소비자 개념
  - 공급자에게 콜백 함수로 데이터 변경 요청 (Data Down, Action Up - DDAU 개념)
  - 공급자 구현/ 컴포넌트에서 공급자 분리하기
  - 소비자 하이어오더 컴포넌트로 구현
  - 커링으로 중복 공급자 문제 해결하기
  - 여러 공급자를 구독하는 소비자 만들기
  - 하이어오더 컴포넌트 조합 충돌 문제 해결하기

- Context API
  - Redux
