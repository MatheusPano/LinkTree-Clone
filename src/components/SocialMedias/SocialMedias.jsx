import React from 'react';
import './SocialMedias.css'


const SocialMedias = () =>{
    const List = [
        {id: 1, site: 'Instagram', url: 'instagram.com'},
        {id: 2, site: 'LinkedIn', url: 'linkedin.com'},
        {id: 3, site: 'Discord', url: 'discord.com'},
        {id: 4, site: 'YouTube', url: 'youtube.com'}
    ]

    const LinksSocial = List.map((props) =>
        <div key={props.id} className='content'>
            <a href={props.url}>{props.site}</a>
        </div>
    )
    return (
        <>
            {LinksSocial}
        </>
    );
}

export default SocialMedias