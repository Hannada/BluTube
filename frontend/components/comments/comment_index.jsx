import React from 'react'
import { getComments, clearComments } from '../../actions/comments'
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item'
import CommentForm from './comment_form'


const msp = (state) => {
    let comments = Object.values(state.comments)
    return {
        comments: comments
    }
}

const mdp = dispatch => {
    return {
        getComments: videoId => dispatch(getComments(videoId)),
        clearComments: () => dispatch(clearComments())
    }
}

class CommentIndex extends React.Component{

    componentDidUpdate(prevProps){
        if(this.props.comments.length !== prevProps.comments.length){
            let videoId = this.props.match.params.videoId
            this.props.getComments(videoId)
        }
        if(prevProps.match.params.videoId !== this.props.match.params.videoId){
            this.props.clearComments();
            let videoId = this.props.match.params.videoId
            this.props.getComments(videoId)
        }
    }
    componentDidMount(){
        let videoId = this.props.match.params.videoId
        this.props.clearComments();
        this.props.getComments(videoId)
    }
    render(){
        let comments 
        this.props.comments ? comments = this.props.comments : comments = [];
        let commentDisplay = comments.map(c => {
            return (
                <CommentIndexItem
                    key={`${c.id}`}
                    comment={c}
                />
            )
        })

        return(
            <div>
                <div className="comment-heading">
                    {comments.length} Comments
                </div>
                <CommentForm/>
                <ul className="comment-ul">
                    {commentDisplay}
                </ul>
            </div>
        )
    }
}

export default withRouter(connect(msp, mdp)(CommentIndex))