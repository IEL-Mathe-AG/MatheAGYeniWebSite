import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  Instagram,
  LinkedIn,
  Business,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const socialMedia = [
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://instagram.com/ielmatheag',
      color: '#E4405F',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/company/iel-mathe-ag/',
      color: '#0077B5',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 600,
            }}
          >
            {t('contact.title')}
          </Typography>
        </Box>

        {/* Social Media Section */}
        <Card
          sx={{
            background: 'linear-gradient(135deg, rgb(217, 200, 67) 0%, rgb(219, 213, 122) 100%)',
            color: 'white',
            p: 6,
            mb: 4,
            textAlign: 'center',
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mb: 4 }}>
              {t('contact.followUs')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              {socialMedia.map((social, index) => (
                <Button
                  key={index}
                  variant="contained"
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={social.icon}
                  sx={{
                    bgcolor: social.color,
                    color: 'white',
                    '&:hover': {
                      bgcolor: social.color,
                      opacity: 0.9,
                    },
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  {social.name}
                </Button>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* Sponsorship Section */}
        <Card sx={{ p: 4, textAlign: 'center' }}>
          <CardContent>
            <Business sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 2 }}>
              {t('contact.sponsorship')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
              {t('contact.sponsorshipDescription')}
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/team')}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                px: 4,
                py: 1.5,
              }}
            >
              {t('contact.contactFinancePresidents')}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact;
