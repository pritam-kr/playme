import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import { kFormatter, thumbnail } from "../../Utils/Index";
const fromNow = moment([2022, 1, 22]);

export const videos = [
  {
    videoLink: "https://www.youtube.com/watch?v=Ezk2AwqgS9Q",
    _id: "Ezk2AwqgS9Q",
    title: "launching neog.camp",
    description: "launching neog.camp: roadmap to full stack dev",
    creator: "Tanay Pratap",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(500000),
    thumbnail: thumbnail("Ezk2AwqgS9Q"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML",
    categoryName: "Frontend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=B-s1kqy62FM",
    _id: "B-s1kqy62FM",
    title: "launching neog.camp: roadmap to full stack dev",
    description:
      "Learn Web 3.0 from zero. In this video, Madhavan (Founder, questbook), teaches Tanay how to write his first smart contract. ",
    creator: "Tanay Pratap",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(5000),
    thumbnail: thumbnail("B-s1kqy62FM"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML",
    categoryName: "Frontend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    _id: "Oe421EPjeBE",
    title: "Node.js and Express.js - Full Course",
    description:
      "Learn how to use Node and Express in this comprehensive course. First, you will learn the fundamentals of Node and Express. ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(5000),
    thumbnail: thumbnail("Oe421EPjeBE"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Backend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=SccSCuHhOw0",
    _id: "SccSCuHhOw0",
    title: "Learn Express JS In 35 Minutes",
    description:
      "ExpressJS is the most popular Node.js web server framework and is the basis of thousands of sites. In this video I ",
    creator: "Web Dev Simplified",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(80000),
    thumbnail: thumbnail("SccSCuHhOw0"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY",
    categoryName: "Backend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU",
    _id: "ofme2o29ngU",
    title: "MongoDB Crash Course",
    description:
      "MongoDB is a complex NoSQL database with a ton of commands and intricacies.",
    creator: "Web Dev Simplified",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(80000),
    thumbnail: thumbnail("ofme2o29ngU"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY",
    categoryName: "Backend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=No8qdcVYiQw",
    _id: "No8qdcVYiQw",
    title: "Getting Started with HTML5",
    description:
      "Welcome to neogcamp's levelZero journey. You don't know anything about web? ",
    creator: "Tanay Pratap",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(905000),
    thumbnail: thumbnail("No8qdcVYiQw"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML",
    categoryName: "Frontend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
    _id: "PkZNo7MFNFg",
    title: " Learn JavaScript",
    description:
      "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with javaScript",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(905000),
    thumbnail: thumbnail("PkZNo7MFNFg"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Frontend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    _id: "kUMe1FH4CHE",
    title: " Learn HTML Full Tutorial",
    description: "Learn HTML in this complete course for beginners. ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(904000),
    thumbnail: thumbnail("kUMe1FH4CHE"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Frontend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
    _id: "1Rs2ND1ryYc",
    title: "CSS Tutorial - Zero to Hero (Complete Course)",
    description: "Learn CSS in this complete course for beginners. ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(904000),
    thumbnail: thumbnail("1Rs2ND1ryYc"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Frontend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=jBzwzrDvZ18",
    _id: "jBzwzrDvZ18",
    title: "Python Backend Web Course (with Django)",
    description:
      "This video is a full backend web development course with python.",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(94000),
    thumbnail: thumbnail("jBzwzrDvZ18"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Backend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=mrHNSanmqQ4",
    _id: "mrHNSanmqQ4",
    title: "MERN Stack Course",
    description:
      "MERN Stack Course - ALSO: Convert Backend to Serverless with MongoDB Realm",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(96000),
    thumbnail: thumbnail("mrHNSanmqQ4"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Backend",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
    _id: "gB1F9G0JXOo",
    title: "Learn Unity - Beginner's Game Development Tutorial",
    description:
      "Learn to develop games using the Unity game engine in this complete course for beginners.",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(96000),
    thumbnail: thumbnail("gB1F9G0JXOo"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Game",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=4OaHB0JbJDI",
    _id: "4OaHB0JbJDI",
    title: "Easy JavaScript Game Development",
    description:
      "Easy JavaScript Game Development with Kaboom.js (Mario, Zelda, and Space Invaders) - Full Course",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(96000),
    thumbnail: thumbnail("4OaHB0JbJDI"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Game",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=XGf2GcyHPhc",
    _id: "XGf2GcyHPhc",
    title: "Learn Python by Building Five Games - Full Course",
    description:
      "Learn Python in this full tutorial course for beginners. This course takes a project-based approach. We have collected five great Python game tutorials together so you can learn Python while building five games. If you learn best by doing, this is the course for you. ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(96000),
    thumbnail: thumbnail("XGf2GcyHPhc"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Game",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=LsNW4FPHuZE",
    _id: "LsNW4FPHuZE",
    title: "Learn Unreal Engine (with C++) ",
    description: "Learn Unreal Engine (with C++) - Full Course for Beginners ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(989000),
    thumbnail: thumbnail("LsNW4FPHuZE"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Game",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=GZvSYJDk-us",
    _id: "GZvSYJDk-us",
    title: "APIs for Beginners - How to use an API (Full Course / Tutorial)",
    description:
      "What is an API? Learn all about APIs (Application Programming Interfaces) in this full tutorial for beginners.",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(959000),
    thumbnail: thumbnail("GZvSYJDk-us"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "API",
  },

  {
    videoLink: "https://www.youtube.com/watch?v=0sOvCWFmrtA",
    _id: "0sOvCWFmrtA",
    title: "Python API Development - Comprehensive Course for Beginners",
    description:
      "Learn Python API development in one of the most comprehensive courses ever on the topic. You will build a full-fledged API in Python using FastAPI. ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(959000),
    thumbnail: thumbnail("0sOvCWFmrtA"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "API",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=GZvSYJDk-us",
    _id: "GZvSYJDk-us",
    title: "How to Build a RESTful API using Node, Express, and Mongo",
    description:
      "A REST API is an integral component of a web application. You don't need to be an expert backend developer to make your own. ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(8569000),
    thumbnail: thumbnail("GZvSYJDk-us"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "API",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=0riHps91AzE",
    _id: "0riHps91AzE",
    title: "Learn React JS with Project in 2 Hours",
    description:
      "This video is a complete React Crash Course for beginners. The video covers different React Topics and implementation in one single project.  ",
    creator: "Dipesh Malvia",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(85000),
    thumbnail: thumbnail("0riHps91AzE"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLQ9EF8YtmsiSNwSKazGG2I6TZYArvYQM0_zShHvQg",
    categoryName: "Reactjs",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=a_7Z7C_JCyo",
    _id: "a_7Z7C_JCyo",
    title: "Code 15 React Projects - Complete Course",
    description: "This video is a complete React Crash Course for beginners.",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(85000),
    thumbnail: thumbnail("a_7Z7C_JCyo"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Reactjs",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=GDa8kZLNhJ4",
    _id: "GDa8kZLNhJ4",
    title:
      "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI",
    description:
      " In this compilation of videos, you'll build a Travel Companion App, a Cryptocurrency App, a Real Estate App, a  Google Clone App, as well as create your own API! ",
    creator: "Freecodecamp",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(8508800),
    thumbnail: thumbnail("GDa8kZLNhJ4"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw",
    categoryName: "Reactjs",
  },
  {
    videoLink: "https://www.youtube.com/watch?v=XuFDcZABiDQ",
    _id: "XuFDcZABiDQ",
    title: "Build an Expense Tracker | React Hooks & Context API",
    description:
      "In this project we will take a vanilla JS expense tracker app and turn it into a React app using hooks (useState, useContext, useReducer) and the context API.",
    creator: "Traversy Media",
    timeStamp: fromNow.from(new Date()),
    view: kFormatter(8508800),
    thumbnail: thumbnail("XuFDcZABiDQ"),
    creatorImg:
      "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw",
    categoryName: "Reactjs",
  },
];
