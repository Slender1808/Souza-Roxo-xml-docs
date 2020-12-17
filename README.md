# Documentção para envio XML

###### Documentção para emvio de xml para Souza Roxo
###### 

Api via HTTP atarvaz método POST em GraphQL.
Segue a baxio exemplo basico da estrutura do POST e algums exemplos de código 

`
mutation insertXml($xml: xml!,$user: uuid!) {
  insert_XML(objects: {xml: $xml, user: $user}) {
    affected_rows
  }
}`

Variáveis 
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

var data = JSON.stringify({
  query: "mutation insertXml($xml: xml!,$user: uuid!) {\r\n  insert_XML(objects: {xml: $xml, user: $user}) {\r\n    affected_rows\r\n  }\r\n}",
  variables: {"xml":"<xml>abc</xml>","user":"86ab5b35-750e-459d-93a4-3a262478c117"}
});



# Exemplos a baixo
## JavaScript (recomendado)

[Exemplo de codigo em JavaScript](https://github.com/Slender1808/xml-docs/blob/main/doc.js)

[Exemplo de codigo em TypeScript](https://github.com/Slender1808/xml-docs/blob/main/doc.ts)

[Exemplo de codigo em React](https://github.com/Slender1808/xml-docs/blob/main/doc.jsx)
  
## Shell Wget

wget --no-check-certificate --quiet \
  --method POST \
  --timeout=0 \
  --header 'Content-Type: application/json' \
  --body-data '{"query":"mutation insertXml($xml: xml!,$user: uuid!) {\r\n  insert_XML(objects: {xml: $xml, user: $user}) {\r\n    affected_rows\r\n  }\r\n}","variables":{"xml":"<xml>abc</xml>","user":"86ab5b35-750e-459d-93a4-3a262478c117"}}' \
   'https://skw.souzaroxo.com.br:442/v1/graphql'
   
## C - libcurl
 
 
CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "POST");
  curl_easy_setopt(curl, CURLOPT_URL, "https://skw.souzaroxo.com.br:442/v1/graphql");
  curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
  curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
  struct curl_slist *headers = NULL;
  headers = curl_slist_append(headers, "Content-Type: application/json");
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
  const char *data = "{\"query\":\"mutation insertXml($xml: xml!,$user: uuid!) {\\r\\n  insert_XML(objects: {xml: $xml, user: $user}) {\\r\\n    affected_rows\\r\\n  }\\r\\n}\",\"variables\":{\"xml\":\"<xml>abc</xml>\",\"user\":\"86ab5b35-750e-459d-93a4-3a262478c117\"}}";
  curl_easy_setopt(curl, CURLOPT_POSTFIELDS, data);
  res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);
