import React from "react";
import { Helmet } from "react-helmet";

export default function HelmetLayout ({
    pagelink, 
    title,
     description, 
     og_sitename, 
     og_type,
     og_description, 
     keywords,
     children}){
    return(
        <>
        <Helmet>
            <meta charSet="utf-8"></meta>
            <title>{title}</title>
            <link rel = "canonical" href={pagelink} />
            <meta name = "description" content = {description} />
            <meta name = "keywords" content = {keywords} />
            <meta property = "og:site_name" content={og_sitename} />
            <meta property = "og:description" content = {og_description} />
            <meta property = "og:type" content = {og_type} />
            
            <meta property = "og:locale" content = "en_US" />
        </Helmet>
        </>
    )
}