import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getRepositoriesRequestData} from "../../selectors/repositories/selectors";
import {getUserRequestData} from "../../selectors/user/selectors";
import {RepositoriesAsyncActionCreator} from "../../actions/repositories/async-action-creator";
import {UserAsyncActionCreator} from "../../actions/user/async-action-creator";
import {Wrapper, InputsWrapper, SearchWrapper, LoginWrapper, FormWrapper, InputWrapper, Button, ErrorMessage} from "./styles";
import Error from "../error/error";

class Form extends React.PureComponent {
  state = {
    name: {
      value: '777Antoniy777',
      message: '',
    },
    login: {
      value: '',
      message: '',
    },
    password: {
      value: '',
      message: '',
    },
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
  }

  handleInputChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value.trim();

    this.setState({
      [name]: {
        value,
        message: '',
      },
    });
  }

  handleButtonClick = (evt) => {
    evt.preventDefault();
    const {name} = this.state;

    this.sendFormData(name);
  }

  validateInput = (obj, name, ctx) => {
    const {value} = obj;

    if (!value.length) {
      ctx.setState({
        [name.toLowerCase()]: {
          ...obj,
          message: `${name} should not be empty`,
        },
      });
    }
  }

  sendFormData = (name) => {
    const {getRepositories, getUserData} = this.props;
    const {value: nameValue} = name;

    this.validateInput(name, 'Name', this);

    if (nameValue) {
      getRepositories(nameValue);
      getUserData(nameValue)
    }
  }

  render() {
    const {repositoriesRequestData, userRequestData} = this.props;
    const {name, login, password} = this.state;
    const {value: nameValue, message: nameMessage} = name;
    const {value: loginValue, message: loginMessage} = login;
    const {value: passwordValue, message: passwordMessage} = password;

    return (
      <Wrapper>
          <InputsWrapper>
            <SearchWrapper>
              <FormWrapper action="#" method="POST" onSubmit={this.handleFormSubmit}>
                <InputWrapper>
                  <label htmlFor="name">User name</label>
                  <input id="name" type="text" value={nameValue} name="name" placeholder="Type user name" onChange={this.handleInputChange} />

                  { nameMessage &&
                    <ErrorMessage>{nameMessage}</ErrorMessage>
                  }
                </InputWrapper>

                <Button type="submit" onClick={this.handleButtonClick}>Download</Button>

                {/* Error message */}
                <Error
                  // properies
                  requestData={[repositoriesRequestData, userRequestData]}
                />
              </FormWrapper>
            </SearchWrapper>

            <LoginWrapper>
              <FormWrapper action="#" method="POST">
                <InputWrapper>
                  <label htmlFor="login">Login</label>
                  <input id="login" type="text" value={loginValue} name="login" placeholder="Type login" onChange={this.handleInputChange} />

                  { loginMessage &&
                    <ErrorMessage>{loginMessage}</ErrorMessage>
                  }
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" value={passwordValue} name="password" placeholder="Type password" onChange={this.handleInputChange} />

                  { passwordMessage &&
                    <ErrorMessage>{passwordMessage}</ErrorMessage>
                  }
                </InputWrapper>

                <Button type="submit">Login</Button>
              </FormWrapper>
            </LoginWrapper>
          </InputsWrapper>
      </Wrapper>
    );
  }
}

Form.propTypes = {
  repositoriesRequestData: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOfType([
        PropTypes.number,
        null,
      ]),
      message: PropTypes.string,
    })
  ),
  userRequestData: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOfType([
        PropTypes.number,
        null,
      ]),
      message: PropTypes.string,
    })
  ),
  getRepositories: PropTypes.func,
  getUserData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  repositoriesRequestData: getRepositoriesRequestData(state),
  userRequestData: getUserRequestData(state),
});

const mapDispatchToProps = (dispatch) => ({
  getRepositories: (username) => {
    dispatch(RepositoriesAsyncActionCreator.getRepositories(username));
  },
  getUserData: (username) => {
    dispatch(UserAsyncActionCreator.getUserData(username));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
