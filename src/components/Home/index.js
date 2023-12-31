import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div data-testid="loader" className="home-container">
    <UserInfo data-testid="loader" />
    <BlogList data-testid="loader" />
  </div>
)

export default Home
