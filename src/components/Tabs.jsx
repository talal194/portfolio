
// function Tabs({children,buttons,ButtonsContainer="menu"}){
// //const ButtonsContainer = buttonsContainer;
// return(<><ButtonsContainer>{buttons}</ButtonsContainer>
// {children}
// </>
// )
// }



function Tabs({children,buttons,ButtonsContainer='menu'}){

//const ButtonsContainer = buttonContainer;

return(<><ButtonsContainer>{buttons}</ButtonsContainer>
{children}
</>)
}



export default Tabs;