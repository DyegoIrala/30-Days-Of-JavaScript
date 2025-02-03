 //1 'Love is the best thing in this world. Some found their love and some are still looking for their love.
// ' Count the number of word love in this sentence.
let phrase = "Love is the best thing in this world. Some found their love and some are still looking for their love"
let wordLove = (phrase.match(/love/gi))
console.log(wordLove)
console.log(wordLove.length)
let numbeOfLove = wordLove.length
console.log(numbeOfLove)

//2 Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
let phraseTwo = "You cannot end a sentence with because because because is a conjunction"
let numberBecause = phraseTwo.match(/because/gi)
console.log(numberBecause)
console.log(numberBecause.length)

//3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace())
let cleanedSentence = sentence.replace(/[^a-zA-Z\s]/g, '')
console.log(cleanedSentence)
let words = cleanedSentence.split(/\s+/)
console.log(words)

//4 Calculate the total annual income of the person by extracting the numbers from the following text.
//  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let sentenceTwo = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
numbers = sentenceTwo.match(/\d+/g)
console.log(numbers)
let mensual = parseInt(numbers[0])
let bonoAnual = parseInt(numbers[1])
let courseEarn = parseInt(numbers[2])
let earns = mensual*12 + bonoAnual + courseEarn*12
console.log(earns)