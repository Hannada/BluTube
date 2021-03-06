import * as VideoUtil from "../util/videos/video_util";

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";


const receiveAllVideos = (videos) => {
    return{
        type: RECEIVE_ALL_VIDEOS,
        videos: videos,
    }
}

const receiveVideo = (video) => {
    return{
        type: RECEIVE_VIDEO,
        video: video,
    }
}

const receiveSearchResults = (videos) => {
    return {
        type: GET_SEARCH_RESULTS,
        searchedVideos: videos,
    }
}


export const getVideos = () => dispatch => {
    return VideoUtil.getVideos().then(videos => dispatch(receiveAllVideos(videos)))
}

export const getVideo = (id) => dispatch => {
    return VideoUtil.getVideo(id).then(video => dispatch(receiveVideo(video)))
}

export const postVideo = (formData) => dispatch => {
    return VideoUtil.postVideo(formData).then(video => dispatch(receiveVideo(video)))
}

export const getSearchResults = (search) => dispatch => {
    return VideoUtil.getSearchResults(search).then((videos) => dispatch(receiveSearchResults(videos)))
}