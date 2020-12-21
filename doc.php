<?php

// PHP - cURL

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://skw.souzaroxo.com.br:442/v1/graphql',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{"query":"mutation insertXml($xml: xml!,$user: uuid!) {\\r\\n  insert_XML(objects: {xml: $xml, user: $user}) {\\r\\n    affected_rows\\r\\n  }\\r\\n}","variables":{"xml":"<xml>abc</xml>","user":"86ab5b35-750e-459d-93a4-3a262478c117"}}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>

<?php

// PHP - HTTP_Request2

require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://skw.souzaroxo.com.br:442/v1/graphql');
$request->setMethod(HTTP_Request2::METHOD_POST);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Content-Type' => 'application/json'
));
$request->setBody('{"query":"mutation insertXml($xml: xml!,$user: uuid!) {\\r\\n  insert_XML(objects: {xml: $xml, user: $user}) {\\r\\n    affected_rows\\r\\n  }\\r\\n}","variables":{"xml":"<xml>abc</xml>","user":"86ab5b35-750e-459d-93a4-3a262478c117"}}');
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}
?>

<?php 

//PHP - pecl_http

$client = new http\Client;
$request = new http\Client\Request;
$request->setRequestUrl('https://skw.souzaroxo.com.br:442/v1/graphql');
$request->setRequestMethod('POST');
$body = new http\Message\Body;
$body->append('{"query":"mutation insertXml($xml: xml!,$user: uuid!) {\\r\\n  insert_XML(objects: {xml: $xml, user: $user}) {\\r\\n    affected_rows\\r\\n  }\\r\\n}","variables":{"xml":"<xml>abc</xml>","user":"86ab5b35-750e-459d-93a4-3a262478c117"}}');
$request->setBody($body);
$request->setOptions(array());
$request->setHeaders(array(
  'Content-Type' => 'application/json'
));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();
?>
