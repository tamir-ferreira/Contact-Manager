import { createGlobalStyle } from "styled-components";

export const StyledColors = createGlobalStyle`
    :root {
        --color-primary: #f44336;
        --color-secondary: #902c24;

        --color-gray-0: #F8F9FA;
        --color-gray-1: #868E96;
        --color-gray-2: #343B41;
        --color-gray-3: #212529;
        --color-gray-4: #121214;
        --color-gray-5: #070708;
        --color-opacity: rgba(18, 18, 20, 0.96);
        --color-black: #000000;
        
        --color-white: #FFFFFF;
        --color-success: #3FE864;
        --color-negative: #E83F5B;
    }
`;
