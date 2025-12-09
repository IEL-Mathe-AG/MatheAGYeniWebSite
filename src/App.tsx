import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Fade } from '@mui/material';
import { theme } from './theme/theme';
import './i18n';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Team from './pages/Team/Team';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde ve minimum 1.5 saniye sonra loading'i kapat
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Sayfa yüklendiğinde de kontrol et
    if (document.readyState === 'complete') {
      setTimeout(() => setLoading(false), 1500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => setLoading(false), 1500);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'background.default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            background: 'linear-gradient(135deg, rgb(217, 200, 67) 0%, rgb(219, 213, 122) 100%)',
          }}
        >
          <Fade in={loading} timeout={500}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Glow effect */}
              <Box
                component="img"
                src="/Mathe-AG Logo.svg"
                alt="IEL MATHE AG Logo"
                sx={{
                  position: 'absolute',
                  height: { xs: 200, md: 300 },
                  width: 'auto',
                  opacity: 0.3,
                  filter: 'blur(20px)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              {/* Main logo */}
              <Box
                component="img"
                src="/Mathe-AG Logo.svg"
                alt="IEL MATHE AG Logo"
                sx={{
                  height: { xs: 180, md: 280 },
                  width: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  animation: 'logoFloat 3s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))',
                }}
              />
            </Box>
          </Fade>
        </Box>
      )}
      <Box
        sx={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
