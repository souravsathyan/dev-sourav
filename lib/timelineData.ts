export type TimelineData = {
  text: string
  startDate: string
  location: string
  endDate: string
  position: string
  achievement?: string[]
  skills: string[]
  totalExp?: string
}

export const timelineData: TimelineData[] = [
  {
    text: 'Fernweh DomainEnroll Pvt Ltd.',
    position: 'Full Stack Developer',
    location: 'Kochi, Ernakulam, Kerala',
    achievement: [
      'Gained expertise in React Native, leading to the end-to-end development of two new mobile applications and contributions to five others',
      'Cross-functional collaboration with the digital marketing team for Instagram Reel content creation.'
    ],
    startDate: 'February 2024',
    endDate: 'present',
    skills: ['React Native', 'MERN', 'Git Version Control']
  },
  {
    text: 'Freelance Developer',
    position: 'Full Stack Developer',
    location: 'Kochi, Ernakulam, Kerala',
    startDate: 'March 2025',
    endDate: 'present',
    skills: ['React Native', 'MERN']
  },
  {
    text: 'Brototype',
    position: 'Web Developer Trainee',
    startDate: 'October 2022',
    endDate: 'October 2023',
    totalExp: '1 year',
    location: 'Ernakulam, Kerala',
    achievement: [
      'Developed Ecommerce Web Application which offers a seamless journey for users—complete with a sleek shopping cart, wishlists, secure order placement, and hassle-free online payments',
      'Admin Dashboard for Ecommerce App '
    ],
    skills: ['MEARN', 'Html', 'CSS', 'JS', 'TypeScript']
  }
]
