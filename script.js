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
//! session Task