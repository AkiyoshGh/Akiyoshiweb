import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* 颜色系统 */
    --color-primary: #2d3436;
    --color-secondary: #636e72;
    --color-accent: #0984e3;
    --color-background: #ffffff;
    --color-text: #2d3436;
    --color-text-light: #636e72;
    --color-border: #dfe6e9;
    
    /* 字体系统 */
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-heading: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    
    /* 间距系统 */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* 断点系统 */
    --breakpoint-mobile: 320px;
    --breakpoint-tablet: 768px;
    --breakpoint-desktop: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* 响应式布局基础样式 */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles;