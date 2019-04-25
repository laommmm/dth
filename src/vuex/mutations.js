export default {
    loadingSet(state, options) {
        state.loading = options;
    },
    playListEdit(state, options) {
        state.playList = options;
    },
    courseListEdit(state, options) {
        state.courseList = options;
    },
    setNickName(state, options) {
        state.nickName = options;
    },
    playerShowEdit(state, options) {
        state.playerShow = options;
    },
    setUserFace(state, options) {
        state.userFace = options;
    },
    setMyPlanList(state, options) {
        state.planList = options;
    },
    setMobile(state, options) {
        state.mobile = options;
    }
}
