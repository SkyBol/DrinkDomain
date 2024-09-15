import { AppBar, Box } from '@mui/material';
import NewMenu from './NewMenu'; 

export default function SearchAppBar() {
    return (
        <Box 
            sx={{ 
                width: '100%', 
                overflowX: 'hidden', 
                
                position: 'relative', 
                zIndex: 1100 
            }}
        >
            <AppBar 
                position="fixed" 
                sx={{ 
                    width: '100%',
                    top: 0,
                    left: 0,
                    right: 0
                }} 
            >
                <NewMenu />
            </AppBar>
        </Box>
    );
}
