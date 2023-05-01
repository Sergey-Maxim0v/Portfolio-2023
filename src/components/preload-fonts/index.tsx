import {Helmet} from "react-helmet";
import fontRampart from '/src/assets/fonts/Rampart/Rampart.ttf';
import fontNunitoBlack from '/src/assets/fonts/Nunito/Nunito-Black.ttf';
import fontNunitoBlackItalic from '/src/assets/fonts/Nunito/Nunito-BlackItalic.ttf';
import fontNunitoBold from '/src/assets/fonts/Nunito/Nunito-Bold.ttf';
import fontNunitoBoldItalic from '/src/assets/fonts/Nunito/Nunito-BoldItalic.ttf';
import fontNunitoExtraBold from '/src/assets/fonts/Nunito/Nunito-ExtraBold.ttf';
import fontNunitoExtraBoldItalic from '/src/assets/fonts/Nunito/Nunito-ExtraBoldItalic.ttf';
import fontNunitoExtraLight from '/src/assets/fonts/Nunito/Nunito-ExtraLight.ttf';
import fontNunitoExtraLightItalic from '/src/assets/fonts/Nunito/Nunito-ExtraLightItalic.ttf';
import fontNunitoItalic from '/src/assets/fonts/Nunito/Nunito-Italic.ttf';
import fontNunitoLight from '/src/assets/fonts/Nunito/Nunito-Light.ttf';
import fontNunitoLightItalic from '/src/assets/fonts/Nunito/Nunito-LightItalic.ttf';
import fontNunitoMedium from '/src/assets/fonts/Nunito/Nunito-Medium.ttf';
import fontNunitoMediumItalic from '/src/assets/fonts/Nunito/Nunito-MediumItalic.ttf';
import fontNunitoRegular from '/src/assets/fonts/Nunito/Nunito-Regular.ttf';
import fontNunitoSemibold from '/src/assets/fonts/Nunito/Nunito-SemiBold.ttf';
import fontNunitoSemiboldItalic from '/src/assets/fonts/Nunito/Nunito-SemiBoldItalic.ttf';

/**
 * @see https://github.com/nfl/react-helmet#readme
 */
const PreloadFonts = () => {

    return (
        <Helmet>
            <link rel="preload" href={fontRampart} as="font" type="font/ttf"/>

            <link rel="preload" href={fontNunitoBlack} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoBlackItalic} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoBold} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoBoldItalic} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoExtraBold} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoExtraBoldItalic} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoExtraLight} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoExtraLightItalic} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoItalic} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoLight} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoLightItalic} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoMedium} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoMediumItalic} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoRegular} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoSemibold} as="font" type="font/ttf"/>
            <link rel="preload" href={fontNunitoSemiboldItalic} as="font" type="font/ttf"/>
        </Helmet>
    )
}

export default PreloadFonts