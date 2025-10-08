(()=>{var e={};e.id=938,e.ids=[938],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9411:e=>{"use strict";e.exports=require("node:path")},7742:e=>{"use strict";e.exports=require("node:process")},1041:e=>{"use strict";e.exports=require("node:url")},5315:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var r=s(7096),a=s(6132),n=s(7284),o=s.n(n),i=s(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["knowledge",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9846)),"/Users/enolic/Library/Mobile Documents/com~apple~CloudDocs/Projects/konstantinos-gialantzis.github.io/app/knowledge/[slug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,3705)),"/Users/enolic/Library/Mobile Documents/com~apple~CloudDocs/Projects/konstantinos-gialantzis.github.io/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/enolic/Library/Mobile Documents/com~apple~CloudDocs/Projects/konstantinos-gialantzis.github.io/app/knowledge/[slug]/page.tsx"],d="/knowledge/[slug]/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/knowledge/[slug]/page",pathname:"/knowledge/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2220:(e,t,s)=>{Promise.resolve().then(s.bind(s,7051)),Promise.resolve().then(s.bind(s,903)),Promise.resolve().then(s.t.bind(s,614,23)),Promise.resolve().then(s.t.bind(s,6800,23))},6411:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(5153);let a=(0,r.createProxy)(String.raw`/Users/enolic/Library/Mobile Documents/com~apple~CloudDocs/Projects/konstantinos-gialantzis.github.io/app/components/card.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=a.Card},8692:(e,t,s)=>{"use strict";s.d(t,{W:()=>i});var r=s(5153);let a=(0,r.createProxy)(String.raw`/Users/enolic/Library/Mobile Documents/com~apple~CloudDocs/Projects/konstantinos-gialantzis.github.io/app/components/nav.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=a.Navigation},9846:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>KnowledgeArticlePage,generateStaticParams:()=>generateStaticParams});var r=s(4656),a=s(1412),n=s(8692),o=s(6411),i=s(1371),l=s(3898),c=s(36),u=s(4353),d=s.n(u),p=s(6222),m=s(910);async function generateStaticParams(){return[]}async function getKnowledgeArticle(e){try{let t=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:3000"}/api/knowledge`),s=null;t.ok&&(s=(await t.json()).find(t=>t.id===e));let r=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:3000"}/api/knowledge/${e}`);if(r.ok){let t=await r.text(),a=t.match(/^#\s+(.+)$/m),n=a?a[1]:null;!n&&s&&(n=s.title),n||(n=e.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()));let o=t.replace(/^#.+$/m,"").match(/^(.+)$/m),i=o?o[1].trim():`Java interview topic: ${n}`;return{id:e,slug:e,title:n,description:s?s.description:i,date:s?s.date:"2024-01-01",fileDate:new Date().toISOString(),tags:s?s.tags:["java","interview"],connections:s?s.connections:["java-interview-contents"],backlinks:[],content:t}}}catch(e){console.error("Error loading file data:",e)}let t=[{id:"1",slug:"javascript-fundamentals",title:"JavaScript Fundamentals",description:"Core concepts and principles of JavaScript programming language.",date:"2024-01-15",fileDate:"2024-01-15",tags:["JavaScript","Programming","Fundamentals"],connections:["2","3"],backlinks:["react-hooks","async-programming"],content:`
# JavaScript Fundamentals

JavaScript is a versatile programming language that powers the modern web. Understanding its core concepts is essential for any web developer.

## Variables and Data Types

JavaScript has several primitive data types:

\`\`\`javascript
// Numbers
let age = 25;
let price = 99.99;

// Strings
let name = "John Doe";
let message = \`Hello, \${name}!\`;

// Booleans
let isActive = true;
let isComplete = false;

// Arrays
let colors = ["red", "green", "blue"];

// Objects
let person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
\`\`\`

## Functions

Functions are first-class citizens in JavaScript:

\`\`\`javascript
// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a, b) => a + b;

// Higher-order function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
\`\`\`

## Scope and Closures

Understanding scope is crucial for writing maintainable JavaScript:

\`\`\`javascript
function outerFunction(x) {
  // This is the outer scope
  
  function innerFunction(y) {
    // This is the inner scope
    // Can access both x and y
    return x + y;
  }
  
  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
\`\`\`

## Prototypes and Inheritance

JavaScript uses prototypal inheritance:

\`\`\`javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  return \`\${this.name} barks\`;
};
\`\`\`

## Modern JavaScript Features

ES6+ introduced many powerful features:

- **Destructuring**: Extract values from arrays and objects
- **Template literals**: String interpolation with backticks
- **Modules**: Import and export functionality
- **Classes**: Syntactic sugar over prototypal inheritance
- **Promises**: Handle asynchronous operations

## Best Practices

1. **Use \`const\` and \`let\`** instead of \`var\`
2. **Write pure functions** when possible
3. **Handle errors gracefully** with try-catch blocks
4. **Use meaningful variable names**
5. **Keep functions small and focused**

## Related Concepts

This article connects to several other important topics:
- [[React Hooks]] - Modern React patterns built on JavaScript fundamentals
- [[Asynchronous Programming]] - Handling async operations in JavaScript
- [[State Management]] - Managing application state effectively

Understanding these fundamentals will make you a more effective JavaScript developer and prepare you for advanced topics like frameworks and libraries.
      `},{id:"2",slug:"react-hooks",title:"React Hooks",description:"Understanding React Hooks and their use cases.",date:"2024-01-12",tags:["React","Hooks","Frontend"],connections:["1","4"],backlinks:["javascript-fundamentals","state-management"],content:`
# React Hooks

React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components.

## useState Hook

The most commonly used hook for managing component state:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

Handle side effects in functional components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // Dependency array

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

## Custom Hooks

Create reusable stateful logic:

\`\`\`jsx
// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Rules of Hooks

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call them from React function components or custom hooks

## Advanced Hooks

- **useContext**: Access React context values
- **useReducer**: Manage complex state logic
- **useMemo**: Memoize expensive calculations
- **useCallback**: Memoize functions to prevent unnecessary re-renders
- **useRef**: Access DOM elements or store mutable values

## Related Topics

- [[JavaScript Fundamentals]] - Understanding JavaScript is essential for React
- [[State Management]] - Hooks are a key part of React's state management story

Hooks make React components more predictable and easier to test while providing powerful patterns for code reuse.
      `},{id:"3",slug:"async-programming",title:"Asynchronous Programming",description:"Promises, async/await, and handling asynchronous operations.",date:"2024-01-10",tags:["JavaScript","Async","Promises"],connections:["1","5"],backlinks:["javascript-fundamentals","web-apis"],content:`
# Asynchronous Programming

Asynchronous programming allows JavaScript to handle operations that take time without blocking the main thread.

## Promises

Promises represent the eventual completion or failure of an asynchronous operation:

\`\`\`javascript
// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({ data: "Hello World" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
};

// Using promises
fetchData()
  .then(result => {
    console.log("Success:", result.data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
\`\`\`

## Async/Await

A more readable way to work with promises:

\`\`\`javascript
async function getData() {
  try {
    const result = await fetchData();
    console.log("Success:", result.data);
    return result;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}

// Using async function
getData()
  .then(data => console.log("Final result:", data))
  .catch(error => console.log("Final error:", error));
\`\`\`

## Promise Combinators

Handle multiple asynchronous operations:

\`\`\`javascript
// Promise.all - Wait for all promises to resolve
const urls = ['/api/users', '/api/posts', '/api/comments'];
const requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => {
    // All requests completed successfully
    return Promise.all(responses.map(r => r.json()));
  })
  .then(data => {
    const [users, posts, comments] = data;
    console.log({ users, posts, comments });
  })
  .catch(error => {
    // If any request fails
    console.error("One or more requests failed:", error);
  });

// Promise.race - First promise to settle wins
Promise.race([
  fetch('/api/fast-server'),
  fetch('/api/slow-server')
])
.then(response => response.json())
.then(data => console.log("Fastest response:", data));
\`\`\`

## Error Handling

Proper error handling is crucial in async code:

\`\`\`javascript
async function robustApiCall(url) {
  const maxRetries = 3;
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }
      
      return await response.json();
    } catch (error) {
      lastError = error;
      console.warn(\`Attempt \${i + 1} failed:, error.message\`);
      
      if (i < maxRetries - 1) {
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }
  
  throw new Error(\`All \${maxRetries} attempts failed. Last error: \${lastError.message}\`);
}
\`\`\`

## Related Concepts

- [[JavaScript Fundamentals]] - Async programming builds on core JavaScript concepts
- [[Web APIs]] - Many browser APIs are asynchronous

Mastering asynchronous programming is essential for modern JavaScript development, especially when working with APIs and user interfaces.
      `}];return t.find(t=>t.slug===e)}async function getConnectedArticles(e){return[{id:"1",slug:"javascript-fundamentals",title:"JavaScript Fundamentals"},{id:"2",slug:"react-hooks",title:"React Hooks"},{id:"3",slug:"async-programming",title:"Asynchronous Programming"},{id:"4",slug:"state-management",title:"State Management"},{id:"5",slug:"web-apis",title:"Web APIs"}].filter(t=>e.includes(t.id))}async function KnowledgeArticlePage({params:e}){let t=await getKnowledgeArticle(e.slug);t||(0,a.notFound)();let s=await getConnectedArticles(t.connections);return(0,r.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900",children:[r.jsx(n.W,{}),r.jsx("div",{className:"px-6 pt-20 mx-auto max-w-6xl lg:px-8 md:pt-24 lg:pt-32",children:r.jsx("div",{className:"xl:relative",children:(0,r.jsxs)("div",{className:"mx-auto max-w-4xl",children:[(0,r.jsxs)(d(),{href:"/knowledge",className:"inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors mb-8",children:[r.jsx(i.Z,{className:"w-4 h-4 mr-2"}),"Back to Knowledge Base"]}),(0,r.jsxs)("header",{className:"mb-8",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4 text-sm text-gray-400 mb-4",children:[(0,r.jsxs)("time",{dateTime:t.fileDate||t.date,className:"flex items-center gap-1",children:[r.jsx(l.Z,{className:"w-4 h-4"}),Intl.DateTimeFormat(void 0,{dateStyle:"long"}).format(new Date(t.fileDate||t.date))]}),r.jsx("span",{children:"•"}),(0,r.jsxs)("span",{className:"flex items-center gap-1",children:[r.jsx(c.Z,{className:"w-4 h-4"}),t.connections.length," connections"]})]}),r.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-4",children:t.title}),t.tags&&t.tags.length>0&&r.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(e=>r.jsx("span",{className:"px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm",children:e},e))})]}),(0,r.jsxs)("article",{className:"prose prose-invert prose-lg max-w-none",children:[r.jsx(p.UG,{remarkPlugins:[m.Z],components:{p:({children:e})=>{let t=e?.toString()||"";if(t.includes("[[")&&t.includes("]]")){let e=t.replace(/\[\[([^\]]+)\]\]/g,(e,t)=>{let s=t.toLowerCase().replace(/\s+/g,"-");return`<a href="/knowledge/${s}" class="text-teal-400 hover:text-teal-300 underline">${t}</a>`});return r.jsx("p",{dangerouslySetInnerHTML:{__html:e}})}return r.jsx("p",{children:e})},strong:({children:e})=>r.jsx("strong",{className:"font-bold text-white",children:e}),pre:({children:e})=>r.jsx("pre",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto",children:e}),code:({children:e,className:t})=>{let s=t?.includes("language-");return s?r.jsx("code",{className:t,children:e}):r.jsx("code",{className:"bg-zinc-800 text-zinc-200 px-1 py-0.5 rounded text-sm",children:e})},a:({href:e,children:t})=>r.jsx("a",{href:e,className:"text-teal-400 hover:text-teal-300 underline",target:e?.startsWith("http")?"_blank":void 0,rel:e?.startsWith("http")?"noopener noreferrer":void 0,children:t})},children:t.content}),t.tags.length>0&&r.jsx("div",{className:"flex flex-wrap gap-2 mt-8 pt-8 border-t border-zinc-800",children:t.tags.map(e=>r.jsx(d(),{href:`/knowledge?tag=${encodeURIComponent(e)}`,className:"px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors",children:e},e))})]}),s.length>0&&(0,r.jsxs)("div",{className:"border-t border-zinc-800 pt-8 mt-12",children:[r.jsx("h2",{className:"text-2xl font-bold text-zinc-100 mb-6",children:"Connected Articles"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(e=>r.jsx(d(),{href:`/knowledge/${e.slug}`,className:"group",children:r.jsx(o.Z,{children:(0,r.jsxs)("div",{className:"p-6",children:[r.jsx("h3",{className:"text-lg font-semibold text-zinc-100 group-hover:text-zinc-50 duration-150 mb-2",children:e.title}),r.jsx("p",{className:"text-sm text-zinc-400 line-clamp-3",children:"Connected article description"}),(0,r.jsxs)("div",{className:"flex items-center gap-2 mt-4 text-xs text-zinc-500",children:[r.jsx(l.Z,{className:"w-3 h-3"}),Intl.DateTimeFormat(void 0,{dateStyle:"medium"}).format(new Date("2024-01-01"))]})]})})},e.id))})]})]})})})]})}s(1991)}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[221,614,889,719,182,412,89,105,903,51],()=>__webpack_exec__(5315));module.exports=s})();