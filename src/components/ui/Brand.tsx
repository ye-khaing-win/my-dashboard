import { Link } from 'react-router-dom';
import colors from 'tailwindcss/colors';
import themeConfig from '../../config/theme.config';

const Brand = () => {
  return (
    <Link to="/" aria-label="Logo">
      <svg
        className="h-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 198.43 176.06"
      >
        <g>
          <rect
            fill={`${colors[themeConfig.themeColor][themeConfig.themeColorShade]}75`}
            x="0"
            y="88.03"
            width="141.73"
            height="88.03"
            rx="44.02"
            ry="44.02"
          />
          <rect
            fill={`${colors[themeConfig.themeColor][themeConfig.themeColorShade]}d0`}
            x="0"
            y="44.02"
            width="170.08"
            height="88.03"
            rx="44.02"
            ry="44.02"
          />
          <rect
            fill={`${colors[themeConfig.themeColor][themeConfig.themeColorShade]}f0`}
            x="0"
            y="0"
            width="198.43"
            height="88.03"
            rx="44.02"
            ry="44.02"
          />
        </g>
      </svg>
    </Link>
  );
};

export default Brand;
