import { SiHp, SiDell } from 'react-icons/si'
import { GiClapperboard, GiProgression } from 'react-icons/gi'
import pucrs from '../../../assets/pucrs.svg'
import ages from '../../../assets/ages.jpg'
export const projects = [
  {
    image: <SiHp color='#0096D6' />,
    title: 'HP Inc.',
    subtitle: 'subtitle',
    description: 'desc.hp'
  },
  {
    image: <SiDell color='#007DB8' />,
    title: 'Dell Inc.',
    subtitle: 'subtitle',
    description: 'desc.dell'
  },
  {
    image: <img src={pucrs} />,
    title: 'PUCRS',
    subtitle: 'desc.research_intern',
    description: 'desc.intern'
  },
  {
    image: <GiClapperboard color='#FF7F00' />,
    title: 'Gina Tells',
    subtitle: 'desc.personal_project',
    description: 'desc.ginatells'
  },
  {
    image: <GiProgression  color='#0E6B0E' />,
    title: 'Software KPIs',
    subtitle: 'desc.personal_project',
    description: 'desc.kpis'
  },
  {
    image: <img src={ages} />,
    title: 'AGES',
    subtitle: 'desc.nonprofit_engineer',
    description: 'desc.ages'
  }
]
