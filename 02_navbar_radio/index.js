import { ClassB } from "./classB.js";
import {NavigationBar} from "./navbar.js";
import { ClassA } from "./classA.js";


const navbar = new NavigationBar();

const classA = new ClassA()
classA.appendTo(document.body)

const classB = new ClassB
classB.appendTo(document.body)

navbar.addViewElement('ClassA oldala', classA)
navbar.addViewElement('ClassB oldala', classB)

navbar.activate('classA')
