import { useState } from 'react';
import { 
  Box, 
  Typography,
  Step,
  Stepper,
  StepLabel,
  Container
} from '@mui/material';
import Image from 'next/image';
import UploadStep from './steps/UploadStep';
import CameraStep from './steps/CameraStep';
import ResultsStep from './steps/ResultsStep';

export default function SeguimientoVital() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: 'Sube una fotografía de la INE del beneficiario o enciende la cámara y escanea su identificación',
      content: <UploadStep onComplete={() => setActiveStep(1)} />
    },
    {
      label: 'Autoriza el uso de la cámara, y sigue las instrucciones',
      content: <CameraStep onComplete={() => setActiveStep(2)} />
    },
    {
      label: 'Revisa los resultados',
      content: <ResultsStep />
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Image
          src="/logo.png"
          alt="Grupo Salinas"
          width={150}
          height={50}
          priority
        />
        <Typography variant="h4" component="h1">
          Seguimiento Vital
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 'normal' }}>
          Bienvenido a nuestro portal Seguimiento Vital
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sigue las instrucciones para obtener tu validación.
        </Typography>
      </Box>

      <Box sx={{
        bgcolor: 'background.paper',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <Stepper 
          activeStep={activeStep} 
          orientation="vertical"
          sx={{
            '& .MuiStepLabel-label': {
              fontSize: '1rem',
              fontWeight: activeStep === 0 ? 500 : 400,
            },
            '& .MuiStepContent-root': {
              borderLeft: '1px solid #eaeaea',
              marginLeft: 2.5,
              paddingLeft: 3,
            }
          }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography variant="body1" sx={{ fontWeight: activeStep === index ? 500 : 400 }}>
                  {step.label}
                </Typography>
              </StepLabel>
              {activeStep === index && (
                <Box sx={{ p: 3, ml: 2.5 }}>
                  {step.content}
                </Box>
              )}
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
}