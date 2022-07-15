import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title='' }) => {
    return (
        <Grid
            container spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >
            <Grid item
                className="box-shadow animate__animated animate__fadeIn"
                xs={3}
                sx={{ 
                    width: {md: '60vh'},
                    backgroundColor: 'white', 
                    padding: 3, 
                    borderRadius: 2 
                    }}
                >
            
                <Typography variant='h4' sx={{ mb: 2 }}>{title}</Typography>

                { children }
            </Grid>
        </Grid>
    )
}
