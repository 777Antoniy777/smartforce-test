import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getCountRepositories, getRepositoriesRequestData} from "../../selectors/repositories/selectors";
import {getUserRequestData} from "../../selectors/user/selectors";
import {RepositoriesActionCreator} from "../../actions/repositories/action-creator";
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
    search: {
      value: '',
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
    const {name, search} = this.state;

    this.sendFormData(name, search);
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

  sendFormData = (name, search) => {
    const {repositoriesPerPage, getRepositories, getCurrentRepository, setRepositoriesPage, getUserData} = this.props;
    const {value: nameValue} = name;
    const {value: searchValue} = search;

    this.validateInput(name, 'Name', this);

    if (nameValue) {
      if (searchValue) {
        getCurrentRepository(nameValue, searchValue);
      } else {
        getRepositories(nameValue, repositoriesPerPage, 1);
        setRepositoriesPage(1);
        getUserData(nameValue);
      }
    }
  }

  render() {
    const {repositoriesRequestData, userRequestData} = this.props;
    const {name, search, login, password} = this.state;
    const {value: nameValue, message: nameMessage} = name;
    const {value: searchValue, message: searchMessage} = search;
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

                <InputWrapper>
                  <label htmlFor="search">Repository</label>
                  <input id="search" type="search" value={searchValue} name="search" placeholder="Type repository" onChange={this.handleInputChange} />

                  { searchMessage &&
                    <ErrorMessage>{searchMessage}</ErrorMessage>
                  }
                </InputWrapper>

                <Button type="submit" onClick={this.handleButtonClick}>

                  { searchValue
                    ? 'Search'
                    : 'Download'
                  }

                </Button>

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
  repositoriesPerPage: PropTypes.number,
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
  setRepositoriesPage: PropTypes.func,
  getUserData: PropTypes.func,
  getCurrentRepository: PropTypes.func,
};

const mapStateToProps = (state) => ({
  repositoriesPerPage: getCountRepositories(state),
  repositoriesRequestData: getRepositoriesRequestData(state),
  userRequestData: getUserRequestData(state),
});

const mapDispatchToProps = (dispatch) => ({
  getRepositories: (username, count, page) => {
    dispatch(RepositoriesAsyncActionCreator.getRepositories(username, count, page));
  },
  getCurrentRepository: (username, repository) => {
    dispatch(RepositoriesAsyncActionCreator.getCurrentRepository(username, repository));
  },
  setRepositoriesPage: (page) => {
    dispatch(RepositoriesActionCreator.setRepositoriesPage(page));
  },
  getUserData: (username) => {
    dispatch(UserAsyncActionCreator.getUserData(username));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
