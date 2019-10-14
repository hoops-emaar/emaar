import { Router } from 'express';
import musteri from '../models/musteri'
import kuponMusteri from '../models/kuponMusteri'
import kuponlar from '../models/kuponlar'

const mongoose = require('mongoose');
const request = require('request');

mongoose.set('useFindAndModify', false);

const router = Router();



router.post("/form", async (req, res) => {
var tel = "90" + req.body.telefon;

console.log('&customer_name=' + req.body.ad + '&customer_surname=' + req.body.soyad + '&customer_gender=' + req.body.cinsiyet + '&customer_email=' + req.body.email + '&customer_accepts_kvkk=true')
    var ekurl = 'customer_name=' + req.body.ad + '&customer_phone=%2B' + tel +  '&customer_surname=' + req.body.soyad + '&customer_gender=' + req.body.cinsiyet + '&customer_email=' + req.body.email + '&customer_accepts_kvkk=' + true + '&event_id=5da05a54b802505e10ab99b1' + '&customer_allows_sms='+true + 'customer_allows_email=' + true
   

//     var options = { 
//       url: 'https://api.emaar.com.tr/ext/customers/save?' + ekurl,
//       headers: {
//         'Authorization': 'Bearer 11A87E03-9712-41D2-B5B6-D2733AE77B1E',
//         'Content-Type': 'application/json'
//       },
//      method: 'POST',
      
//     }

//     request(options, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(res);
//   console.log(body.explanation);
// });

request.post({
  headers: {
  
  'content-type' : 'application/x-www-form-urlencoded',
  'Authorization': 'Bearer 11A87E03-9712-41D2-B5B6-D2733AE77B1E'},
  url:     'https://api.emaar.com.tr/ext/customers/save?',
  body:    ekurl
}, function(error, response, body){
  console.log(error);
  console.log(response);
  console.log(body);
  console.log(ekurl)
})

//     $.ajax({
//   url:  "https://api.emaar.com.tr/ext/customers/save",
//   header: 'Authorization: Bearer BEARER_TOKEN',
//   header: 'Content-Type: application/json',
//   data: {
// 	"customer_phone": req.body.telefon,
// 	"customer_name": req.body.ad,
// 	"customer_surname": req.body.soyad,
//     "customer_province": req.body.adres,
//     "customer_email": req.body.email,
// 	"customer_accepts_kvkk": true,
	
// },
// success: function(){
//     console.log(res);
// }
//     });
return res.send("success or failure");
})

router.post("/formVale", async (req, res) => {
  var tel = "90" + req.body.telefon;
  
  console.log('&customer_name=' + req.body.ad + '&customer_surname=' + req.body.soyad + '&customer_gender=' + req.body.cinsiyet + '&customer_email=' + req.body.email + '&customer_accepts_kvkk=true')
      var ekurl = 'customer_name=' + req.body.ad + '&customer_phone=%2B' + tel +  '&customer_surname=' + req.body.soyad + '&customer_gender=' + req.body.cinsiyet + '&customer_email=' + req.body.email + '&customer_accepts_kvkk=' + true + '&event_id=5da05a90b802505e10ab99b2' + '&customer_allows_sms='+true + 'customer_allows_email=' + true
     
  
  //     var options = {
  //       url: 'https://api.emaar.com.tr/ext/customers/save?' + ekurl,
  //       headers: {
  //         'Authorization': 'Bearer 11A87E03-9712-41D2-B5B6-D2733AE77B1E',
  //         'Content-Type': 'application/json'
  //       },
  //      method: 'POST',
        
  //     }
  
  //     request(options, (err, res, body) => {
  //   if (err) { return console.log(err); }
  //   console.log(res);
  //   console.log(body.explanation);
  // });
  
  request.post({
    headers: {
    
    'content-type' : 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer 11A87E03-9712-41D2-B5B6-D2733AE77B1E'},
    url:     'https://api.emaar.com.tr/ext/customers/save?',
    body:    ekurl
  }, function(error, response, body){
    console.log(error);
    console.log(response);
    console.log(body);
    console.log(ekurl)
  })
  
  //     $.ajax({
  //   url:  "https://api.emaar.com.tr/ext/customers/save",
  //   header: 'Authorization: Bearer BEARER_TOKEN',
  //   header: 'Content-Type: application/json',
  //   data: {
  // 	"customer_phone": req.body.telefon,
  // 	"customer_name": req.body.ad,
  // 	"customer_surname": req.body.soyad,
  //     "customer_province": req.body.adres,
  //     "customer_email": req.body.email,
  // 	"customer_accepts_kvkk": true,
    
  // },
  // success: function(){
  //     console.log(res);
  // }
  //     });
  return res.send("success or failure");
  })

router.get("/musteriler", async (req, res)=>{
  const must = await musteri.find();
  return res.send(must);
})

router.get("/kuponlar", async (req, res)=>{
  const kupon = await kuponlar.find();
  return res.send(kupon);
})

router.get("/kuponMusteri", async (req, res)=>{
  const kpnmMust = await kuponMusteri.find();
  return res.send(kpnmMust);
})

router.post("/musteriKaydet", async (req, res) =>{
  const must = new musteri({
    ad: req.body.ad,
    soyad: req.body.soyad,
    yas: req.body.yas,
    email: req.body.email,
    telefon: req.body.telefon,
    cinsiyet: req.body.cinsiyet,
    acceptsKvkk: req.body.kvkk
  })
  must.save()
  return res.send("success or failure");
})

router.post("/vale", async (req, res) =>{
  const vale = new kuponMusteri({
    ad: req.body.ad,
    soyad: req.body.soyad,
    yas: req.body.yas,
    email: req.body.email,
    telefon: req.body.telefon,
    cinsiyet: req.body.cinsiyet,
    acceptsKvkk: req.body.kvkk
  })
  
  vale.save();
  return res.send("success or failure");
})



router.post("/valeKupon", async (req, res)=>{
  const kupon = await kuponlar.findOneAndUpdate(
    {_id: req.body.kuponId},
    {$set: {'used': true, 'owner': req.body.musteriId} },
    
    {new: true}
    );
    return res.send("failure or success");
})

router.post("/findKuponMusteri", async(req, res)=>{
  const must = kuponMusteri.find();
  const a = must.find(m => m.telefon === req.body.telefon);
  return res.send(a);
})
// router.get("/postKupon", async (req, res)=>{
//   const kpn = new kuponlar({
//     kod: "123123",
//     used: false
    
//   })
//   kpn.save();
// })


export default router;