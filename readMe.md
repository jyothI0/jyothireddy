### Front-end Technologies

-HTML
-CSS
-JavaScript
-BootStrap framework
-Angular framework
-ReactJs

### Backend Technologies

-Node.js
       -express.js
	-nodemoon
	-core
	-dotenv
-PHP
-C#
-Java
-Python

### Databases

-MongoDb
-Mysql
-SQLite
-Firebase
-postgressql
-Oracle

-VCS  (Source Code System)
	-Distributed VCS
	 	-Git,Mercurial
	-Remote(Central) VCS
		-Github,Bitbucket
	
### Git
- git init
- git add filrname
- git add filename1 filename5 filename100
- git add .or git add --all
- git status
- Do git configurations(set user.name and user.email)
- commit data with commit message
- push the data into github

### HTML
- Hyper Text Markup Language
- latest version html5
- Sematic Elements
	- header
	- section
	- article
	- aside
	- footer
	- table
- Block level Elements
	- h1 to h6
	- p
	- div
	- all semantic elements
	- text will start from new line
- Inline Elements
	- span
	- img
	- a
	- nav
	- form
	- input
	- textarea
	- legend
	- sup
	- sub
 ##### Reference links
  - [ Flaticon]()
  - [color](https://htmlcolorcodes.com/)
  - [constract checker](https://webaim.org/resources/contrastchecker/)
  Task :
  =====
  - Audio
  - Video
  - canvas
  - progress
  - Data List
  - meter 
  - Select

 ### CSS
  - Cascading Style Sheets
  - Types of CSS
  - Inline CSS
  - Internal CSS
  - External CSS

  + Syntax of CSS
  ....

  Selector {
	  CSS Properties
  }
  #### Selectors
  + simple selectors
	- universal selectors(*)
	 - By element name
	 - Grouping selector(;)
	 - class selector
	 - Id selector
	
	+ Combinators
		+ Descendent selector( )
		+ child selector(>)
        + Adjacent sibling selector(+)
		+ General sibling selector(~)
	+ Pseudo class selector
	+ pseudo element selector
	+ Attribute selector

	### Box Model

	+ Margin
	+ Boarder
	+ PAdding
	+ width

	### Responsive web Design

#### Flex-BOx
+ display
	- flex
		- flex wrap
		- justify - content
		-  flex direction
		- flex flow
	- none
	- inline
	- block
	- inline block
+ position
	- static
	- relative
	- absolute
	- fixed
	- sticky
+ allign contents
+ allign items
+ allign- self

### Media Quries

- Extra Small Devices(Mobiles)
    -max-width:600px
- Small Devices(Large Phones)
	- min-width:600px
	- max-width:768px
- Medium Devices(Small Laptops)
	- min-width:768px
- Large Devices(Large laptops or Desktops)
	- min-width:992
- Extra Large Devices()
	- min-width:1200px

...
@media only screen (max-width:320px) and (max-width:500px) {
	CSS
} 

#### Bootstrap 4.6

- It is a CSS framework
- module(Collections of functions and classes)
- (package)collection of modules
- library(collection of packages)
- frameworks (collection of library)
+ module --> package --> Library --> Framework


+ Type of mode
	- online
	 	- CDN links
	- offline
+ background-color-bg
+ text-white 
+ Margin in bootstrap (m-*(0-5))
	 - 0 --> 0 reem
	 - 1 --> 0.25 (4 px)
	 -  2 --> 0.5 ( 8px)
	 - 3 --> 1 (16px)
	 - 4 --> 1.5 (24px)
     - 5 --> 3 rem (48px)
	 - m ( margin in all directions)
	 - ml-5(margin left)
	 - mt (margin top)
	 - mr (margin right)
	 - mb (margin bottom)
+ padding (paading left --> pl-5)

+ colors
	- Primary
	- secondary
	- info
	- success
	- warning
	- danger
	- light
	- dark
	- white


+ We can use color claases for 
	- Button ( btn btn-primary)
	- text ( text-white)
	- background(bg-secondary)
	- alerts (laert alert- primary)

+ Grid System
		- col -sm 12
	- sm 
	- md
	- lg
	- xl
#### Java Script

+ In 1995 'Brenden Eich'  introduced JavaScript (Es-262)
+ JavaScript loosely touple and dynamic language
+ It is a text based programming language and we can use in 
  Client side and server -side (Node.js) for dynamic web application
  - ECMA-Script (ES-6)
     - let & const
	 - map()
	 - arrow function
     - classes
+ Datatypes
    - Number 
	- BigInt(2^53-1)
	- String
	- Boolean
	- undefine
	- Null
	- Object
	- Arrays
	-  spread operator
	- rest parameter

+ variables
	- var,let,const
	- scope
		- function level--.var
		- Block level-->let & const
	- Redefine var,let
	- Redeclare  var
+ typeof() 

+ object 
....
{ 
	name:"jyothi"
	
}
.....

+ Ararys

### Alerts 

+ To generate notification
	- alert
	- prompt( to take input from user)
	- confirm

+ console statements 
	 - console.log()
	 - console.info()
	 - console.warn()
	 - console.error()

+ spread operator
   - To change array elements from one to onother
 ...
 
 ...variableName

 ...



+ Rest parameter
	
	+ to handle function parameters
 
 ...
    ...parameter
...

+ Destructuring of arrays 

- 

+ Functions 
	- function with function name
....
   function demo() {
   return 
   }
   demo () 
   ....

   - Anonymus function 

   - Arrow function
   ....

  + for - in 
   - to get index values
+ for- of
    - to get array values
+ forEach() (ES-5)
+ map()--> (ES-6)

### DOM
	-  document object model
    - Document
	- History
	- window
	- Navigator
+	 DOM Methods
    - getelementclassName
	- getElementID
	- quereySelector
	- innerText
	- inner Html
	- textContent
	- append
	- appendchild
	- set Attribute
	- classs List
	- style
	- src

#### JSON
+ JavaScript Object Notation
	- To Exchange Information between Application and server

...

{
	"name":"Jyothi Reddy",
	"salary":"12lPA",
	"designation":"rxgfry",
	"phno":"678563"
}
....

+ Ajax call or Promises(Fetch API)

 #### ReactJS

 #### ReactJS Features

+  It is a library
+   It follows component based Architecture
	- Function component
	- class component
	- pure component
	- Higher order component
+  It provides virtual DOM
+ It provides JSx(Javascript and XMl)
+ unidirectional data flow
+ single page Applications 


+ Props

   - To pass data from one component to another component we will use props
   - props are immutable

   + Union Bank
        - Andhra BAnk(Functional)
		- cooperation BAnk(Class)

	+ states

	- In react to maintain information we will use states
	- we can maintain states in class component only ( Before react16.8 version)
	- To take a state in react,Try to create constructor above render method and inside class component
	- use `rconst` snippet

	- TO update the state information in class component use `setstate()` method

	constructor() {
		super();
		this.state= {

		}
	}

+ To update the information inclass class component we have to follow
 component life cycle methods
   - `componentWillReceiveProps()`
   - `componentWillMount()`
   - `ComponentDidMount()`
   - `shouldComponentUpdate()`
   - `componentWillUpdate()`
   - `componentWillUnMount()`
   - `componentDidUpdate()`

 #### Hooks 

 + from react16.8 Hooks are introduced

 - Parent - child1 --> child2 --> child3
 - `useState`
 - `useEffect`
 - `useReference`
 -  `useContest`

 ####  List Rendering 

#### Event handling and form handling

- `on change`
- `onSubmit`
- `prentDefault`

#### Routing in React

+ To navigate (Route) from component to another
	- install react-router-dom package by using
	-`npm install react-route-dom`
	- `Browser router`
	-`Routes`
	- `Route`
	- `Link`
	- `path`
	- `element`
    - 
	



+  Project Environment setup
   - [Download Notejs](https://nodejs.org/en/download/)
   - [downoad visual studio code](https://code.visualstudio.com/)
   - install nodejs and check versions of `node` and `npm`
	  - 'node'-'v'
	  - 'npm'-'v'
   -  `webpack` and `babel` 
   - `creaate-react-app`
		- `npm install create-raect-app`
		   - ` create-react-app projectname`
		- `npx create-react-app appname`

+ index.html
+ index.js
+ App.ja 
     + Index page
	  - nav.js
	  - body.js
	  - footer.js

	+ Home.js
	   - nav
	   - body
	   - footer
	+ login.js
	+ Register
	+ About
	+ contact








    