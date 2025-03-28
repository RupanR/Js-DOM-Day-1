//* Creating a Single Element
/*
!Step 1:- Creating an html element
*Syntax: let/const variablename = document.createElement("HTML Tag")
Example:-
const heading = document.createElement("h1")

!Step 2:- Adding a content
*syntax: variablename.innerHTML/innerText = "Content"
Example:-
heading.innerHTML = "<i>Hi Hello How Are You </i>"

!Step 3:- Adding Attributes
*syntax:- variablename.setAttribute("Attribute Name", "Attribute Value")
Example:-
heading.setAttribute("class", "head")

! Step 4:- Appending the element
*Syntax:- document.body/variablename.append("variablename")
Example:-
document.body.append(heading)
*/

/*
! Creating Multiple Elements

const division = document.createElement("div")
const heading = document.createElement("h1")
const breakTag = document.createElement("br")
const paragraph = document.createElement("p")

heading.innerHTML = "<i> Hi Hello How Are You </i>"
paragraph.innerText = "Iam Fine"

heading.classList.add("text-center", "text-purple-600", "text-3xl")
paragraph.setAttribute(
    "style",
    "color:aqua; font-size:3rem"
)

division.append(heading,breakTag,paragraph)
document.body.appendChild(division)

*/
/*
! session Task
const heading = document.createElement("h1")
const heading1 = document.createElement("h1")
const header = document.createElement("header")
const navigation = document.createElement("nav")
const order = document.createElement("ul")
const list1 = document.createElement("li")
const list2 = document.createElement("li")
const list3 = document.createElement("li")
const main = document.createElement("main")
const section = document.createElement("section")

heading.innerHTML = "<i>Create Element Session Task </i>"
heading1.innerHTML ="<i>Above all are created Dynamically"
list1.innerText= "About"
list2.innerText= "Pricing"
list3.innerText= "Contact"

heading.classList.add("text-center", "text-3xl","text-red-700","head")
heading1.classList.add("text-center", "text-3xl","text-red-700","head")
header.setAttribute("class","headers")
order.classList.add("flex","justify-center","space-evenly","gap-8")
list1.classList.add("list-none","text-black","cursor-pointer")
list2.classList.add("list-none","text-black","cursor-pointer")
list3.classList.add("list-none","text-black","cursor-pointer")

order.append(list1,list2,list3)
navigation.appendChild(order)
header.appendChild(navigation)
section.appendChild(heading1)
main.appendChild(section)
document.body.append(heading,header,main)

*/



