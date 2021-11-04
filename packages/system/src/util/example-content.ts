import logo1 from "./example-assets/logo-1.png"
import logo2 from "./example-assets/logo-2.png"
import logo3 from "./example-assets/logo-3.png"
import logoRedux from "./example-assets/logo-redux.png"
import { Course } from "../models/course"
import { Library } from "../models/library"
import book1 from "./example-assets/book-1.png"
import book2 from "./example-assets/book-2.png"
import book3 from "./example-assets/book-3.png"
import { Book } from "../models/book"

export const exampleCategories = [
	"Libraries",
	"Tools & Plugins",
	"Code Snippets",
	"Courses",
	"Communities",
	"Podcasts",
	"Books",
	"Events",
	"Companies",
]

export const exampleTags = [
	"accessibility",
	"state management",
	"redux",
] as const

export type ExampleTag = typeof exampleTags[number]

export const exampleCourses: Course<ExampleTag>[] = [
	{
		title: "Code 15 React Projects - Complete Course",
		author: "freeCodeCamp.org",
		image: logo1,
		description:
			"Improve your skills with the React JavaScript library by building 15 projects using React.",
		paymentType: "free",
		level: "advanced",
		format: "video",
		href: "https://www.freecodecamp.org/news/solidify-your-react-skills-by-building-15-projects/",
		tags: ["accessibility", "state management"],
	},
	{
		title: "Fullstack React",
		author: "newline",
		image: logo3,
		description:
			"The up-to-date, in-depth, complete guide to React and friends.",
		paymentType: "paid",
		level: "beginner",
		format: "text",
		href: "https://www.newline.co/fullstack-react/",
		tags: [],
	},
	{
		title: "Mastering React",
		author: "Mosh",
		image: logo2,
		description:
			"If you're on React 15, take your components to new levels with these advanced patterns, lectures, exercises, and more.",
		paymentType: "paid",
		level: "intermediate",
		format: "interactive",
		href: "https://codewithmosh.com/p/mastering-react",
		tags: ["state management"],
	},
]

export const exampleLibraries: Library<ExampleTag>[] = [
	{
		name: "Redux",
		author: "Redux",
		description:
			"Predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.",
		gitHubRepo: "reduxjs/redux",
		npmPackage: "redux",
		image: logoRedux,
		href: "https://redux.js.org/",
		tags: ["state management", "redux"],
  },
]

export const exampleBooks: Book<string>[] = [
	{
		href: "/atomic-habits",
		title:
			"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
		image: book1,
		authors: ["James Clear"],
		yearOfPublication: 2018,
		numberOfPages: 320,
		level: "intermediate",
		tags: ["self-help"],
		description:
			"This breakthrough book from James Clear is the most comprehensive guide on how to change your habits and get 1% better every day.",
	},
	{
		href: "/harry-potter",
		title: "Harry Potter and the Sorcerer's Stone",
		image: book2,
		authors: ["J. K. Rowling", "Robert Galbraith"],
		yearOfPublication: 1997,
		numberOfPages: 223,
		level: "beginner",
		tags: ["fiction"],
		description:
			"After 11 years of disregard and neglect at the hands of his aunt, uncle and their swinish son Dudley, Harry suddenly receives a visit from a giant named Hagrid, who informs Harry that his mother and father were a witch and wizard.",
	},
	{
		href: "/cryptonomicon",
		title: "Cryptonomicon",
		image: book3,
		authors: ["Neal Stephenson"],
		yearOfPublication: 1999,
		numberOfPages: 918,
		level: "advanced",
		tags: ["fiction"],
		description:
			"Randy Waterhouse spearheads a movement to create a safe haven for data in a world where information equals power and big business and government seek to control the flow of knowledge.",
	},
]