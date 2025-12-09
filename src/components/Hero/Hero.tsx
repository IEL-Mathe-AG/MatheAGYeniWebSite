import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  EmojiEvents,
  School,
  Article,
  People,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation('translation');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const activities = [
    {
      icon: <EmojiEvents sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('activities.events.title'),
      description: t('activities.events.description'),
    },
    {
      icon: <School sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('activities.education.title'),
      description: t('activities.education.description'),
    },
    {
      icon: <Article sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('activities.research.title'),
      description: t('activities.research.description'),
    },
    {
      icon: <People sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('activities.social.title'),
      description: t('activities.social.description'),
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgb(217, 200, 67) 0%, rgb(219, 213, 122) 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Mathematical Symbols */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            fontSize: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            pointerEvents: 'none',
            fontFamily: 'serif',
          }}
        >
          <span>∑</span>
          <span>∫</span>
          <span>π</span>
          <span>∞</span>
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '2fr 1fr',
              },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #FFFFFF 30%, #E3F2FD 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('hero.title')}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 500,
                  mb: 3,
                  opacity: 0.95,
                }}
              >
                {t('hero.subtitle')}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                  lineHeight: 1.6,
                  maxWidth: 600,
                }}
              >
                {t('hero.description')}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Activities Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            color: 'primary.main',
            fontWeight: 600,
          }}
        >
          {t('about.activities')}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 6,
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          {t('about.visionText')}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {activities.map((activity, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 30px rgba(217, 200, 67, 0.2)',
                },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  {activity.icon}
                </Box>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {activity.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {activity.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
