/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  *//*
 * AES Cipher function: encrypt 'input' with Rijndael algorithm
 *
 *   takes   byte-array 'input' (16 bytes)
 *           2D byte-array key schedule 'w' (Nr+1 x Nb bytes)
 *
 *   applies Nr rounds (10/12/14) using key schedule w for 'add round key' stage
 *
 *   returns byte-array encrypted value (16 bytes)
 */function Cipher(input,w){// main Cipher function [§5.1]
var Nb=4;// block size (in words): no of columns in state (fixed at 4 for AES)
var Nr=w.length/Nb-1;// no of rounds: 10/12/14 for 128/192/256-bit keys
var state=[[],[],[],[]];// initialise 4xNb byte-array 'state' with input [§3.4]
for(var i=0;i<4*Nb;i++)state[i%4][Math.floor(i/4)]=input[i];state=AddRoundKey(state,w,0,Nb);for(var round=1;round<Nr;round++){state=SubBytes(state,Nb);state=ShiftRows(state,Nb);state=MixColumns(state,Nb);state=AddRoundKey(state,w,round,Nb)}state=SubBytes(state,Nb);state=ShiftRows(state,Nb);state=AddRoundKey(state,w,Nr,Nb);var output=new Array(4*Nb);// convert state to 1-d array before returning [§3.4]
for(var i=0;i<4*Nb;i++)output[i]=state[i%4][Math.floor(i/4)];return output}function SubBytes(s,Nb){// apply SBox to state S [§5.1.1]
for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)s[r][c]=Sbox[s[r][c]]}return s}function ShiftRows(s,Nb){// shift row r of state S left by r bytes [§5.1.2]
var t=new Array(4);for(var r=1;r<4;r++){for(var c=0;c<4;c++)t[c]=s[r][(c+r)%Nb];// shift into temp copy
for(var c=0;c<4;c++)s[r][c]=t[c];// and copy back
}// note that this will work for Nb=4,5,6, but not 7,8 (always 4 for AES):
return s;// see fp.gladman.plus.com/cryptography_technology/rijndael/aes.spec.311.pdf
}function MixColumns(s,Nb){// combine bytes of each col of state S [§5.1.3]
for(var c=0;c<4;c++){var a=new Array(4);// 'a' is a copy of the current column from 's'
var b=new Array(4);// 'b' is a•{02} in GF(2^8)
for(var i=0;i<4;i++){a[i]=s[i][c];b[i]=s[i][c]&128?s[i][c]<<1^283:s[i][c]<<1}// a[n] ^ b[n] is a•{03} in GF(2^8)
s[0][c]=b[0]^a[1]^b[1]^a[2]^a[3];// 2*a0 + 3*a1 + a2 + a3
s[1][c]=a[0]^b[1]^a[2]^b[2]^a[3];// a0 * 2*a1 + 3*a2 + a3
s[2][c]=a[0]^a[1]^b[2]^a[3]^b[3];// a0 + a1 + 2*a2 + 3*a3
s[3][c]=a[0]^b[0]^a[1]^a[2]^b[3];// 3*a0 + a1 + a2 + 2*a3
}return s}function AddRoundKey(state,w,rnd,Nb){// xor Round Key into state S [§5.1.4]
for(var r=0;r<4;r++){for(var c=0;c<Nb;c++)state[r][c]^=w[rnd*4+c][r]}return state}function KeyExpansion(key){// generate Key Schedule (byte-array Nr+1 x Nb) from Key [§5.2]
var Nb=4;// block size (in words): no of columns in state (fixed at 4 for AES)
var Nk=key.length/4;// key length (in words): 4/6/8 for 128/192/256-bit keys
var Nr=Nk+6;// no of rounds: 10/12/14 for 128/192/256-bit keys
var w=new Array(Nb*(Nr+1));var temp=new Array(4);for(var i=0;i<Nk;i++){var r=[key[4*i],key[4*i+1],key[4*i+2],key[4*i+3]];w[i]=r}for(var i=Nk;i<Nb*(Nr+1);i++){w[i]=new Array(4);for(var t=0;t<4;t++)temp[t]=w[i-1][t];if(i%Nk==0){temp=SubWord(RotWord(temp));for(var t=0;t<4;t++)temp[t]^=Rcon[i/Nk][t]}else if(Nk>6&&i%Nk==4){temp=SubWord(temp)}for(var t=0;t<4;t++)w[i][t]=w[i-Nk][t]^temp[t]}return w}function SubWord(w){// apply SBox to 4-byte word w
for(var i=0;i<4;i++)w[i]=Sbox[w[i]];return w}function RotWord(w){// rotate 4-byte word w left by one byte
w[4]=w[0];for(var i=0;i<4;i++)w[i]=w[i+1];return w}// Sbox is pre-computed multiplicative inverse in GF(2^8) used in SubBytes and KeyExpansion [§5.1.1]
var Sbox=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22];// Rcon is Round Constant used for the Key Expansion [1st col is 2^(r-1) in GF(2^8)] [§5.2]
var Rcon=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  *//*
 * Use AES to encrypt 'plaintext' with 'password' using 'nBits' key, in 'Counter' mode of operation
 *                           - see http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf
 *   for each block
 *   - outputblock = cipher(counter, key)
 *   - cipherblock = plaintext xor outputblock
 */function AESEncryptCtr(plaintext,password,nBits){if(!(nBits==128||nBits==192||nBits==256))return'';// standard allows 128/192/256 bit keys
// for this example script, generate the key by applying Cipher to 1st 16/24/32 chars of password;
// for real-world applications, a more secure approach would be to hash the password e.g. with SHA-1
var nBytes=nBits/8;// no bytes in key
var pwBytes=new Array(nBytes);for(var i=0;i<nBytes;i++)pwBytes[i]=password.charCodeAt(i)&255;var key=Cipher(pwBytes,KeyExpansion(pwBytes));key=key.concat(key.slice(0,nBytes-16));// key is now 16/24/32 bytes long
// initialise counter block (NIST SP800-38A §B.2): millisecond time-stamp for nonce in 1st 8 bytes,
// block counter in 2nd 8 bytes
var blockSize=16;// block size fixed at 16 bytes / 128 bits (Nb=4) for AES
var counterBlock=new Array(blockSize);// block size fixed at 16 bytes / 128 bits (Nb=4) for AES
var nonce=new Date().getTime();// milliseconds since 1-Jan-1970
// encode nonce in two stages to cater for JavaScript 32-bit limit on bitwise ops
for(var i=0;i<4;i++)counterBlock[i]=nonce>>>i*8&255;for(var i=0;i<4;i++)counterBlock[i+4]=nonce/4294967296>>>i*8&255;// generate key schedule - an expansion of the key into distinct Key Rounds for each round
var keySchedule=KeyExpansion(key);var blockCount=Math.ceil(plaintext.length/blockSize);var ciphertext=new Array(blockCount);// ciphertext as array of strings
for(var b=0;b<blockCount;b++){// set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
// again done in two stages for 32-bit ops
for(var c=0;c<4;c++)counterBlock[15-c]=b>>>c*8&255;for(var c=0;c<4;c++)counterBlock[15-c-4]=b/4294967296>>>c*8;var cipherCntr=Cipher(counterBlock,keySchedule);// -- encrypt counter block --
// calculate length of final block:
var blockLength=b<blockCount-1?blockSize:(plaintext.length-1)%blockSize+1;var ct='';for(var i=0;i<blockLength;i++){// -- xor plaintext with ciphered counter byte-by-byte --
var plaintextByte=plaintext.charCodeAt(b*blockSize+i);var cipherByte=plaintextByte^cipherCntr[i];ct+=String.fromCharCode(cipherByte)}// ct is now ciphertext for this block
ciphertext[b]=escCtrlChars(ct);// escape troublesome characters in ciphertext
}// convert the nonce to a string to go on the front of the ciphertext
var ctrTxt='';for(var i=0;i<8;i++)ctrTxt+=String.fromCharCode(counterBlock[i]);ctrTxt=escCtrlChars(ctrTxt);// use '-' to separate blocks, use Array.join to concatenate arrays of strings for efficiency
return ctrTxt+'-'+ciphertext.join('-')}/*
 * Use AES to decrypt 'ciphertext' with 'password' using 'nBits' key, in Counter mode of operation
 *
 *   for each block
 *   - outputblock = cipher(counter, key)
 *   - cipherblock = plaintext xor outputblock
 */function AESDecryptCtr(ciphertext,password,nBits){if(!(nBits==128||nBits==192||nBits==256))return'';// standard allows 128/192/256 bit keys
var nBytes=nBits/8;// no bytes in key
var pwBytes=new Array(nBytes);for(var i=0;i<nBytes;i++)pwBytes[i]=password.charCodeAt(i)&255;var pwKeySchedule=KeyExpansion(pwBytes);var key=Cipher(pwBytes,pwKeySchedule);key=key.concat(key.slice(0,nBytes-16));// key is now 16/24/32 bytes long
var keySchedule=KeyExpansion(key);ciphertext=ciphertext.split('-');// split ciphertext into array of block-length strings
// recover nonce from 1st element of ciphertext
var blockSize=16;// block size fixed at 16 bytes / 128 bits (Nb=4) for AES
var counterBlock=new Array(blockSize);var ctrTxt=unescCtrlChars(ciphertext[0]);for(var i=0;i<8;i++)counterBlock[i]=ctrTxt.charCodeAt(i);var plaintext=new Array(ciphertext.length-1);for(var b=1;b<ciphertext.length;b++){// set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
for(var c=0;c<4;c++)counterBlock[15-c]=b-1>>>c*8&255;for(var c=0;c<4;c++)counterBlock[15-c-4]=b/4294967296-1>>>c*8&255;var cipherCntr=Cipher(counterBlock,keySchedule);// encrypt counter block
ciphertext[b]=unescCtrlChars(ciphertext[b]);var pt='';for(var i=0;i<ciphertext[b].length;i++){// -- xor plaintext with ciphered counter byte-by-byte --
var ciphertextByte=ciphertext[b].charCodeAt(i);var plaintextByte=ciphertextByte^cipherCntr[i];pt+=String.fromCharCode(plaintextByte)}// pt is now plaintext for this block
plaintext[b-1]=pt;// b-1 'cos no initial nonce block in plaintext
}return plaintext.join('')}/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */function escCtrlChars(str){// escape control chars which might cause problems handling ciphertext
return str.replace(/[\0\t\n\v\f\r\xa0'"!-]/g,function(c){return'!'+c.charCodeAt(0)+'!'})}// \xa0 to cater for bug in Firefox; include '-' to leave it free for use as a block marker
function unescCtrlChars(str){// unescape potentially problematic control characters
return str.replace(/!\d\d?\d?!/g,function(c){return String.fromCharCode(c.slice(1,-1))})}/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  *//*
 * if escCtrlChars()/unescCtrlChars() still gives problems, use encodeBase64()/decodeBase64() instead
 */var b64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';function encodeBase64(str){// http://tools.ietf.org/html/rfc4648
var o1,o2,o3,h1,h2,h3,h4,bits,i=0,enc='';str=encodeUTF8(str);// encode multi-byte chars into UTF-8 for byte-array
do{// pack three octets into four hexets
o1=str.charCodeAt(i++);o2=str.charCodeAt(i++);o3=str.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&63;h2=bits>>12&63;h3=bits>>6&63;h4=bits&63;// end of string? index to '=' in b64
if(isNaN(o3))h4=64;if(isNaN(o2))h3=64;// use hexets to index into b64, and append result to encoded string
enc+=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4)}while(i<str.length);return enc}function decodeBase64(str){var o1,o2,o3,h1,h2,h3,h4,bits,i=0,enc='';do{// unpack four hexets into three octets using index points in b64
h1=b64.indexOf(str.charAt(i++));h2=b64.indexOf(str.charAt(i++));h3=b64.indexOf(str.charAt(i++));h4=b64.indexOf(str.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&255;o2=bits>>8&255;o3=bits&255;if(h3==64)enc+=String.fromCharCode(o1);else if(h4==64)enc+=String.fromCharCode(o1,o2);else enc+=String.fromCharCode(o1,o2,o3)}while(i<str.length);return decodeUTF8(enc);// decode UTF-8 byte-array back to Unicode
}function encodeUTF8(str){// encode multi-byte string into utf-8 multiple single-byte characters
str=str.replace(/[\u0080-\u07ff]/g,// U+0080 - U+07FF = 2-byte chars
function(c){var cc=c.charCodeAt(0);return String.fromCharCode(192|cc>>6,128|cc&63)});str=str.replace(/[\u0800-\uffff]/g,// U+0800 - U+FFFF = 3-byte chars
function(c){var cc=c.charCodeAt(0);return String.fromCharCode(224|cc>>12,128|cc>>6&63,128|cc&63)});return str}function decodeUTF8(str){// decode utf-8 encoded string back into multi-byte characters
str=str.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,// 2-byte chars
function(c){var cc=(c.charCodeAt(0)&31)<<6|c.charCodeAt(1)&63;return String.fromCharCode(cc)});str=str.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,// 3-byte chars
function(c){var cc=(c.charCodeAt(0)&15)<<12|c.charCodeAt(1)&63<<6|c.charCodeAt(2)&63;return String.fromCharCode(cc)});return str}function byteArrayToHexStr(b){// convert byte array to hex string for displaying test vectors
var s='';for(var i=0;i<b.length;i++)s+=b[i].toString(16)+' ';return s}/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */var plainText='ROMEO: But, soft! what light through yonder window breaks?\nIt is the east, and Juliet is the sun.\nArise, fair sun, and kill the envious moon,\nWho is already sick and pale with grief,\nThat thou her maid art far more fair than she:\nBe not her maid, since she is envious;\nHer vestal livery is but sick and green\nAnd none but fools do wear it; cast it off.\nIt is my lady, O, it is my love!\nO, that she knew she were!\nShe speaks yet she says nothing: what of that?\nHer eye discourses; I will answer it.\nI am too bold, \'tis not to me she speaks:\nTwo of the fairest stars in all the heaven,\nHaving some business, do entreat her eyes\nTo twinkle in their spheres till they return.\nWhat if her eyes were there, they in her head?\nThe brightness of her cheek would shame those stars,\nAs daylight doth a lamp; her eyes in heaven\nWould through the airy region stream so bright\nThat birds would sing and think it were not night.\nSee, how she leans her cheek upon her hand!\nO, that I were a glove upon that hand,\nThat I might touch that cheek!\nJULIET: Ay me!\nROMEO: She speaks:\nO, speak again, bright angel! for thou art\nAs glorious to this night, being o\'er my head\nAs is a winged messenger of heaven\nUnto the white-upturned wondering eyes\nOf mortals that fall back to gaze on him\nWhen he bestrides the lazy-pacing clouds\nAnd sails upon the bosom of the air.';var password='O Romeo, Romeo! wherefore art thou Romeo?';var cipherText=AESEncryptCtr(plainText,password,256);var decryptedText=AESDecryptCtr(cipherText,password,256);if(decryptedText!=plainText)throw'ERROR: bad result: expected '+plainText+' but got '+decryptedText;
