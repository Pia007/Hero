import { Helmet } from "react-helmet-async";

export const SEO = ({title, description}) => {
    return(
        <Helmet>
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            {/* <meta property="og:url" content="https://hostahealtcarehero.netlify.app/" /> */}
            <meta property="twitter:image" content="https://hostahealtcarehero.netlify.app/hero-logo.png" />
            <meta name="og:author" content="Pia Torain" />
            <link rel="canonical" href="https://hostahealtcarehero.netlify.app/" />
        </Helmet>
    )
}