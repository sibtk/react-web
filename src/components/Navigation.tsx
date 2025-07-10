import React, { useEffect, useState, useRef } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [['Home', 'home'], ['Expertise', 'expertise'], ['History', 'history'], ['Projects', 'projects'], ['Contact', 'contact'], ['Resume', 'resume']];
const BRAND = 'Sibtain Khan'; // Or replace with logo if available

function Navigation({parentToChild, modeChange}: any) {
  const {mode} = parentToChild;
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('expertise');

  // Intersection Observer for section highlighting
  useEffect(() => {
    if (location.pathname !== '/') return;
    const sectionIds = navItems.map(item => item[1]).filter(id => id !== 'resume');
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    let ticking = false;
    let lastActive = '';
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const visible = entries
              .filter(e => e.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible.length > 0) {
              const topMost = visible[0].target as HTMLElement;
              const id = topMost.id;
              if (id !== lastActive) {
                setActiveSection(id);
                lastActive = id;
              }
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      {
        root: null,
        rootMargin: '-120px 0px 0px 0px',
        threshold: [0.3, 0.5, 0.7, 1.0],
      }
    );
    sections.forEach(section => observer.observe(section));
    // Listen for scroll to highlight Home at the very top
    const onScroll = () => {
      const expertiseSection = document.getElementById('expertise');
      if (expertiseSection) {
        const buffer = window.innerHeight * 0.8; // 80% of viewport height
        if (window.scrollY < expertiseSection.offsetTop - buffer) {
          setActiveSection('home');
          lastActive = 'home';
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Only for sticky nav background
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper to scroll to section on the homepage
  const goToSection = (section: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      if (section === 'home') {
        if (location.pathname !== '/') {
          navigate('/');
          setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }, 500);
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
        return;
      }
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      } else {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 200);
  };

  const isResumeActive = location.pathname === '/resume';
  const isAboutActive = location.pathname === '/about';

  const navTextColor = mode === 'dark' ? '#f8f9fa' : '#181c24';
  const navBgColor = mode === 'dark' ? '#181c24' : '#fff';

  const drawer = (
    <Box className="navigation-bar-responsive" sx={{ textAlign: 'center', p: 0, background: navBgColor, color: navTextColor }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 2, borderBottom: '1px solid #eee' }}>
        <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.5px', color: navTextColor }}>{BRAND}</span>
        <IconButton aria-label="close drawer" onClick={handleDrawerToggle} size="large" sx={{ color: navTextColor }}>
          <span style={{ fontSize: '2rem', fontWeight: 700, color: navTextColor }}>&times;</span>
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ pt: 0 }}>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            {item[1] === 'resume' ? (
              <ListItemButton
                sx={{ textAlign: 'center', backgroundColor: isResumeActive ? (mode === 'dark' ? '#23244a' : '#f0f0f0') : 'transparent', fontFamily: 'Lato, sans-serif', textTransform: 'none', fontSize: '1.15rem', minHeight: 56, color: `${navTextColor} !important` }}
                component={Link}
                to="/resume"
                className={isResumeActive && !isAboutActive ? 'active-nav' : ''}
                onClick={() => { setMobileOpen(false); }}
              >
                <ListItemText primary={item[0]} primaryTypographyProps={{ style: { color: navTextColor, fontWeight: 500 } }} />
              </ListItemButton>
            ) : (
              <ListItemButton
                sx={{ textAlign: 'center', backgroundColor: !isResumeActive && activeSection === item[1] && !isAboutActive ? (mode === 'dark' ? '#23244a' : '#f0f0f0') : 'transparent', fontFamily: 'Lato, sans-serif', textTransform: 'none', fontSize: '1.15rem', minHeight: 56, color: `${navTextColor} !important` }}
                onClick={() => goToSection(item[1])}
                className={!isResumeActive && activeSection === item[1] && !isAboutActive ? 'active-nav' : ''}
              >
                <ListItemText primary={item[0]} primaryTypographyProps={{ style: { color: navTextColor, fontWeight: 500 } }} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar' sx={{ minHeight: { xs: 56, sm: 64 }, px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.5px', marginRight: 8, color: navTextColor }}>{BRAND}</span>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, fontSize: '2rem' }}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </Box>
          {mode === 'dark' ? (
            <LightModeIcon onClick={() => modeChange()}/>
          ) : (
            <DarkModeIcon onClick={() => modeChange()}/>
          )}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              item[1] === 'resume' ? (
                <Button
                  key={item[0]}
                  component={Link}
                  to="/resume"
                  className={isResumeActive && !isAboutActive ? 'active-nav' : ''}
                  sx={{ color: isResumeActive && !isAboutActive ? '#FFD700' : '#fff', fontFamily: 'Lato, sans-serif', textTransform: 'none', fontSize: '1.1rem' }}
                >
                  {item[0]}
                </Button>
              ) : (
                <Button
                  key={item[0]}
                  onClick={() => goToSection(item[1])}
                  className={!isResumeActive && activeSection === item[1] && !isAboutActive ? 'active-nav' : ''}
                  sx={{ color: !isResumeActive && activeSection === item[1] && !isAboutActive ? '#FFD700' : '#fff', fontFamily: 'Lato, sans-serif', textTransform: 'none', fontSize: '1.1rem' }}
                >
                  {item[0]}
                </Button>
              )
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              maxWidth: '100vw',
              background: mode === 'dark' ? '#181c24' : '#fff',
              color: mode === 'dark' ? '#f8f9fa' : '#181c24',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;