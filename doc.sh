wget --no-check-certificate --quiet \
  --method POST \
  --timeout=0 \
  --header 'Content-Type: application/json' \
  --body-data '{"query":"mutation insertXml($xml: xml!,$user: uuid!) {\r\n  insert_XML(objects: {xml: $xml, user: $user}) {\r\n    affected_rows\r\n  }\r\n}","variables":{"xml":"<xml>abc</xml>","user":"86ab5b35-750e-459d-93a4-3a262478c117"}}' \
   'https://skw.souzaroxo.com.br/v1/graphql'
