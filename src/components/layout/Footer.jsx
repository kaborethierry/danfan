'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { Phone, Email, WhatsApp, LocationOn } from '@mui/icons-material';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'var(--color-forest)',
        color: 'var(--color-white)',
        py: { xs: 'var(--spacing-xl)', md: 'var(--spacing-xl)' },
        px: { xs: 'var(--spacing-md)', md: 'var(--spacing-md)' },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 0, md: 2 } }}>
        <Grid container spacing={4}>
          {/* Colonne 1: Logo & Description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'var(--font-primary)',
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--color-white)',
                mb: 'var(--spacing-md)',
              }}
            >
              DanFaniment
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '14px',
                lineHeight: 1.7,
                mb: 'var(--spacing-sm)',
              }}
            >
              Pagnes tissés 100% coton, confection de tenues.
              <br />
              Made in Burkina Faso
            </Typography>
            <Typography
              sx={{
                color: 'var(--color-accent)',
                fontSize: '13px',
                fontStyle: 'italic',
              }}
            >
              De la valeur à notre fierté
            </Typography>
          </Grid>

          {/* Colonne 2: Liens rapides */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-primary)',
                fontSize: '18px',
                color: 'var(--color-white)',
                mb: 'var(--spacing-md)',
              }}
            >
              Navigation
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {['Accueil', 'Boutique', 'Collections', 'À propos', 'Contact'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 'var(--spacing-sm)' }}>
                  <MuiLink
                    component={Link}
                    href={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace('à ', 'a-')}`}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color var(--transition)',
                      '&:hover': {
                        color: 'var(--color-accent)',
                      },
                    }}
                  >
                    {item}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Colonne 3: Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'var(--font-primary)',
                fontSize: '18px',
                color: 'var(--color-white)',
                mb: 'var(--spacing-md)',
              }}
            >
              Contact
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', mb: 'var(--spacing-md)' }}>
                <Phone sx={{ fontSize: '18px', color: 'var(--color-accent)' }} />
                <MuiLink
                  href="tel:+22674504141"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color var(--transition)',
                    '&:hover': {
                      color: 'var(--color-accent)',
                    },
                  }}
                >
                  +226 74 50 41 41
                </MuiLink>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', mb: 'var(--spacing-md)' }}>
                <Email sx={{ fontSize: '18px', color: 'var(--color-accent)' }} />
                <MuiLink
                  href="mailto:danfaniment23@gmail.com"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color var(--transition)',
                    '&:hover': {
                      color: 'var(--color-accent)',
                    },
                  }}
                >
                  danfaniment23@gmail.com
                </MuiLink>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', mb: 'var(--spacing-md)' }}>
                <WhatsApp sx={{ fontSize: '18px', color: '#25D366' }} />
                <MuiLink
                  href="https://wa.me/22674504141"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color var(--transition)',
                    '&:hover': {
                      color: 'var(--color-accent)',
                    },
                  }}
                >
                  WhatsApp
                </MuiLink>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', mb: 'var(--spacing-md)' }}>
                <LocationOn sx={{ fontSize: '18px', color: 'var(--color-accent)' }} />
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px',
                  }}
                >
                  Burkina Faso
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Séparateur */}
        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            my: 'var(--spacing-lg)',
            height: '1px',
            bgcolor: 'rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            &copy; {currentYear} DanFaniment. Tous droits réservés.
          </Typography>
          <Typography
            sx={{
              mt: 'var(--spacing-xs)',
              fontSize: '11px',
              color: 'var(--color-accent)',
            }}
          >
            Made in Burkina Faso
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}