import styled from 'styled-components'

const DrawerMenuWrapper = styled.div`
    position: fixed;
    width: 230px;
    min-height: 100vw;
    border-right: 5px solid #cccccc;
`
const DrawerMenu = styled.div`
    position: fixed;
    display: grid;
    justify-items: center;
    grid-template-rows: max-content;
    width: 230px;
    background-color: white;
`
const PageWrapper = styled.div`
    min-height: 100vw;
    display: grid;
    grid-template-columns: 235px 1fr;
    grid-template-rows: 70px 1fr;
`
const WrapperContent = styled.div`
    display: grid;
    grid-template-rows: max-content;
    grid-column: 2;
`

export const Styled = {
    DrawerMenuWrapper,
    DrawerMenu,
    PageWrapper,
    WrapperContent,
}
