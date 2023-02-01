ARRAY CARDIO - notes from Wes Bos Javascript 30 for 30 series

completed code-alongs 

CloudDocs/Code/Education/the-odin-project/sections/Fundamentals-Part-5/array-methods

/filter-map-sort-reduce.html
/some-every-find-spreads.html

older completions, (same thing):

/07-Array Cardio Day 2/index-START.html
/wes-bom-array-methods-javascript/index-START.html



1/25/23


several methods when working with arrays

1. filter()
2. map()
3. reduce()
4. sort()

descriptions:

1. filter()
    you pass a function into filter, which will loop over every item in an array and either keep something or not - returning a new array with whatever was kept. 

    official definition
    The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.


    const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    console.table(fifteen);


2. map()

    self explained definition
    you pass a function into this method as well, and it loops over every item in this array as well but it always returns the same amount of items as it was originally passed, but having done something to them or changed them in some way.

    official definition
    map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements.


    const fullNames = inventors.map(inventor => inventor.first + " " + inventor.last);
    console.log(fullNames);


3. reduce()

    official definition
    The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value


    const byAge = inventors.sort(inventor = (a, b) => {
      if (a.year > b.year) {
        return 1;
      } else {
        return -1;
      }});

      or

      const byAge2 = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );



4. sort()

    official definition
    The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.


     const sumYears = inventors.reduce((total, inventor)=> {
      return total + (inventor.passed - inventor.year)
    }, 0);


5. some()

    official definition
    he so me() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.

    const isAdult = people.some(person=>{
        const currentYear = (new Date()).getFullYear();
        return currentYear - person.year >= 19; 
        });



6. every()

    official definition
    The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements. The every() method returns false if the function returns false for one element.


      const isNineteen = people.every(function(person){
        const isOfAge = (new Date()).getFullYear();
        if(isOfAge - person.year >= 19){
            return true
        };
    });


7. find()

    official definition
    find() The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.


    const search = comments.find(comment => comment.id === 823423 );


8. findIndex()


    const newSearch = comments.findIndex(comment => comment.id === 823423);
    console.log(newSearch); // using the console.log to search for the properties index number (1)
     // delete the comment with the ID of 823423
    comments.splice(newSearch, 1);



8. [...SPREADS]

    official definition
    The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.



