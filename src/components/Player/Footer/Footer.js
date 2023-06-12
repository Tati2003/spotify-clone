import React from 'react';
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img
                className='footer_albumLogo' 
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0928078-67fd-43f1-b528-06ee6a3112e5-profile_image-70x70.png" alt='' />
                <div className='footer_songInfo'>
                    <h4>Montagem PR</h4>
                    <p>S3BZS</p>
                </div>
            </div>
            <div className='footer_center'>

                <ShuffleRoundedIcon className='footer_green' />
                <SkipPreviousIcon className='footer_icon' />
                <PlayCircleOutlineOutlinedIcon fontSize="large" className='footer_icon' />
                <SkipNextIcon className='footer_icon' />
                <RepeatIcon className='footer_green' />
            </div>
            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer