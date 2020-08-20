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