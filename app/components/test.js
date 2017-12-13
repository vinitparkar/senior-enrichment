<div>
<form className="form-control">
    <table className='table'>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>GPA</th>
                <th>Campus</th>
            </tr>
        </thead>
            <tbody>
                {singleStud.length >0 && singleStud.map((student) => (

                    <tr key={student.id}>
                        <td><input type="text" name="firstName" plaeholder={student.firstName } onChange={this.firstNameChange} />  </td>
                        <td><input type="text" name="lastName" placeholder={student.lastName} onChange={this.lasttNameChange}/>  </td>
                        <td><input type="text" name="email" placeholder={student.email} onChange={this.emailChange}/>  </td>
                        <td><input type="text" name="gpa" placeholder={student.gpa} onChange={this.gpaChange}/>  </td>
                        <td>
                            <select onChange={this.campusChange}>
                                <option >{student.campus.name}</option>
                                {
                                    remainingCampuses && remainingCampuses.map( campus => (
                                        <option key={campus.id} value={campus.id}> {campus.name} </option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
    </table>
</form>
<Link to={`/students/${this.props.match.params.studentId}`}>
    <button className="btn btn-default" type="submit" > Submit</button>
</Link>
</div>

{/* <select onChange={this.campusChange}>
                                            <option >{student.campus.name}</option>
                                            {
                                                remainingCampuses && remainingCampuses.map( campus => (
                                                    <option key={campus.id} value={campus.id}> {campus.name} </option>
                                                ))
                                            }
                                        </select> */}
