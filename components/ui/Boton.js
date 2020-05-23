import styled from '@emotion/styled'

const Boton = styled.a`

    font-weight: 700;
    cursor:pointer;
    text-transform: uppercase;
    border: 1px soli #d1d1d1;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor? 'black' : '#FFFF'};
    color: ${props=> props.bgColor ? 'white' : '#000'};
    &:last-of-type{
        margin-right:0;
    }
`;
export default Boton;
