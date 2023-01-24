import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://twitter.com/SemirPljakic',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://sr-rs.facebook.com/semir.pljakic',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://rs.linkedin.com/in/semir-pljakic-121887233?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F',
    icon: <FaLinkedin />,
  },
 {
    id: 4,
    url: 'https://github.com/semirpljakic',
    icon: <FaGithub />,
  },
];
