import {Helmet} from "react-helmet";
import font1Rampart from '.assets/fonts/Rampart/Rampart.ttf';

/**
 * @see https://github.com/nfl/react-helmet#readme
 */
const PreloadFonts = () => {
    // TODO: preload fonts
    return (
        <Helmet>
            {/*<link rel="preload" href={font1Rampart} as="font" type="font/woff2"/>*/}
        </Helmet>
    )
}

export default PreloadFonts