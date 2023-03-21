
function Data() {
    return (
        <div className="div-container-statistic">

            <br /><br />
            <h3 className="Employee_titulo">Register Employee</h3>
            <form className='ControllerEmployeeRegisterForm'>
                <div>
                    <label id="Full_name">Full name</label><br />
                    <input className="Employee_place" type="text" name="user" />
                </div>
                <br />

                <div >
                    <label id="Employee_Email">Email</label><br />
                    <input className="Employee_place" type="text" id="emailConfirm1" />
                </div>
                <br />

                <div >
                    <label id="Employee_Password">Password</label><br />
                    <input className="Employee_place" type="password" id="passwordConfirm1" />
                </div>
                <br />

                <div>
                    <label id="Employee_Password">Confirm password</label>
                    <input className="Employee_place" type="password" id="passwordConfirm2" />
                </div>
                <br />

                <div >
                    <label id="Role">Role</label><br />
                    <input className="Employee_place" type="text" name='role' />
                </div>
                <br />

                <div >
                    <label id="Age">Age</label><br />
                    <input className="Employee_place" type="text" name="age" />
                </div>
                <br />

                <div >
                    <label id="Cellphone">Cellphone</label><br />
                    <input className="Employee_place" type="text" name="cellphone" />
                </div>

                <div className="Create-button-container-EmployeeRegister">
                    <button id="Create-Employee-button" >Create account</button>
                </div>
            </form>
        </div>
    );
}

export default Data;