import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('translation');

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: { xs: 1, sm: 1.5 },
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
          }}
        >
          <Typography component="span" sx={{ opacity: 0.9 }}>
            {t('footer.madeBy')}
          </Typography>
          <MuiLink
            href="https://github.com/emirkaanozdemr"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderBottomColor: 'white',
                opacity: 1,
              },
            }}
          >
            @Emir Kaan Özdemir
          </MuiLink>
          <Typography component="span" sx={{ opacity: 0.9 }}>
            {t('footer.and')}
          </Typography>
          <MuiLink
            href="https://github.com/ibrahim1metin"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              fontWeight: 600,
              textDecoration: 'none',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderBottomColor: 'white',
                opacity: 1,
              },
            }}
          >
            @İbrahim Metin Dönmez
          </MuiLink>
          <Typography component="span" sx={{ opacity: 0.9 }}>
            {t('footer.by')}
          </Typography>
          <Box
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 0.75 },
              mx: { xs: 0.5, sm: 1 },
              bgcolor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.3)',
              fontFamily: 'serif',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              fontWeight: 600,
              letterSpacing: '0.05em',
              backdropFilter: 'blur(10px)',
            }}
          >
            φ = (1 + √5) / 2
          </Box>
          <Typography component="span">.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
