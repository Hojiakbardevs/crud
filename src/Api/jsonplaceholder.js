//?  Get application

// const url = "https://jsonplaceholder.org/posts/1";
//  const  getApi=fetch(url);
//   getApi.then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => console.log(error));

//?  Post application

// const Posturl = "https://jsonplaceholder.typicode.com/posts";
// const postdata = {
//   username: "Hojiakbar",
//   email: "Abdulhakimovhojiakbar123@gmail.com",
// };
// let PostApi = fetch(Posturl, {
//   method: "POST",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify(postdata),
// });

// PostApi.then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//?  Put application

// const Putturl = "https://jsonplaceholder.typicode.com/posts/1";
// const putdata = {
//   username: "Hojiakbar",
//   email: "Abdulhakimovhojiakbar123@gmail.com",
// };
// let PostApi = fetch(Putturl, {
//   method: "PUT",
//   headers: { "Content-type": "application/json" },
//   body: JSON.stringify(putdata),
// });

// PostApi.then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ?? delete api


// const url = "https://jsonplaceholder.typicode.com/posts/1";
// let DeleteApi = fetch(url, {
//   method: "DELETE",
// });

// DeleteApi.then((res) => {
//     if(res.ok){
//         console.log("api was deleted");
//     }else{
//         console.log("Api isn't was delete");
//     }
// })
//   .catch((error) => console.log(error));

// Atamalarning har bir hujjat bo'yicha "Term Frequency" (TF) yoki atama chastotasini hisoblash uchun quyidagi formuladan foydalanamiz:

// \[ \text{TF}(t, d) = \frac{\text{Atama t ni hujjatda necha marta paydo bo‘lganligi}}{\text{Hujjatdagi jami so‘zlar soni}} \]

// Bu formulada:
// - \( \text{TF}(t, d) \) atama chastotasi (term frequency) hisoblanadi.
// - \( t \) atama (so'z).
// - \( d \) hujjat.
// - "Atama t ni hujjatda necha marta paydo bo‘lganligi" atama \( t \) ni hujjatda necha marta paydo bo'lganligini ifodalaydi.
// - "Hujjatdagi jami so‘zlar soni" hujjatdagi so'zlar sonini ifodalaydi.

// Quyidagi jadvalda hujjatlarning har bir so'z bo'yicha atama chastotalarini ko'rsatamiz:

// ### TF (Atama Chastotasi) Jadvali:

// | So'z        | Doc 1 | Doc 2 | Doc 3 |
// |-------------|-------|-------|-------|
// | Olam        | 0.222 | 0.111 | 0.000 |
// | Oltin       | 0.111 | 0.111 | 0.000 |
// | olma        | 0.111 | 0.111 | 0.111 |
// | duo         | 0.111 | 0.111 | 0.111 |
// | nasihat     | 0.111 | 0.111 | 0.111 |
// | bilim       | 0.111 | 0.000 | 0.111 |
// | mustahkam   | 0.111 | 0.000 | 0.000 |
// | foyda       | 0.000 | 0.111 | 0.000 |
// | vitamin     | 0.000 | 0.111 | 0.000 |
// | boy         | 0.000 | 0.111 | 0.000 |
// | ta'lim      | 0.111 | 0.111 | 0.111 |
// | iroda       | 0.000 | 0.111 | 0.000 |
// | jasur       | 0.000 | 0.111 | 0.111 |
// | nodon       | 0.000 | 0.000 | 0.111 |
// | ona         | 0.000 | 0.000 | 0.111 |
// | kitob       | 0.000 | 0.000 | 0.111 |

// Bu jadvalda, har bir so'z bo'yicha atama chastotalari ko'rsatilgan. Örnek uchun, "Olam" so'zi "Doc 1"da \(0.222\) marta, "Doc 2"da \(0.111\) marta paydo bo'lgan.

// Natijada, atamalarning har bir hujjat bo'yicha atama chastotalarini hisoblash bilan hujjatlardagi so'zlarning qanday intensivlikda ishlatilganligini aniqlashimiz mumkin.


// Olam	    0.222	0.111	0.000
// Oltin	    0.111	0.111	0.000
// olma	    0.111	0.111	0.111
// duo	        0.111	0.111	0.111
// nasihat	    0.111	0.111	0.111
// bilim	    0.111	0.000	0.111
// mustahkam	0.111	0.000	0.000
// foyda	    0.000	0.111	0.000
// vitamin	    0.000	0.111	0.000
// boy	        0.000	0.111	0.000
// talim	    0.111	0.111	0.111
// iroda	    0.000	0.111	0.000
// jasur	    0.000	0.111	0.111
// nodon	    0.000	0.000	0.111
// ona	        0.000	0.000	0.111
// kitob	    0.000	0.000	0.111


// IDF (Teskari Hujjat Chastotasi) Jadvali:
// So'z	IDF(Teskari Hujjat Chastotasi)
// Olam	    0.585
// Oltin	    0.585
// olma	    0.000
// duo 	    0.000
// nasihat	    0.000
// bilim	    0.585
// mustahkam	0.585
// foyda	    0.585
// vitamin	    0.585
// boy	        0.585
// talim	    0.000
// iroda	    0.585
// jasur	    0.000
// nodon	    0.585
// ona	        0.585
// kitob	    0.585





// Bu jadvalda har bir so'zning teskari hujjat chastotasi (IDF) keltirilgan. Örnek uchun, "Olam" so'zi teskari hujjat chastotasi 
// 0.585
// 0.585, "Olma" so'zi esa hujjatlarda paydo bo'lmaganligi sababli 
// 0
// 0 hisoblanadi.

// Teskari hujjat chastotasi (IDF) hisoblash, atamalarning umumiy hujjatlarda qanday intensivlikda ishlatilganligini ko'rsatishga yordam beradi.



// Olam	    0.194	0.000	0.000
// Oltin	    0.097	0.097	0.000
// olma	    0.000	0.000	0.000
// duo	        0.000	0.000	0.000
// nasihat	    0.000	0.000	0.000
// bilim	    0.065	0.000	0.130
// mustahkam	0.097	0.000	0.000
// foyda	    0.000	0.097	0.000
// vitamin	    0.000	0.097	0.000
// boy	        0.000	0.097	0.000
// talim	    0.000	0.000	0.000
// iroda	    0.000	0.097	0.000
// jasur	    0.000	0.000	0.065
// nodon	    0.000	0.000	0.097
// ona	        0.000	0.000	0.097
// kitob	    0.000	0.000	0.097



