import { ClassA } from "./classA.js";
import { ClassB } from "./classB.js";
import { NavigationBar } from "./navbar.js";

const navbar = new NavigationBar()

const classA = new ClassA()
const classB = new ClassB()

navbar.addViewElement('classA oldala', classA)
navbar.addViewElement('classB oldala', classB)