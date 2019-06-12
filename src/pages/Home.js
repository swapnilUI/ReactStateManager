import React        from 'react'
import styled from 'styled-components'
import { Incident } from '../components/Incident'
import { connectStore } from '../lib/StateManager'

const IncidentList = styled.div`
  padding:20px;
`
class Home extends React.Component {
    render(){
      const { store } = this.props;
      const incidents = store.get('incidents');
      return (<IncidentList>
          {
            incidents && incidents.length > 0 ? <>{
              incidents.map((item, index) => <Incident key={index}
                title={item.title}
                assignee={item.assignee}
                status={item.status}
              />)
            }</> : <p>No incidents created yet!</p>
          }
        </IncidentList>)
    }
}

export default connectStore(Home);

