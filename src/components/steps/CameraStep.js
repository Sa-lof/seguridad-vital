import { Box, Typography } from '@mui/material';
import { Videocam } from '@mui/icons-material';

export default function CameraStep() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" gutterBottom>
          Instrucciones:
        </Typography>
        <ol style={{ paddingLeft: '1.5rem', margin: 0 }}>
          <li>Instrucción 1</li>
          <li>Instrucción 2</li>
          <li>Instrucción 3</li>
          <li>Instrucción 4</li>
        </ol>
      </Box>

      <Box 
        sx={{ 
          width: '100%',
          height: 400,
          bgcolor: '#fff',
          border: '1px solid #eaeaea',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Vista de la cámara
        </Typography>
        <Videocam sx={{ fontSize: 48, color: '#ccc' }} />
      </Box>
    </Box>
  );
}