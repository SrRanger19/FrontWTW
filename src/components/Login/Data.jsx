import { Link} from "react-router-dom";

function Data() {
    return (
        <div className="Login-container">
             <br/><br/>
            <div className="title-container-1">
                <div className="Logo-container">
                    <img src="/icon/Logo.svg" alt="" />
                </div>
               
                <h1>Touring The Globe✨</h1>
            </div>

            <h3 className='Title_R'>Account login</h3>
            <form className='LoginForm'>
                <div>
                    <label id="Email">Email</label><br />
                    <input className="place" type="text" name="email" id='email_Login'/>
                </div>
                <br />

                <div >
                    <label id="Password">Password</label><br />
                    <input className="place" type="password" name="password" id='password_Login'/>
                </div>

                <button type='submit' id="Create-User-button">Login</button>
                <h4 id='Text-Login'>or</h4><br />
                <Link id="Create-button" to="/Register">Create account</Link>
            </form>
        </div>
    );
}
export default Data;