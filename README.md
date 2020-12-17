# Documentção para envio XML

###### Documentção para envio de xml para Souza Roxo
###### 

Para que possar fazer POST é necessario ID deve ser solicitado ti@souzaroxo.com.br

Api via HTTP atarvaz método POST em GraphQL.
Segue a baxio exemplo basico da estrutura do POST e algums exemplos de código 

###### QUERY
`
mutation insertXml($xml: xml!,$user: uuid!) {
  insert_XML(objects: {xml: $xml, user: $user}) {
    affected_rows
  }
}`

###### GRAPHQL VARIABLES 
`
{
  "xml": "<xml>abc</xml>",
  "user": "86ab5b35-750e-459d-93a4-3a262478c117"
}`

## HTTP

POST /v1/graphql HTTP/1.1
Host: skw.souzaroxo.com.br:442
Content-Type: application/json
Content-Length: 226

{"query":"mutation insertXml($xml: xml!,$user: uuid!) {\r\n  insert_XML(objects: {xml: $xml, user: $user}) {\r\n    affected_rows\r\n  }\r\n}","variables":{"xml":"<xml>abc</xml>","user":"86ab5b35-750e-459d-93a4-3a262478c117"}}

## JavaScript (recomendado)

[Exemplo de código em JavaScript](https://github.com/Slender1808/xml-docs/blob/main/doc.js)

[Exemplo de código em TypeScript](https://github.com/Slender1808/xml-docs/blob/main/doc.ts)

[Exemplo de código em React](https://github.com/Slender1808/xml-docs/blob/main/doc.jsx)
  
## PHP

[Exemplo de código em PHP](https://github.com/Slender1808/xml-docs/blob/main/doc.php)

## Shell Wget

[Exemplo de código em Shell](https://github.com/Slender1808/xml-docs/blob/main/doc.sh)
   
## C - libcurl
 
 [Exemplo de código em C](https://github.com/Slender1808/xml-docs/blob/main/doc.cpp)
