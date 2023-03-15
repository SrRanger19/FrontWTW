import { Link } from "react-router-dom";


function Data() {

  return (
    <div className="Register-container">
      <div className="title-container-1">
        <div className="Logo-container">
          <img src="/icon/Logo.svg" alt="" />
        </div>
        <h1 id="Title-Register">Touring The Globe✨</h1>
      </div>
      <h3 className='Title_R'>Register</h3>

      <form>
        <div>
          <label id="User">Full name</label>
          <br />
          <input className="place" type="text" name="user" />
        </div>
        <br />

        <div>
          <label id="Age_Login">Age</label>
          <br />
          <input className="place" type="number" name="age" id="age" />
        </div>
        <br />

        <div>
          <label id="Cell_Login">Cellphone</label>
          <br />
          <input className="place" type="number" name="cellphone" />
        </div>
        <br />
        
        <div>
          <label id="Email">Email</label>
          <br />
          <input className="place"type="email" name="email" id="emailConfirm1"/>
        </div>
        <br />

        <div>
          <label id="Password">Password</label>
          <br />
          <input className="place" type="password" name="password" id="passwordConfirm1"/>
        </div>
        <br />

        <div>
          <label id="password">Confirm password</label>
          <br />
          <input className="place" type="password" id="passwordConfirm2" />
        </div>

        <div className="Create-button-container">
          <button id="Create-User-button-Register" >Create account</button> 
          <br/><br/><br/>
          <Link id="Create-button_cancel" to="/">Cancel</Link>
        </div>
        
      </form>
    </div>
  );
}
export default Data;