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
            //commit('appendPostToThread', {postId, threadId: id})
            return state.threads.find(thread => thread.id === id)
        }
    },
    mutations: {
        setPost(state, {post}) {
            state.posts.push(post)
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
        setThread(state, {thread}) {
            state.threads.push(thread)
        },
    }
})


