import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function JavascriptCode({ children }) {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={atomOneDark}
      customStyle={{ width: 'fit-content' }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default JavascriptCode
