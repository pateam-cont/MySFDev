import { LightningElement } from 'lwc';

export default class Example1_Loop extends LightningElement {
  resultExpensiveLoop = '';
  resultOptimalLoop = '';
  numberOfIterations = 100000;

  
  runExpensiveLoop(event) {
    try {
      const start = performance.now();
    
      for(let i = 0; i < this.numberOfIterations; i++) {
        let parse = JSON.parse(JSON.stringify(myjson));
        Object.keys(parse).length; 
      }
  
      const end = performance.now();
      this.resultExpensiveLoop = ` Took ~${(end - start).toFixed()} milliseconds`;
    } catch(err) { 
      this.resultExpensiveLoop = err.message;
    }  
  }
    
  runOptimalLoop(event) {
    const start = performance.now();
    const parse = JSON.parse(JSON.stringify(myjson));

    for(let i = 0; i < this.numberOfIterations; i++) {
      Object.keys(parse).length; 
    }

    const end = performance.now();
    this.resultOptimalLoop = ` Took ~${(end - start).toFixed()} milliseconds`;
  }

}
const myjson = [{"_id":"5e84d9dc96978a9fc9a213b9","index":0,"guid":"11db4cf4-3a41-4dd2-80f8-998912a2e464","isActive":false,"balance":"$1,326.89","picture":"http://placehold.it/32x32","age":36,"eyeColor":"brown","name":"Avenida Bullock","gender":"female","company":"ZYTTREX","email":"avenidabullock@example.com","phone":"+1 (123) 123-1234","address":"90800 Any Avenue, Bend, Oregon, 807","about":"Ea voluptate aliquip velit laboris occaecat dolor mollit duis elit esse ut ea ex. Deserunt ullamco deserunt laboris pariatur velit aliqua exercitation. Consequat sit proident ut adipisicing laboris laborum excepteur anim proident sunt reprehenderit. Dolore elit eiusmod ut reprehenderit excepteur voluptate qui excepteur. Duis magna cillum magna deserunt proident id aliquip veniam nisi culpa ea.\r\n","registered":"2019-10-25T03:13:52 +04:00","latitude":43.543756,"longitude":5.34587,"tags":["ad","reprehenderit","laboris","ea","proident","amet","esse"],"friends":[{"id":0,"name":"Lynk Warner"},{"id":1,"name":"Mario Green"},{"id":2,"name":"Ratchet Walsh"}],"greeting":"Hello, Avenidia Bullock! You have 5 unread messages.","favoriteFruit":"apple"},{"_id":"5e84d9dc9ce2b5c4a417279b","index":1,"guid":"1711a475-c0fb-41bf-b783-57e295426604","isActive":true,"balance":"$1,341.02","picture":"http://placehold.it/32x32","age":35,"eyeColor":"green","name":"Pressondon England","gender":"male","company":"CUDUOS","email":"pressondonengland@example.com","phone":"+1 (123) 123-1234","address":"2310 Mostly Street, Fairlee, District Of Columbia, 2303","about":"Irure magna id fugiat cillum ut sit incididunt cupidatat irure labore anim aliqua. Fugiat elit cillum exercitation ipsum tempor irure do deserunt excepteur amet anim pariatur. Fugiat eu eu aliqua velit ut eiusmod amet id. Non magna ullamco amet in eu laborum exercitation aliqua est aliquip aliquip incididunt. Exercitation labore qui consequat nisi ex magna fugiat officia culpa tempor duis duis. Ut quis ipsum cillum pariatur ut dolor est adipisicing velit consectetur ex. Ut ullamco dolor veniam consequat anim sunt ex veniam reprehenderit aliquip nulla tempor excepteur enim.\r\n","registered":"2015-06-18T03:45:18 +04:00","latitude":-32.127366,"longitude":-174.393995,"tags":["deserunt","id","elit","consectetur","in","commodo","adipisicing"],"friends":[{"id":0,"name":"Luigi Hayden"},{"id":1,"name":"Klank Molina"},{"id":2,"name":"Anakin Fleming"}],"greeting":"Hello, Pressondon England! You have 7 unread messages.","favoriteFruit":"apple"},{"_id":"5e84d9dc706c991b80e9349f","index":2,"guid":"dd40db5c-03cc-4171-bf28-4033316b36f4","isActive":true,"balance":"$2,480.89","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":"Coder Morse","gender":"male","company":"GREEKINEESE","email":"codermorse@example.com","phone":"+1 (123) 123-1234","address":"40620 Any Place, Wright, American Samoa, 3435","about":"Nulla veniam minim aliqua dolore. Voluptate laboris ullamco incididunt et dolor sint consectetur aliquip minim voluptate aliquip cupidatat tempor ut. Sit nisi duis mollit tempor ea ea ipsum sunt in fugiat duis eu. Ut cillum in dolor anim sunt occaecat ut excepteur. Id esse elit sit ea esse ex commodo aliqua Lorem.\r\n","registered":"2017-03-24T01:49:51 +04:00","latitude":53.064948,"longitude":33.317406,"tags":["velit","ipsum","et","reprehenderit","veniam","mollit","consequat"],"friends":[{"id":0,"name":"Donkey Harmon"},{"id":1,"name":"Esmerelda Daniel"},{"id":2,"name":"ObiWan Kim"}],"greeting":"Hello, Coder Morse! You have 10 unread messages.","favoriteFruit":"strawberry"},{"_id":"5e84d9dccde3085eec6900f7","index":3,"guid":"ab7f6ff4-e31e-48a6-b121-bd2a5ba312a9","isActive":false,"balance":"$1,842.38","picture":"http://placehold.it/32x32","age":31,"eyeColor":"green","name":"Aumina Stephens","gender":"female","company":"FARMEX","email":"auminastephens@example.com","phone":"+1 (123) 123-1234","address":"89001 Mystery Street, Caroleen, Alabama, 2259","about":"Magna non pariatur sint sint aliquip minim sit deserunt. Commodo sit aliquip aute occaecat. Amet consequat exercitation dolor nulla pariatur excepteur labore culpa culpa ea ut cupidatat nulla. Pariatur dolor sunt cupidatat qui esse do magna culpa qui sint. Do ipsum do labore Lorem ipsum eiusmod duis magna proident labore eu culpa voluptate reprehenderit. Sunt enim nisi id sit consequat id est fugiat ex ut dolore ut officia anim. Cillum proident nisi sunt duis dolor cupidatat labore aute irure laboris.\r\n","registered":"2015-03-24T08:54:33 +04:00","latitude":62.502648,"longitude":27.140456,"tags":["eu","aliquip","dolor","exercitation","veniam","nulla","duis"],"friends":[{"id":0,"name":"Darth Christensen"},{"id":1,"name":"Grogu Barnett"},{"id":2,"name":"Quijon Valentine"}],"greeting":"Hello, Aumina Stephens! You have 1 unread messages.","favoriteFruit":"banana"},{"_id":"5e84d9dcb634ef92e65a8a6e","index":4,"guid":"79d1d012-e1cb-4d6e-a57a-39aa9b47e22d","isActive":true,"balance":"$3,160.69","picture":"http://placehold.it/32x32","age":39,"eyeColor":"green","name":"Mixxeer Collins","gender":"female","company":"RONEDINA","email":"mixxeercollins@example.com","phone":"+1 (123) 123-1234","address":"7186 Amazinga Avenue, Tonopah, New Mexico, 4200","about":"Deserunt pariatur voluptate cillum do in magna id deserunt ad. Adipisicing et nisi incididunt enim irure sunt labore officia esse ex eu ullamco elit incididunt. Dolore enim anim dolore duis aute sint do. Laborum eu do laborum quis non commodo excepteur ea.\r\n","registered":"2016-05-27T02:38:35 +04:00","latitude":86.18169,"longitude":7.90338,"tags":["consequat","excepteur","laborum","labore","fugiat","duis","id"],"friends":[{"id":0,"name":"Stafford Stafford"},{"id":1,"name":"Moore Moore"},{"id":2,"name":"Mayer Mayer"}],"greeting":"Hello, Mixxeer Collins! You have 2 unread messages.","favoriteFruit":"apple"},{"_id":"5e84d9dc5b663c0a92f55354","index":5,"guid":"fc8a9d44-90dc-4dc2-8d53-cbecfec8c919","isActive":true,"balance":"$1,682.70","picture":"http://placehold.it/32x32","age":31,"eyeColor":"blue","name":"William Murray","gender":"male","company":"DATAMAKOR","email":"williammurray@example.com","phone":"+1 (123) 123-1234","address":"39862 Supper Street, Lawrence, Utah, 3530","about":"Exercitation magna occaecat velit duis dolor sit culpa cupidatat nulla. Officia non consequat esse labore ut enim elit aute dolore reprehenderit. Id ad incididunt reprehenderit nulla dolor Lorem officia irure. Magna quis est proident esse velit Lorem voluptate quis. Aliqua qui voluptate et culpa ea et et incididunt excepteur eu. Lorem ipsum minim eu commodo dolore qui ex id occaecat.\r\n","registered":"2017-06-26T08:00:34 +04:00","latitude":-20.516833,"longitude":21.283581,"tags":["incididunt","eiusmod","anim","eiusmod","ipsum","amet","amet"],"friends":[{"id":0,"name":"Church Church"},{"id":1,"name":"Herbert Hebert"},{"id":2,"name":"Grave Graves"}],"greeting":"Hello, William Murray! You have 9 unread messages.","favoriteFruit":"apple"}];