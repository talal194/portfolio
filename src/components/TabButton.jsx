
// dynamic button  only one button is creted used lots of time
// ======== isselected is used only for active the button only no need for other purpose
// function Tabs({children,isSelected,...props}){

// return(<li><button className={isSelected ? 'active' : ''} {...props}>{children}</button></li>)

// }


// function TabButton({children,select,...props}){
//     return(<li><button {...props} className={select ? 'active':''}>{children}</button></li>)
    
//     }


function TabButton({children,select,...props}){
return(<li><button {...props}  className={select ? 'active' : ''}>{children}</button></li>)


}



export default TabButton;