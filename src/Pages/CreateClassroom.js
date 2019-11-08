import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import MockSchool1Classdata from './mockdata/school1classdata';
import ClassTableComponent from './Components/ClassTableComponent';

class CreateSchool extends React.Component {

  componentDidMount()
  {
    this.setState({ClassesPresent:MockSchool1Classdata})  
  }

  constructor(props)
  {
    super(props);
    this.initialClassDetail = {
      ClassName:'',
      ClassTeacher:''
    }
    this.state =
    {
      ClassesPresent:[],
      NewClass:this.initialClassDetail
    }
  }

  createClass ()
  {
    this.setState({
        ClassesPresent:[...this.state.ClassesPresent,this.state.NewClass],
        NewClass:this.initialClassDetail
    })
  }
  handleChange(event)
  {
      this.setState({NewClass:{
          ...this.state.NewClass,
          [event.target.name]:event.target.value
      }})
  }

  render()
  {
    let SchoolId= this.props.match.params.SchoolId;
    return (
        <div className="App">
          
            
          <div style={{background:'white'}}>
                    <ClassTableComponent data={this.state.ClassesPresent} headers={["Class Name","Teacher Name"]} SchoolId ={SchoolId}/>
          </div>

          <br />

          <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:120}}>Class Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewClass.ClassName}
                name='ClassName'
                />
            </InputGroup>

            <InputGroup className="mb-3" style = {{width:"50%"}}>
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-default" style={{width:120}}>Teacher Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChange.bind(this)}
                value={this.state.NewClass.ClassTeacher}
                name='ClassTeacher'
                />
            </InputGroup>

            
            
              <Button variant="outline-danger" onClick={this.createClass.bind(this)}>
                  Create Classroom
              </Button>
    
              
            
            
          
        </div>
      );
  }
}

export default CreateSchool;
