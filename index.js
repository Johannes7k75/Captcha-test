let SECRET_KEY = "dfb2e89e-71d1-4b28-aa5a-e9d38b1cc84d"    // replace with your secret key
let VERIFY_URL = "https://hcaptcha.com/siteverify"
let token = request.POST_DATA['h-captcha-response']
let data = { 'secret': SECRET_KEY, 'response': token }
let response = http.post(url=VERIFY_URL, data=data)
let response_json = JSON.parse(response.content)
let success = response_json['success']

alert(success)

// const response = await fetch("https://reqbin.com/echo/post/json", {
// method: 'POST',
// headers: {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// },
// body: `{
//    "Id": 78912,
//    "Customer": "Jason Sweet",
//    "Quantity": 1,
//    "Price": 18.00
//   }`,
// });

// response.json().then(data => {
//   console.log(data);
// });