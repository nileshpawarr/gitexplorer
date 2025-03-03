import React from 'react';
import github from '../assets/images/github.svg';
import githubGreen from '../assets/images/github-green.svg';

interface FooterProps {
  theme?: string;
}

const Footer: React.FC<FooterProps> = (props) =>{
  const currentYear = new Date().getFullYear();
  
  return(
  <footer className="footer">
    <div className="logo">
      <a href="https://github.com/nileshpawarr/gitexplorer/" rel="noopener noreferrer" target="_blank">
        {props.theme==='dark' ? (
          <img src={githubGreen} alt="Github Logo" className="logo--github" />
        ) : (
          <img src={github} alt="Github Logo" className="logo--github" />
        )}
      </a>
    </div>
    <p className="footer__copyright dark-white">
      © {currentYear} {' '}
      <a href="https://nileshpawarr.com" target="_blank" rel="noopener noreferrer">
        Nilesh Pawar
      </a>. All Rights Reserved.
    </p>
  </footer>
)};

export { Footer };