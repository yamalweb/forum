import {createStore} from "vuex";
import sourceData from "@/data"

export default createStore({
    state: {
        ...sourceData,
        authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
    },
    getters: {
        authUser: state => {
            const user = state.users.find(user => user.id === state.authId)
            if (!user) return null
            return {
                ...user,
                get posts() {
                    return state.posts.filter(post => post.userId === user.id)
                },
                get postsCount() {
                    return this.posts.length
                },
                get threads() {
                    return state.threads.filter(thread => thread.userId === user.id)
                },
                get threadsCount() {
                    return this.threads.length
                }
            }
        }
    },
    actions: {
        createPost({commit, state}, post) {
            post.id = 'ggqq' + Math.random()
            post.userId = state.authId
            post.publishedAt = Math.floor(Date.now() / 1000)
            commit('setPost', {post})
            commit('appendPostToThread', {postId: post.id, threadId: post.threadId}) // append post to thread
        },
        updateUser({commit}, user) {
            commit('setUser', {user, userId: user.id})
        },
        async createThread({commit, state, dispatch}, {text, title, forumId}) {
            const id = 'ggqq' + Math.random()
            const userId = state.authId
            const publishedAt = Math.floor(Date.now() / 1000)
            const thread = {forumId, title, publishedAt, userId, id}
            commit('setThread', {thread})
            commit('appendThreadToUser',  {userId, threadId: id})
            commit('appendThreadToForum',  {threadId: id, forumId})
            dispatch('createPost', {text, threadId: id})

            return state.threads.find(thread => thread.id === id)
        },

        async updateThread({commit, state}, {text, title, id}) {

            const thread = state.threads.find(thread => thread.id === id)
            const post = state.posts.find(post => post.id === thread.posts[0])
            const newThread = {...thread, title}
            const newPost = {...post, text}

            commit('setThread', {thread: newThread})
            commit('setPost', {post: newPost})

            return newThread
        }
    },
    mutations: {
        setPost(state, {post}) {
            const postIndex = state.posts.findIndex(p => p.id === post.id)
            if(post.id && postIndex !== -1){
                state.posts[postIndex] = post
            }else{
                state.posts.push(post)
            }
        },
        setThread(state, {thread}) {
            const threadIndex = state.threads.findIndex(t => t.id === thread.id)
            if(thread.id && threadIndex !== -1){
                state.threads[threadIndex] = thread
            }else{
                state.threads.push(thread)
            }
        },
        setUser(state, {user, userId}) {
            const userIndex = state.users.findIndex(user => user.id === userId)
            state.users[userIndex] = user
        },
        appendPostToThread(state, {postId, threadId}) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts = thread.posts || []
            thread.posts.push(postId)
        },
        appendThreadToForum(state, {threadId, forumId}) {
            const forum = state.forums.find(forum => forum.id === forumId)
            forum.forums = forum.forums || []
            forum.forums.push(threadId)
        },
        appendThreadToUser(state, {userId, threadId}) {
            const user = state.users.find(user => user.id === userId)
            user.users = user.users || []
            user.users.push(threadId)
        },

    }
})


