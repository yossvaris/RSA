const NodeRSA = require('node-rsa')

const key = new NodeRSA({b:1024}) //bytes

let password = "password_drowssap"

// var EncryptedString = key.encrypt(password, 'base64')
// console.log(EncryptedString)

// var DecryptedString = key.decrypt(EncryptedString, 'utf8')
// console.log(DecryptedString)

var public_key = key.exportKey('public')
var private_key = key.exportKey('private')

//console.log(public_key + '\n' + private_key)

let key_private = new NodeRSA(private_key)
let key_public = new NodeRSA(public_key)

var EncryptedString = key_public.encrypt(password, 'base64')

var DecryptedString = key_private.decrypt(EncryptedString, 'utf8')

console.log(DecryptedString)