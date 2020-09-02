import React from "react";
import {connect} from "react-redux";

const SongDetail = ({selectedSong}) => {
    if (!selectedSong) {
        return <div>Select song</div>
    }
    return (
        <h3>
            Selected Song:
            <div>
                {selectedSong.title}
                <br/>
                {selectedSong.duration}
            </div>
        </h3>
    )
}
const mapStateToProps = state => ({
    selectedSong: state.selectedSong
})
export default connect(mapStateToProps)(SongDetail)