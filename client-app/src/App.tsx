
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'

function App() {

  const [activities,setActivities] = useState([]) //hook "use state to set or upate the state"

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(responses => {
      setActivities(responses.data)
    })
  },[]) //[] shows that it has empty depencencies,and it only call once

  return (
 <div>
<Header as = 'h2' icon ='users' content='Reactivities'/>
<List>
 {activities.map((activity: any) => (
  <List.Item key={activity.Id}>
   {activity.title}
  </List.Item>
 ))
 }
</List>
 </div>
    
  )
}

export default App
