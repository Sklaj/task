
export const selectedVideoReducer = function (selectedVideo = "", action: any) {
    switch (action.type) {
        case "selected/UPDATE":
            return {
                selectedVideo: action.data
            };
        default:
            return selectedVideo;
    }
}
