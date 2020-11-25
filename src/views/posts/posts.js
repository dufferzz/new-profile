import React, { Component } from 'react'
import api from '../../_services/api'

import Card from '../../components/card/card'
import Error from '../../components/error/error'
import Loading from '../../components/loading/loading'

// Need to add bouncy bottom scrolling!
// I know it isnt called that.. heh

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: null,
            posts: [],
            isLoading: false,
            failed: false,
            errorMessage: null,
        }
    }

    getPosts = async () => {
        const { src } = this.props
        const imageLoader = new Image()

        imageLoader.src = src
        imageLoader.onload = () => {
            this.setState({ src, isLoading: true, failed: false })
        }

        await api
            .getPosts()
            .then((posts) => {
                this.setState({
                    posts: posts.data,
                    isLoading: false,
                    failed: false,
                    errorMessage: null,
                })
            })
            .catch((err) => {
                this.setState({ failed: true, errorMessage: err.message })
                console.log(err.message)
            })
    }

    componentDidMount = () => {
        this.getPosts()
    }

    render() {
        const { posts, isLoading, failed } = this.state
        if (failed) {
            return (
                <Error
                    message="Failed to load posts.."
                    error={this.state.errorMessage}
                />
            )
        }
        if (isLoading) {
            return <Loading />
        }
        return (
            <div>
                {posts.map((post) => (
                    <Card
                        key={post._id}
                        heading={post.title}
                        background={post.image}
                        subheading={post.content}
                        subsubheading={post.date}
                    />
                ))}
            </div>
        )
    }
}
