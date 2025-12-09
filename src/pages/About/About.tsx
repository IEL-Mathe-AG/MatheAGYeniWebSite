import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  School,
  EmojiEvents,
  Article,
  People,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            {t('about.title')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            {t('hero.description')}
          </Typography>
        </Box>

        {/* Vision Section */}
        <Box sx={{ mb: 8 }}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, rgb(217, 200, 67) 0%, rgb(219, 213, 122) 100%)',
              color: 'white',
              p: 4,
            }}
          >
            <CardContent>
              <Typography variant="h4" gutterBottom fontWeight={600}>
                {t('about.vision')}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.95, lineHeight: 1.7 }}>
                {t('about.visionText')}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Activities Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 6, color: 'primary.main', fontWeight: 600 }}
          >
            {t('about.activities')}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
            }}
          >
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmojiEvents sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" fontWeight={600}>
                    {t('activities.events.title')}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {t('activities.events.description')}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <School sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" fontWeight={600}>
                    {t('activities.education.title')}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {t('activities.education.description')}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Article sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" fontWeight={600}>
                    {t('activities.research.title')}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {t('activities.research.description')}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ height: '100%', p: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <People sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" fontWeight={600}>
                    {t('activities.social.title')}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {t('activities.social.description')}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
