// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const DataOne = await response.json()
    console.log(DataOne)
    const formattedData = DataOne.map(eachUser => ({
      id: eachUser.id,
      title: eachUser.title,
      imageUrl: eachUser.image_url,
      avatarUrl: eachUser.avatar_url,
      author: eachUser.author,
      topic: eachUser.topic,
    }))
    this.setState({blogList: formattedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div data-testid="loader">
        <div data-testid="loader" className="blog-list-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            blogList.map(item => <BlogItem blogData={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}

export default BlogList
