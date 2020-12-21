CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "POST");
  curl_easy_setopt(curl, CURLOPT_URL, "https://skw.souzaroxo.com.br/hasura/v1/graphql");
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
