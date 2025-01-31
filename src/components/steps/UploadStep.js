import { useState } from 'react';
import { 
  Button, 
  Grid, 
  Box,
  Typography,
  CircularProgress,
  Alert
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export default function UploadStep({ onComplete }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileSelect = (event) => {
    setError('');
    const file = event.target.files[0];
    
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Por favor selecciona un archivo de imagen válido');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('El archivo es demasiado grande. El tamaño máximo es 5MB');
        return;
      }

      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (onComplete) {
        onComplete();
      }
    } catch (err) {
      setError('Error al subir el archivo. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{ 
              height: 48,
              justifyContent: 'center',
              minWidth: 200
            }}
          >
            Selecciona un archivo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleFileSelect}
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            startIcon={<PhotoCamera />}
            fullWidth
            sx={{ 
              height: 48,
              justifyContent: 'center',
              minWidth: 200
            }}
          >
            Encender cámara y escanear
          </Button>
        </Grid>
      </Grid>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {preview && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle2" gutterBottom>
            Vista previa:
          </Typography>
          <Box
            sx={{
              width: '100%',
              maxWidth: 300,
              height: 200,
              border: '1px solid #eaeaea',
              borderRadius: 1,
              overflow: 'hidden',
              position: 'relative',
              mb: 2
            }}
          >
            <img
              src={preview}
              alt="Preview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>
          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={loading}
            sx={{
              bgcolor: '#FFC901',
              color: '#000',
              '&:hover': {
                bgcolor: '#e6b500'
              }
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: '#000' }} />
            ) : (
              'Continuar'
            )}
          </Button>
        </Box>
      )}
    </Box>
  );
}