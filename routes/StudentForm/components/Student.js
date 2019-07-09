import React, { Component } from 'react';

class Student extends Component{
  constructor(props) {
    super(props);
  }
  save = (values) => {
    
  }
  render() {
    return(
      <form>
        <div>
          <label>Name:</label>
          <input placeholder='Name' name='name' onChange={(e) => this.save(e, "name")} />
        </div>
        <div>
          <label>Stanndard:</label>
          <input placeholder='Name' name='standard' onChange={(e) => this.save(e, "standard")} />
        </div>
        <div>
          <label>Math:</label>
          <input placeholder='Standard' name='math' onChange={(e) => this.save(e, "math")} />
        </div>
        <div>
          <label>Science:</label>
          <input placeholder='Science' name='science' onChange={(e) => this.save(e, "science")} />
        </div>
        <div>
          <label>Social:</label>
          <input placeholder='Social' name='social' onChange={(e) => this.save(e, "social")} />
        </div>
        <div>
          <label>English:</label>
          <input placeholder='English' name='english' onChange={(e) => this.save(e, "english")} />
        </div>
        <div>
          <label>Hindi:</label>
          <input placeholder='Hindi' name='hindi' onChange={(e) => this.save(e, "hindi")} />
        </div>
        <div>
          <button type="submit" onClick={() => this.save}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Student;
