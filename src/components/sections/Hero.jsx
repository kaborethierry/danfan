'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Box, Typography, Container } from '@mui/material';
import { WhatsApp, ShoppingBag } from '@mui/icons-material';

const slogans = [
  { text: "L'élégance du Faso Danfani", color: "white" },
  { text: "100% coton, 100% Burkinabè", color: "accent" },
  { text: "De la valeur à notre fierté", color: "tagline" },
];

export default function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(192, 57, 43, 0.75), rgba(45, 106, 31, 0.6))',
        }}
      />

      {/* Content */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 'var(--spacing-xl)', md: 'var(--spacing-xl)' },
          px: { xs: 'var(--spacing-md)', md: 'var(--spacing-md)' },
        }}
      >
        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'var(--font-primary)',
            fontSize: { xs: '48px', md: '72px' },
            fontWeight: 700,
            color: 'var(--color-white)',
            mb: 'var(--spacing-lg)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          DanFaniment
        </Typography>

        {/* Slogan Container */}
        <Box
          sx={{
            minHeight: '80px',
            mb: 'var(--spacing-xl)',
            position: 'relative',
          }}
        >
          {slogans.map((slogan, index) => (
            <Typography
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                fontSize: { xs: '18px', md: '24px' },
                fontWeight: 500,
                opacity: index === currentSlogan ? 1 : 0,
                transition: 'opacity 0.5s ease',
                margin: 0,
                color:
                  slogan.color === 'accent'
                    ? 'var(--color-accent)'
                    : slogan.color === 'tagline'
                    ? 'var(--color-tagline)'
                    : 'var(--color-white)',
              }}
            >
              {slogan.text}
            </Typography>
          ))}
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            mt: 'var(--spacing-lg)',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
          }}
        >
          <Button
            component={Link}
            href="/boutique"
            variant="contained"
            startIcon={<ShoppingBag />}
            sx={{
              bgcolor: 'var(--color-primary)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-full)',
              fontSize: '16px',
              fontWeight: 600,
              padding: '14px 32px',
              transition: 'var(--transition)',
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '280px', sm: 'none' },
              '&:hover': {
                bgcolor: 'var(--color-secondary)',
                transform: 'translateY(-2px)',
                boxShadow: 'var(--shadow-md)',
              },
            }}
          >
            Voir la boutique
          </Button>

          <Button
            component="a"
            href="https://wa.me/22674504141"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<WhatsApp />}
            sx={{
              bgcolor: 'transparent',
              border: '2px solid var(--color-white)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-full)',
              fontSize: '16px',
              fontWeight: 600,
              padding: '14px 32px',
              transition: 'var(--transition)',
              width: { xs: '100%', sm: 'auto' },
              maxWidth: { xs: '280px', sm: 'none' },
              '&:hover': {
                bgcolor: 'var(--color-white)',
                color: 'var(--color-primary)',
                transform: 'translateY(-2px)',
                border: '2px solid var(--color-white)',
              },
            }}
          >
            Commander via WhatsApp
          </Button>
        </Box>
      </Container>
    </Box>
  );
}