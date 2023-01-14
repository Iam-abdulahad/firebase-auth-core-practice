import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; "#"

function App() {
  return (
    <div classNmae="App">
      <div>
        <h1>Welcome to Authentication projrct</h1>
        <div>
          {/* <!-- Pills navs --> */}
          <ul classNmae="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li classNmae="nav-item" role="presentation">
              <a classNmae="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                aria-controls="pills-login" aria-selected="true">Login</a>
            </li>
            <li classNmae="nav-item" role="presentation">
              <a classNmae="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                aria-controls="pills-register" aria-selected="false">Register</a>
            </li>
          </ul>
          {/* <!-- Pills navs --> */}

          {/* <!-- Pills content --> */}
          <div classNmae="tab-content">
            <div classNmae="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
              <form>
                <div classNmae="text-center mb-3">
                  <p>Sign in with:</p>
                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-google"></i>
                  </button>

                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-twitter"></i>
                  </button>

                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-github"></i>
                  </button>
                </div>

                <p classNmae="text-center">or:</p>

                {/* <!-- Email input --> */}
                <div classNmae="form-outline mb-4">
                  <input type="email" id="loginName" classNmae="form-control" />
                  <label classNmae="form-label" for="loginName">Email or username</label>
                </div>

                {/* <!-- Password input --> */}
                <div classNmae="form-outline mb-4">
                  <input type="password" id="loginPassword" classNmae="form-control" />
                  <label classNmae="form-label" for="loginPassword">Password</label>
                </div>

                {/* <!-- 2 column grid layout --> */}
                <div classNmae="row mb-4">
                  <div classNmae="col-md-6 d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div classNmae="form-check mb-3 mb-md-0">
                      <input classNmae="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                      <label classNmae="form-check-label" for="loginCheck"> Remember me </label>
                    </div>
                  </div>

                  <div classNmae="col-md-6 d-flex justify-content-center">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" classNmae="btn btn-primary btn-block mb-4">Sign in</button>

                {/* <!-- Register buttons --> */}
                <div classNmae="text-center">
                  <p>Not a member? <a href="#!">Register</a></p>
                </div>
              </form>
            </div>
            <div classNmae="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
              <form>
                <div classNmae="text-center mb-3">
                  <p>Sign up with:</p>
                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-google"></i>
                  </button>

                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-twitter"></i>
                  </button>

                  <button type="button" classNmae="btn btn-link btn-floating mx-1">
                    <i classNmae="fab fa-github"></i>
                  </button>
                </div>

                <p classNmae="text-center">or:</p>

                {/* <!-- Name input --> */}
                <div classNmae="form-outline mb-4">
                  <input type="text" id="registerName" classNmae="form-control" />
                  <label classNmae="form-label" for="registerName">Name</label>
                </div>

                {/* <!-- Username input --> */}
                <div classNmae="form-outline mb-4">
                  <input type="text" id="registerUsername" classNmae="form-control" />
                  <label classNmae="form-label" for="registerUsername">Username</label>
                </div>

                {/* <!-- Email input --> */}
                <div classNmae="form-outline mb-4">
                  <input type="email" id="registerEmail" classNmae="form-control" />
                  <label classNmae="form-label" for="registerEmail">Email</label>
                </div>

                {/* <!-- Password input --> */}
                <div classNmae="form-outline mb-4">
                  <input type="password" id="registerPassword" classNmae="form-control" />
                  <label classNmae="form-label" for="registerPassword">Password</label>
                </div>

                {/* <!-- Repeat Password input --> */}
                <div classNmae="form-outline mb-4">
                  <input type="password" id="registerRepeatPassword" classNmae="form-control" />
                  <label classNmae="form-label" for="registerRepeatPassword">Repeat password</label>
                </div>

                {/* <!-- Checkbox --> */}
                <div classNmae="form-check d-flex justify-content-center mb-4">
                  <input classNmae="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                    aria-describedby="registerCheckHelpText" />
                  <label classNmae="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" classNmae="btn btn-primary btn-block mb-3">Sign in</button>
              </form>
            </div>
          </div>
          {/* <!-- Pills content --> */}
        </div>


      </div>
    </div>
  );
}

export default App;
