
import React from 'react'
import styled from "@emotion/styled"

import HeaderText from './HeaderText'
import SquarePhotos from './SquarePhotos'


const Container1 = styled.div`
display: grid;
grid-template-columns: 1fr;

@media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr 4px 1fr;
    .second {
        justify-self: end;
    }
}


`

const Container2 = styled.div`
padding-bottom: 2em;
max-width: 90%;
display: flex;
flex-flow: column;
place-items: start;
@media (min-width: ${props => props.theme.responsive.medium}) {

}

.squareHeader {
    max-width: 3em;
}
`

const Divider = styled.div`
display: grid;
grid-template-rows: repeat(20, 1fr);
grid-gap: 1em;
height: 100%;
width: 100%;
border-radius: 3em;
`

const Blip = styled.div`
height: 100%;
width: 100%;
border: 1px solid ${props => props.theme.colors.highlight25};
border-radius: 3em;
`




const CustomCarousel2 = ({ alias1, alias2 }) => {
    
    
    
    
    
    return (
        <Container1>
        <Container2>
        <HeaderText><h2 className="squareHeader">{alias1.title}</h2></HeaderText>
        <SquarePhotos 
        photoSrc={alias1.photos.map(photo => (
            photo.file.url
        ))}/>
        <p dangerouslySetInnerHTML={{ __html: alias1.description.childMarkdownRemark.html }}>
        </p>

        </Container2>
        <Divider>
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
        </Divider>
        <Container2 className='second'>
        <HeaderText><h2 className="squareHeader">{alias2.title}</h2></HeaderText>
        <SquarePhotos 
        photoSrc={alias2.photos.map(photo => (
            photo.file.url
        ))}/>
        <p dangerouslySetInnerHTML={{ __html: alias2.description.childMarkdownRemark.html }}>
        </p>

        </Container2>

            
        </Container1>
            )
        }
        
        
        
        
        export default CustomCarousel2
        