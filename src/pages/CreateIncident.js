import React from 'react';
import styled from 'styled-components'
import { connectStore } from '../lib/StateManager/'

const FormWrapper = styled.form`
  padding:20px;
  border:1px solid #ccc
`
const Input = styled.input`
  border:1px solid #ccc;
  padding:10px;
  border-radius:5px;
`;
const Select = styled.select`
  border:1px solid #ccc;
  padding:3px;
  border-radius:5px;
`;

const Row = styled.div`
  margin-bottom:20px;
`
const Button = styled.button`
  background:#428fde;
  border:none;
  border-radius:5px;
  color:#fff;
  padding:10px;
  cursor:pointer
`
const Label = styled.label`
  display:block;
  padding-bottom:5px;
  font-weight:bold;
`
const SuccessMessage = styled.p`
  color:#4cca5c
`
class CreateIncident extends React.PureComponent {
  state = {
    title: "",
    assignee: "",
    status: "",
    success: false
  }
  onFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onIncidentSubmit = () => {
    const incidents = this.props.store.get('incidents');
    const { title, assignee, status } = this.state;

    this.props.store.set('incidents', [...incidents, { title, assignee, status }], () => {
      this.setState({
        title: "",
        assignee: "",
        status: "",
        success: true
      });
      const me = this;
      setTimeout(function () {
        me.setState({
          success: false
        })
      }, 5000)
    })
  }
  render() {
    return (
      <FormWrapper>
        {this.state.success && <SuccessMessage>Incident successfully created.</SuccessMessage>}
        <Row><Label>Title</Label><Input autoComplete="off" type="text" value={this.state.title} name="title" onChange={this.onFieldChange} placeholder="Title" /></Row>
        <Row><Label>Assignee</Label><Input autoComplete="off" type="text" value={this.state.assignee} name="assignee" onChange={this.onFieldChange} placeholder="Assignee" /></Row>
        <Row><Label>Status</Label><Select value={this.state.status} name="status" onChange={this.onFieldChange} placeholder="Status">
          <option>Not Started</option>
          <option>In progress</option>
          <option>Done</option>
        </Select></Row>
        <Button type="button" onClick={this.onIncidentSubmit}>Submit</Button>
      </FormWrapper>
    )
  }
}

export default connectStore(CreateIncident)