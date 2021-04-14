import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions';

/*
const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)),
  };
};
*/
/*
// dispatch 인자 생략 가능
const mapDispatchToProps = {
  setAge: setAge,
};
*/

// 객체 확장 표현식에 따라 {setAge: setAge}는 키와 키 값이 같으므로
// 아래와 같이 생략 가능
const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
