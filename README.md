# Typescript Maps and Types.

___

## Index of Contents

- [Introduction](#intro)
- [pre-requisites](#pre-requisites)
- [About Typescript](#about-typescript)
- [What is a Map?](#what-is-a-map)
- [Map technically explained](#map-technically-explained)
- [Map Operations](#map-operations)
- [Time for action](#time-for-action)
- [Time for explanation](#time-for-explanation)
- [Map Types are a bit complex](#map-types-are-a-bit-complex)
- [What do I love about Maps?](#what-do-i-love-about-maps)
- [Time for action](#time-for-action)
- [Time for explanation](#time-for-explanation)
- [The Enchanted Heap in Node.js](#the-enchanted-heap-in-nodejs)
- [Pixie Programmers and Their Creations](#pixie-programmers-and-their-creations)
- [The Forest of Variables](#the-forest-of-variables)
- [References: The Thread of Fate](#references-the-thread-of-fate)
- [The Memory Sprites](#the-memory-sprites)
- [The Great Garbage Collector Dragon](#the-great-garbage-collector-dragon)
- [The Eternal Dance of Creation and Destruction](#the-eternal-dance-of-creation-and-destruction)
- [Time for action 2](#time-for-action-2)
- [Time for action 3](#time-for-action-3)
- [Conclusion](#conclusion)
- [References](#references)
- [The End](#the-end)
- [JetBrains OSS License](#jetbrains-oss-license)

___

### Intro

Let's get real for a moment,

Navigating the treacherous waters of TypeScript type definitions for a `Map` can sometimes feel like trying to tame a wild beast. Why, you ask? Well, there are a few formidable obstacles in our path:

1. **The Dynamic Dance of JavaScript**: In the world of JavaScript, variables can shape-shift between types at the drop of a hat. It's a dynamic realm where nothing stands still. Now, enter TypeScript, with its determination to bring order through static typing. Trying to reconcile this dynamic nature with TypeScript's rigid expectations can be quite the puzzle.

2. **Map's Malleable Keys and Values**: The JavaScript `Map` is a shape-shifter's paradise. It welcomes keys and values of all stripes, from objects to functions to plain old primitives. This kaleidoscope of possibilities can leave us scratching our heads when we try to pin down precise types in TypeScript.

3. **The Absence of Key Discipline**: JavaScript doesn't believe in being strict when it comes to keys in a `Map`. It lets any data type waltz in and claim that role. TypeScript, on the other hand, strives to strike a balance between flexibility and type safety, which can feel like a tightrope walk.

So, my friend, as we embark on this journey to define TypeScript types for a `Map`, remember that we're navigating through a dynamic landscape filled with flexible creatures and a lack of key order. It's an adventure that requires both creativity and caution.

I struggled (struggling?) a lot to understand how to define the type of a Map in TypeScript. I'll tell you one more metaphor and I'm done:

**TypeScript is like a careful librarian;** it wants to know precisely what you're storing.
But since a Map can hold various types of data, it can be a challenge to define the type accurately.

It's like trying to label a box that can hold everything from books to bananas.
But once you conquer this, you'll unlock the power of organised, high-speed data storage with a Map!

Once I understood that was required a lot of attention and be precisely declarative,
I've found my way in this intricate world of Typescript Map.

I can now see also the benefit of using Map and Set instead of Object in terms of performance and,
not the least, the simplicity to retrieve data, manipulate it, and pass it around as references. 

Iterating over a Map is also a breeze...

>Let's get started.

___

### Pre-requisites

___

- [ ] node.js
- [ ] typescript
- [ ] git
- [ ] vscode, webstorm, neovim with LSP, or any other editor/IDE of your choice.

#### Serious Pillow Talk
Have a heart-to-heart conversation with your computer.
Explain to it why TypeScript, Node.js, an IDE, and git are essential for your programming journey.

Tell your computer how much you appreciate its hard work and that installing these tools would mean the world to you.

You never know; it might just oblige.

#### keep in mind

This is a learning tutorial, you may be asked to correct some errors in the code.

___


### About Typescript

___

TypeScript is like a trusty sidekick for JavaScript developers, making their coding adventures smoother and safer.
It's like putting on a seatbelt before hitting the road.

Imagine JavaScript as the wild west of programming languages

`flexible, powerful, but sometimes unpredictable.`  
`TypeScript swoops in to bring order to this frontier.`

It's a statically typed superset of JavaScript,
which means it helps catch bugs and improve code quality before you even run your program.

### What is a Map?

___

<div><blockquote>Why did the terrestrial Map go to therapy?</blockquote></div>
<div style="text-align: right"><blockquote>Because it had too many issues with self-location!</blockquote></div>

___

In TypeScript, a "Map" is like a magical dictionary for your code.
It's a data structure that allows you to store key-value pairs,
just like how you find places on a real-world map with their coordinates.
Each "key" is unique, like the address of a building, and it's associated with a "value",
which can be any data you want to store, like the name of the building.

So,
think of a TypeScript Map as a handy tool to associate information (values) with unique identifiers (keys) in your code,
making it easy to retrieve and manage data.
It's like having a GPS for your data, helping you find what you need quickly and efficiently!

___

### Map technically explained

___

<div><blockquote>Why did the Map go to the doctor?</blockquote></div>
<div style="text-align: right"><blockquote>Because it was feeling a little flat!</blockquote></div>

___

- **Heap Allocation**:
  - When you create a Map in TypeScript, memory is allocated on the heap to store the Map object itself.
  - Additionally, memory is allocated dynamically to store the key-value pairs you add to the Map.

- **Key and Value Storage**:
  - Keys and values in a Map are stored as references to their actual data. This means that the Map stores references to objects or values rather than the actual objects or values themselves.
  - These references are lightweight, occupying a fixed amount of memory regardless of the size or complexity of the objects or values they point to.

- **Hashing Mechanism**:
  - Internally, a Map uses a hashing mechanism to efficiently locate and store key-value pairs.
  - When you call `set(key, value)` to add a pair, TypeScript computes a hash of the key. This hash is used to determine where in memory to store the value.
  - The hash allows Maps to provide fast access to values by key, typically with O(1) complexity.

- **Memory Usage Efficiency**:
  - Maps are memory-efficient because they only store references to keys and values, which are usually small compared to the actual data.
  - The memory overhead of a Map is relatively low, consisting mainly of the Map object itself and some internal data structures for managing key-value pairs.

- **Garbage Collection**:
  - As with any data structure, memory management and garbage collection are important considerations. When a key-value pair is deleted or no longer referenced by the Map or any other part of your code, the memory associated with that pair becomes eligible for garbage collection.
  - This means that, over time, the memory used by the Map can be reclaimed by the JavaScript engine's garbage collector.

- **Complexity of Map Operations**:
  - The memory complexity of Map operations (e.g., `set()`, `get()`, `delete()`) is typically constant time (O(1)) on average, which means that the memory usage doesn't significantly increase with the size of the Map.
  - However, the specific implementation and behaviour might vary between JavaScript engines and TypeScript versions.

___

### Map Operations

___

Methods for interacting with a Map include:

- **set(key, value)**: Adds a key-value pair to the Map.
- **get(key)**: Retrieves the value associated with a key.
- **has(key)**: Checks if a key exists in the Map.
- **delete(key)**: Removes a key-value pair based on the key.
- **clear()**: Removes all key-value pairs, resetting the Map.
- **size**: Returns the number of key-value pairs in the Map.
- **forEach(callbackFn)**: Iterates through key-value pairs, executing a callback for each.
- **keys()**: Returns an iterable of keys in the Map.
- **values()**: Returns an iterable of values in the Map.
- **entries()**: Returns an iterable of key-value pairs in the Map.

___

### Time for action

___

I assume you've already installed node.js, typescript, and git and have a basic understanding of how to use them.

open a terminal and run the following commands. one bite at a time.

```shell
git clone https://github.com/nutsloop/typescript-maps-and-types.git
cd typescript-maps-and-types
npm install
npm run build
```

you will see the following output because TypeScript has a complaint.

```shell
> @nutsloop/typescript-maps-and-types@0.0.1 build
> npx tsc

src/lib/city.ts:58:28 - error TS2769: No overload matches this call.
  Overload 1 of 2, '(key: "name" | "country" | "gps-coordinates", value: string): CityInfo', gave the following error.
    Argument of type '"actual"' is not assignable to parameter of type '"name" | "country" | "gps-coordinates"'.
  Overload 2 of 2, '(key: "population", value: number): CityInfo', gave the following error.
    Argument of type '"actual"' is not assignable to parameter of type '"population"'.

58 city.get( 'Beijing' ).set( 'actual', 'Beijing' );
                              ~~~~~~~~


TSFILE: /some-path/typescript-maps-and-types/index.js
TSFILE: /some-path/typescript-maps-and-types/types/index.d.ts
TSFILE: /some-path/typescript-maps-and-types/lib/city.js
TSFILE: /some-path/typescript-maps-and-types/types/lib/city.d.ts

Found 1 error in src/lib/city.ts:58
```

open the file `src/lib/city.ts` and fix the error.

```typescript
city.get( 'Beijing' ).set( 'actual', 'Beijing' );
```

change it to

```typescript
city.get( 'Beijing' ).set( 'name', 'Beijing' );
```

now run the following command again.

```shell
npm run build
```

you will see the following output.

```shell
> @nutsloop/typescript-maps-and-types@0.0.1 build
> npx tsc

TSFILE: /Volumes/code/nutsloop/typescript-maps-and-types/index.js
TSFILE: /Volumes/code/nutsloop/typescript-maps-and-types/types/index.d.ts
TSFILE: /Volumes/code/nutsloop/typescript-maps-and-types/lib/city.js
TSFILE: /Volumes/code/nutsloop/typescript-maps-and-types/types/lib/city.d.ts
```

everything is fine now.

___

### Time for explanation.

___

Why was TypeScript complaining?

Imagine you're creating a digital atlas,
like a magical book that holds information about various cities around the world.
Each city has a unique name, GPS coordinates, country, and population.
You want to organise this data neatly.

```typescript
type City = Map<string, CityInfo>;
```

Think of `City` as the cover of your atlas.
It tells us that it's a collection of cities, but it's not just any collection, it's a Map.
And in this Map, the keys are strings (which will be the city names), and the values are `CityInfo`.

```typescript
type CityInfo = Map<'name' | 'gps-coordinates' | 'country', string> &
  Map<'population', number>;
```

Now, `CityInfo` is like a special page inside your atlas that holds detailed information about each city.
It's also a Map, but it's a bit more complex.
It uses two sets of keys and values:

- The first set of keys can be either `'name'`, `'gps-coordinates'`, or `'country'`, and the corresponding values are strings. This is like having specific sections on your city page for the city's name, GPS coordinates, and country.

- The second set of keys has only one option: `'population'`, and the value is a number. This section is dedicated to the city's population.

so, in the wrong code,
we were trying to set the value of the key `'actual'` which is not defined in the type `CityInfo`,
and that's why TypeScript was complaining.

is it clear now?

___

### Map Types are a bit complex

___

Defining the correct TypeScript type for a `Map` can be challenging due to several reasons:

- **Dynamic Nature of JavaScript**: JavaScript is dynamically typed, which means variables can change types at runtime. TypeScript aims to provide static typing, making it complex to map JavaScript's dynamic nature to TypeScript's static types.

- **Map's Flexible Keys and Values**: JavaScript `Map` allows keys and values of various data types, including objects, functions, and primitives, making it challenging to define strict types in TypeScript.

- **Lack of Static Key Constraints**: JavaScript doesn't enforce strict type constraints on keys in a `Map`, allowing any data type as a key. TypeScript must balance flexibility and type safety.

- **Use of Generics**: TypeScript's `Map` type uses generics to specify key and value types, which can lead to complex type definitions when dealing with diverse data types.

- **Type Inference and Union Types**: TypeScript uses type inference, resulting in complex union types for `Map` due to a variety of possible data types.

- **Recursive Definitions**: Defining `Map` with nested maps or complex data structures can lead to intricate type definitions.

- **Interoperability**: TypeScript must work with existing JavaScript code, including libraries without TypeScript definitions, complicating type accuracy for external `Map` instances.

___

### What do I love about Maps?

I can pass them around as references and not worry about returning them from functions,
because once modified, they're modified everywhere.

Maps are often better than objects in performance
when you need to store a large amount of data or when you want to use non-string keys.

- **Faster Access**: Maps are designed for faster data access, especially when you have a lot of items. With objects, JavaScript needs to convert non-string keys to strings before accessing them, which can slow things down. Maps allow you to use any data type as keys, so there's no need for this conversion step.

- **Order Preservation**: Maps preserve the order of items, which means they remember the sequence in which you added them. Objects, on the other hand, don't guarantee any specific order. This can be important when you need to iterate through your data in a particular sequence.

- **Easier Key Removal**: Removing an item from a Map is more straightforward and efficient than deleting a property from an object, especially when you have a lot of data.

>With Maps, you can use the `delete()` method, which is faster than the `delete` operator for objects.

___

> You said something before about the heap, What the heck is the heap?

#### The Enchanted Heap in Node.js

Deep within the enchanted forest of Node.js, there exists a mystical realm known as the Heap.
It's a place where the code's dreams and data's destiny intertwine in a dance of digital magic.

#### Pixie Programmers and Their Creations

Within this realm, pixie programmers work tirelessly, crafting spells (code) that bring digital creatures to life.
These creatures, also known as objects, come in all shapes and sizes.
Some are as tiny as a mouse, while others are as colossal as giants.

#### The Forest of Variables

As you venture deeper into the Heap, you'll stumble upon a wondrous forest filled with variables.
Each variable is like a tree, and it's adorned with leaves that represent values.
These values can be numbers, strings, or even references to other creatures (objects).

#### References: The Thread of Fate

In the Heap, everything is connected by a mystical thread called a reference.
When a pixie programmer creates an object, a reference is born, linking it to the variable that holds its power.
These references weave a web of connections throughout the forest,
allowing objects to find each other and work together.

#### The Memory Sprites

Beneath the forest floor, memory sprites dwell.
They tirelessly manage the memory space, making sure that objects are kept safe and well-organised.
When an object is no longer needed, the memory sprites gently guide it to the river of forgotten data,
where it dissolves into the mists of oblivion.

#### The Great Garbage Collector Dragon

Deep within the Heap, a mighty dragon known as the Great Garbage Collector slumbers.
When the forest becomes cluttered with unused objects, this dragon awakens.
It soars through the forest, breathing fiery logic,
and devours the abandoned objects, returning their memory to the sprites.

#### The Eternal Dance of Creation and Destruction

In this fantastical world of Node.js,
the Heap is a place where the forces of creation and destruction engage in an eternal dance.
It's a place where code gives life to objects, references bind them together,
and memory sprites ensure their harmonious existence.
And when the time comes, the Great Garbage Collector restores balance, allowing new dreams to take shape.

So, the next time you run your code in Node.js,
remember that you're casting spells and breathing life into digital creatures within the mystical Heap,
where fantasy and reality merge in a dance of bytes and dreams.

I think I've said enough.

___

### Time for action 2

___

 - Within the root folder of the project, run the following command.

```shell
npm run tsc:watch ## typescript compiler in watch mode
touch src/edit.ts
```

open the file `src/edit.ts` and add the following code.

```typescript
import { City, CityInfo } from './lib/city.js';

export function editing_city( city: City ): void {

  const NewOrleansCityInfo: CityInfo = new Map();

  NewOrleansCityInfo.set( 'name', 'New Orleans' );
  NewOrleansCityInfo.set( 'gps-coordinates', '29.9511° N, 90.0715° W' );
  NewOrleansCityInfo.set( 'country', 'United States' );
  NewOrleansCityInfo.set( 'population', 391006 );

  city.set( 'New Orleans', NewOrleansCityInfo );

}
```

```shell
touch src/run.ts
```

open the file `src/run.ts` and add the following code.

```typescript
import { city, iterate } from './lib/city.js';
import { editing_city } from './edit.js';

// iterate over the city object
iterate();

// pass the city Map and it will be modified adding a new city of New Orleans
editing_city( city );

// add a new city of Maracaibo
city.set( 'Maracaibo', new Map() );
city.get( 'Maracaibo' ).set( 'name', 'Maracaibo' );
city.get( 'Maracaibo' ).set( 'gps-coordinates', '10.6585° N, 71.6372° W' );
city.get( 'Maracaibo' ).set( 'country', 'Venezuela' );
city.get( 'Maracaibo' ).set( 'population', 1943901 );

console.log( '\n', 'After editing the city object:', '\n' );

iterate();
```

now lest run the code.

```shell
node run.js
```

the output is a bit long, take your time to read it.

#### Time for action 3

```shell
touch src/mod_city.ts
```

open the file `src/mod_city.ts` and add the following code.

```typescript
import type { CityInfo } from './lib/city.js';
import { city } from './lib/city.js';
export function return_new_orleans(): CityInfo {
  return city.get( 'New Orleans' );
}
```

edit the file `src/run.ts` and add the following code at the end.

```typescript

// working over the CityInfo Map for New Orleans
const new_orleans = return_new_orleans();
new_orleans.set( 'name', 'New Orleans is the city of music' );

console.log( '\n', 'After editing the New Orleans city object:', '\n' );

iterate();
```

any modification to the `city` Map will be reflected in all the references to it like Magic.

run the code again.

```shell
node run.js
```

as you can see, the changes are reflected in all the references to the `city` Map.

___

### Conclusion

___

- In this tutorial, you've learnt about TypeScript Maps and how they can help you organise data in your code.

- You also learned about the technical details of Maps, including how they're stored in memory and how they work under the hood.

- Finally, you learned about the benefits of using Maps over objects, including faster access, order preservation, and easier key removal.

- You also learned about the challenges of defining Map types in TypeScript, including the dynamic nature of JavaScript, the flexible keys and values of Maps, and the lack of static key constraints.

- You learned about the use of generics, type inference, and recursive definitions in Map types.

___

### References

___

- [TypeScript Maps](https://www.typescriptlang.org/docs/handbook/2/objects.html#maps)
- [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Neovim](https://neovim.io/)
- [Neovim LSP](https://neovim.io/doc/user/lsp.html)
- [Language Server Protocol](https://microsoft.github.io/language-server-protocol/)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Map.prototype.set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
- [Map.prototype.get()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)
- [Map.prototype.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)
- [Map.prototype.delete()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)
- [Map.prototype.clear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)
- [Map.prototype.size](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)
- [Map.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
- [Map.prototype.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)
- [Map.prototype.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)
- [Map.prototype.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)

___

### The End

___

<div><blockquote>Why did the Map and Set break up?</blockquote></div>
<div style="text-align: right"><blockquote>Because they couldn't find a common key to their relationship!</blockquote></div>

___

### Spoiler Alert

___

The next tutorial will be about TypeScript Sets and Types. 

> shhhh, don't tell anyone.

> maybe about Rust, who knows.

> maybe about the weather, who knows.

___

### links

___

to find out where it has been published, where it will be published, and how to contribute, go ahead and click on the following link:

- [discord](https://discord.gg/TZzm9uZD)

if you would like to read more stories and you like the style and it has been useful for you, consider buying me a coffee!

- [buy me a coffee](https://www.buymeacoffee.com/nutsloop)

___

### JetBrains OSS License

___

I want to thank JetBrains for granting me an Open Source Software license for all their products.
This opportunity gives me
strength to keep on going with my studies and personal project.  
To learn more about this opportunity, have a look
at [Licenses for Open Source Development - Community Support](https://www.jetbrains.com/community/opensource/).

_Thank you_
