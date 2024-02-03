import { useMediaQuery } from 'react-responsive';

const sizes = { DESKTOP: 1280, TABLET: 768 } as const;

function useBreakpoints(): {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  sizes: { readonly DESKTOP: 1280; readonly TABLET: 768 };
} {
  return {
    isDesktop: useMediaQuery({ minWidth: sizes.DESKTOP }),
    isTablet: useMediaQuery({
      minWidth: sizes.TABLET,
      maxWidth: sizes.DESKTOP - 1,
    }),
    isMobile: useMediaQuery({ maxWidth: sizes.TABLET - 1 }),
    sizes,
  };
}

export { useBreakpoints };
