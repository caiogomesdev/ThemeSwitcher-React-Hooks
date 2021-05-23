import styled from 'styled-components'

export const Head = styled.header`
display: flex;
width: 100%;
height: 60px;
background: ${props => props.theme.colors.primary};
justify-content: space-between;
align-items: center;
flex-direction: row;

`
export const Logo = styled.div`

cursor: pointer; 
color: ${props => props.theme.colors.TitleColor};
font-size: 32px;
font-weight: bold;
padding-left: 25px;

a{
    text-decoration: none;
    color: ${props => props.theme.colors.TitleColor};
}

`
export const SwithDiv = styled.div`
padding-right: 25px;
padding-top: 8px;
`