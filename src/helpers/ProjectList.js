import hipsterPlaceholder from '../images/hipster-paul.png'
import budgetlol from '../images/budgetlol.png'
import allotd from '../images/allotd.png'
import alternativetimes from '../images/alternativetimes.png'
import tetris from '../images/tetris.png'

export const projectList = [
    { 
      name: 'budget.lol',
      background: 'rgba(106, 163, 209, 1)', 
      hoveredBack: 'rgba(106, 163, 209, 0.5)', 
      icon: 'fas fa-piggy-bank',
      img: budgetlol, 
      description: 'Fast and easy budgeting - React.js & Django 7 day solo project.', 
      appLink: 'https://budget-lol.herokuapp.com/',
      repoLink: 'https://github.com/paulcooke/ga-sei-project-4-budget.lol' 
    },
    { 
      name: 'allotd',
      background: 'rgba(209, 152, 106, 1)', 
      hoveredBack: 'rgba(209, 152, 106, 0.5)', 
      icon: 'fas fa-carrot',
      img: allotd, 
      description: 'Find and share locally grown veg - MERN stack 10 day group project.', 
      appLink: 'https://allotd-group-project.herokuapp.com/',
      repoLink: 'https://github.com/paulcooke/ga-sei-project-3-allotd' 
    },
    { 
      name: 'The Alternative Times', 
      background: 'rgba(124, 77, 38, 1)', 
      hoveredBack: 'rgba(124, 77, 38, 0.5)',
      icon: 'fas fa-newspaper', 
      img: alternativetimes, 
      description: 'Alternative news headline generator - React.js 2 day hackathon pair project.', 
      appLink: '',
      repoLink: 'https://github.com/paulcooke/ga-sei-project-2-the-alternative-times' 
    },
    { 
      name: 'Tetris clone', 
      background: 'rgba(38, 85, 124, 1)', 
      hoveredBack: 'rgba(38, 85, 124, 0.5)',
      icon: 'fas fa-gamepad',
      img: tetris, 
      description: 'Vanilla JavaScript, HTML & CSS - 8 day solo project.', 
      appLink: 'https://paulcooke.github.io/ga-sei-project-1-tetris-vanilla-javascript/',
      repoLink: 'https://github.com/paulcooke/ga-sei-project-1-tetris-vanilla-javascript' 
    }
]

export const profilesList = [
  { 
    profile: 'GitHub',
    imgLink: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    altText: 'GitHub logo',
    href: 'https://github.com/paulcooke'
  },
  { 
    profile: 'freecodecamp.org',
    imgLink: 'https://s3.amazonaws.com/freecodecamp/freecodecamp-square-logo-large.jpg',
    altText: 'freecodecamp.org logo',
    href: 'https://www.freecodecamp.org/paulcooke'
  },
  { 
    profile: 'Codewars',
    imgLink: 'https://camo.githubusercontent.com/c6341567c3ede1b4ee0935509a378c482153026f/687474703a2f2f7777772e736f66746c61622e6e7475612e67722f7e6e69636b69652f696d616765732f6c6f676f2f636f6465776172732e706e67',
    altText: 'Codewars logo',
    href: 'https://www.codewars.com/users/paulcooke'
  },
  { 
    profile: 'Linkedin',
    imgLink: 'https://image.flaticon.com/icons/png/512/174/174857.png',
    altText: 'Linkedin logo',
    href: 'https://www.linkedin.com/in/paul-cooke/'
  }
]