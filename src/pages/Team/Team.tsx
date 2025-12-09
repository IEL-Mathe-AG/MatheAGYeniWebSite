import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  IconButton,
} from '@mui/material';
import { Email } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface TeamMember {
  name: string;
  departmentKey: string;
  period: string;
  email: string;
  photo?: string;
}

const Team: React.FC = () => {
  const { t } = useTranslation('translation');

  const teamMembers: TeamMember[] = [
    {
      name: 'Osman Sınır',
      departmentKey: 'president',
      period: '27',
      email: 'snrosman@yahoo.com',
      photo: '/osman-sinir.jpg',
    },
    {
      name: 'Derin Ünlü',
      departmentKey: 'president',
      period: '27',
      email: 'deirn160808@outlook.com',
      photo: '/derin-unlu.jpg',
    },
    {
      name: 'Ayşe Melike Acar',
      departmentKey: 'president',
      period: '27',
      email: '',
    },
    {
      name: 'Emir Kaan Özdemir',
      departmentKey: 'academyPresident',
      period: '28',
      email: 'emirkaanozdemir@gmail.com',
      photo: '/emir-kaan.jpg',
    },
    {
      name: 'Eymen Arslan',
      departmentKey: 'financePresident',
      period: '28',
      email: 'eymen33arslan@gmail.com',
      photo: '/eymen-arslan.jpg',
    },
    {
      name: 'Gözde Erim',
      departmentKey: 'organizationPresident',
      period: '28',
      email: '',
    },
    {
      name: 'Ece Eroğul',
      departmentKey: 'prPresident',
      period: '28',
      email: '',
    },
    {
      name: 'Nisa Ecrin Korkmaz',
      departmentKey: 'prPresident',
      period: '28',
      email: '',
    },
    {
      name: 'Mehmet Kamil İman',
      departmentKey: 'itPresident',
      period: '27',
      email: 'imanmehmetkamil@gmail.com',
      photo: '/kamil.jpg',
    },
  ];

  const getDepartmentColor = (departmentKey: string) => {
    if (departmentKey === 'president') return 'error';
    if (departmentKey === 'academyPresident') return 'primary';
    if (departmentKey === 'financePresident') return 'secondary';
    if (departmentKey === 'organizationPresident') return 'success';
    if (departmentKey === 'prPresident') return 'warning';
    if (departmentKey === 'itPresident') return 'info';
    return 'default';
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
            {t('team.title')}
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            {t('team.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            height: { xs: '600px', md: '800px' },
            overflow: 'hidden',
            mb: 6,
            '&:hover': {
              '& .scroll-animation': {
                animationPlayState: 'paused',
              },
            },
          }}
        >
          <Box
            className="scroll-animation"
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
              animation: 'scrollUp 30s linear infinite',
            }}
          >
            {teamMembers.concat(teamMembers).map((member, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: 6,
                    zIndex: 10,
                    position: 'relative',
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Avatar
                    src={member.photo}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      bgcolor: 'primary.main',
                      fontSize: '3rem',
                    }}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </Avatar>

                  <Typography variant="h6" gutterBottom fontWeight={600} sx={{ mb: 1 }}>
                    {member.name}
                  </Typography>

                  <Chip
                    label={t(`team.departments.${member.departmentKey}`)}
                    color={getDepartmentColor(member.departmentKey) as any}
                    size="small"
                    sx={{ mb: 1 }}
                  />

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {t('team.period')}: {member.period}
                  </Typography>

                  {member.email && (
                    <Box sx={{ mt: 'auto', pt: 2 }}>
                      <IconButton
                        component="a"
                        href={`mailto:${member.email}`}
                        sx={{
                          color: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      >
                        <Email />
                      </IconButton>
                      <Typography
                        variant="caption"
                        display="block"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {member.email}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
