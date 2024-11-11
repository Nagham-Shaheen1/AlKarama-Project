import React from 'react'
import { Link } from 'react-router-dom';

const MyLinkComponent = (props) => {
    return (
        <Link 
            to={{
                pathname: props.to, // Use the to prop for the path
                state: {
                    header: props.header,
                    image: props.image,
                    image1: props.image1,
                    innerhead: props.innerhead,
                    text: props.text
                }
            }}
            style={{textDecoration:'none'}}
        >
            <p>...عرض المزيد </p>
        </Link>
    );
};

export default MyLinkComponent