import React from "react"
import { Helmet } from "react-helmet-async"

export const SEO = ({title, description, content }) => {
    return(
        <Helmet>
            <title>{title}</title>
            <meta name={description} content={content} />
            <meta name="theme-color" content="#008f68" />
            <link rel="canonical" href="newConicalUrl" />
        </Helmet>
    )
}