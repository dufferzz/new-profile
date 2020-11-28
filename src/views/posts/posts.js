import React, { Component } from 'react'
import api from '../../_services/api'

import Card from '../../components/card/card'
import Error from '../../components/error/error'
import Loading from '../../components/loading/loading'
import NoMoreData from '../../components/noMoreData/noMoreData'

export default class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: null,
            posts: [],
            isLoading: false,
            failed: false,
            errorMessage: null,
            page: 1,
            prevY: 0,
            hasMoreData: true,
        }
    }

    getPosts = async () => {
        if (this.state.hasMoreData === true) {
            await api
                .getPosts(this.state.page)
                .then((posts) => {
                    this.setState({
                        posts: [...this.state.posts, ...posts.data.docs],
                        isLoading: false,
                        hasMoreData: posts.data.hasNextPage,
                        failed: false,
                        errorMessage: null,
                        page: posts.data.page,
                    })
                })
                .catch((err) => {
                    this.setState({ failed: true, errorMessage: err.message })
                    console.log(err.message)
                })
        } else {
            this.setState({ hasMoreData: false })
        }
    }

    componentDidMount = () => {
        this.getPosts()
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        }

        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        )
        this.observer.observe(this.loadingRef)
    }

    handleObserver(entities, observer) {
        if (this.state.hasMoreData === true) {
            const y = entities[0].boundingClientRect.y
            if (this.state.prevY > y) {
                const nextpage = (this.state.page += 1)
                this.getPosts(nextpage)
                this.setState({ page: nextpage })
            }
            this.setState({ prevY: y })
        }
    }

    render() {
        const {
            posts,
            isLoading,
            failed,
            hasMoreData,
            errorMessage,
        } = this.state
        return (
            <div>
                {failed && (
                    <Error
                        message="Failed to load posts.."
                        error={errorMessage}
                    />
                )}

                {isLoading && <Loading />}

                {posts.map((post) => (
                    <Card
                        key={post._id}
                        heading={post.title}
                        background={post.image}
                        subheading={post.content}
                        subsubheading={post.date}
                    />
                ))}

                <div ref={(loadingRef) => (this.loadingRef = loadingRef)}></div>
                {!hasMoreData ? (
                    <NoMoreData />
                ) : (
                    <h1
                        style={{
                            width: 100 + '%',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 1.2 + 'rem',
                        }}
                    >
                        Loading...&nbsp;
                    </h1>
                )}
            </div>
        )
    }
}
