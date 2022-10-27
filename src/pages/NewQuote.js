import QuoteForm from '../components/quotes/QuoteForm';


const NewQuote = () =>{
const addQuoteHandler = quoteData =>{
  console.log(quoteData);
};
  return (
     <QuoteForm onAddQuote={addQuoteHandler} />
  )
}
export default NewQuote;



// const NewQuote = () => {
//   return (
//     <h1>New Quotes</h1>
//   )
// }

// export default NewQuote
