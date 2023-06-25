import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Home() {
    return (
        <Box sx={{ flexGrow: 1, alignItems: "end", justifyContent: "center" }}>
            <Typography>
                Welcome to my personal website! This is an archive of sorts for me to document the good, the bad, the exiciting, and the perplexing bits of my life.
            </Typography>
            
        </Box>
    );
}