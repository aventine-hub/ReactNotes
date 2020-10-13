import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import notesService from '../../services/notesService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import NotepadPage from '../NotepadPage/NotepadPage'
import AddNotePage from '../../components/AddNotePage/AddNotePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const notes = await notesService.getAll();
    this.setState({ notes });
  }

  handleAddNote = async newNoteData => {
    const newNote = await notesService.create(newNoteData);
    this.setState(state => ({
      notes: [...state.notes, newNote]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/'));
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <>
        <header className="App-header">
          ReactNotes
          <nav>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          </nav>
        </header>
        <Switch>
          <Route exact path='/' render={() => <NotepadPage notes={this.state.notes} />}
          />
          <Route exact path='/add' render={() => <AddNotePage handleAddNote={this.handleAddNote} />}
          />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
        </Switch>
      </>
    );
  }
}

export default App;
