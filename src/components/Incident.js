import React, { Component } from 'react'

export class Incident extends Component {
  render () {
    return (
      <div style={{border: '1px solid #ccc', padding:'20px', marginBottom:'5px'}}>
        <p><strong>Title</strong>: { this.props.title }</p>
        <p><strong>Assignee </strong>: { this.props.assignee }</p>
        <p><strong>Status</strong>: { this.props.status }</p>
      </div>
    )
  }
}