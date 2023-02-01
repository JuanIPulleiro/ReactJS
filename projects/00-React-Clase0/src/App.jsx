import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'

export function App() {

  return (
    <section className="App">
    <TwitterFollowCard userName="midudev">
    Miguel Angel Duran
    </TwitterFollowCard>

    <TwitterFollowCard userName="nachoaoe">
    Ignacio AOE
    </TwitterFollowCard>

    <TwitterFollowCard userName="demonslayer">
    Demon Slayer
    </TwitterFollowCard>
    </section>
  )
}