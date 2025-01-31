import { Grid, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ResultsStep() {
  const results = [
    { confidence: 85, status: 'success' },
    { confidence: 90, status: 'success' },
    { confidence: 45, status: 'error' },
    { confidence: 85, status: 'success' },
    { confidence: 90, status: 'success' },
    { confidence: 45, status: 'error' },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Revisa los resultados
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 2
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle2" gutterBottom>
              INE (referencia)
            </Typography>
            <Box
              sx={{
                width: '100%',
                aspectRatio: '3/4',
                bgcolor: '#f5f5f5',
                borderRadius: 1,
                mb: 1,
                overflow: 'hidden'
              }}
            />
          </Box>

          {results.map((result, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '3/4',
                  bgcolor: '#f5f5f5',
                  borderRadius: 1,
                  mb: 1,
                  position: 'relative'
                }}
              />
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}>
                {result.status === 'success' ? (
                  <CheckCircleIcon sx={{ color: '#4caf50' }} />
                ) : (
                  <CancelIcon sx={{ color: '#f44336' }} />
                )}
                <Typography variant="body2" color="text.secondary">
                  {result.confidence}% de coincidencia
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}