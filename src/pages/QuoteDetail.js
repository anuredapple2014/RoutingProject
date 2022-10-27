import { Fragment } from "react";
import { useParams,Route } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments'
const QuoteDetail = () => {
  const params = useParams();
  const DUMMY_QUOTES = [
    {id: 'q1', author:'Max', text:'Learning React is Fun'},
    {id: 'q2', author:'Maxmilian', text:'Learning React is great!'},
    ];

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if(!quote){
    return <p>No quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} auther={quote.auther}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
{ /*we can also set this  path='/quotes/:quoteId/comments'  */ }
       <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
