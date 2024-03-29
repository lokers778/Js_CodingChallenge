
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const adults=people.some((element)=>{
    const data=(new Date()).getFullYear()
    if((data-element.year)>=19){
        return true
    }
})
// Array.prototype.every() // is everyone 19 or older?
const alladults=people.every((element)=>{
    const data=(new Date()).getFullYear()
    if(data-element.year>=19){
        return true
    }
})

// Array.prototype.find()
// find the comment with the ID of
const commentsId=comments.find((e)=>{
    if(e.id=== 823423) {
        return true
    }
})
// Array.prototype.findIndex()
const commentsIndex=comments.findIndex((e)=>{
  return  e.id=== 823423

})
comments.splice(commentsIndex,1)
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log(adults,alladults,commentsId,commentsIndex)