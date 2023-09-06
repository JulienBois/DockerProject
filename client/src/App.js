import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import axios from 'axios';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

    const handleSubmitSignIn = async (e) => {
        console.log("Je passe");
        e.preventDefault();
        await axios.post('http://localhost:5000/signin', {email: email,password: password}).then((response) => {
            console.log(response);
            alert(response.data)
        })
            .catch((error) => {
                alert(error)
            });
        console.log('Login Form Data:', email, password);
    };

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/signup', {email, password}).then((response) => {
            alert(response.data)
        })
            .catch((error) => {
                alert(error)
            });
        console.log('Login Form Data:', email, password);
    };

        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-4">
                        <div className="card bg-dark text-light">
                            <div className="card-body">
                                <h2 className="card-title text-center">Connexion / Inscription</h2>
                                <form>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Entrer email"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">Mot de passe</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Mot de passe"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <div className="d-flex justify-content-center">
                                                    <button type="submit" onClick={handleSubmitSignIn}  className="btn btn-primary btn-block">
                                                        Se connecter
                                                    </button>
                                                </div>
                                                <div className="col-md-6 mx-auto">
                                                    <button type="submit" onClick={handleSubmitSignUp} className="btn btn-secondary btn-block">
                                                        S'inscrire
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default App;
