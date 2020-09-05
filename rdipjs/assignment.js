function validate(inputtxt){
    var regx = /^\d{10}$/;
    if (inputtxt.value.match(regx)){
        return true
    }
    else{
        alert("check phone number");
        return false
    }
    
}
function validate1(inputtxt){
    var regx1 = /[^0-9][a-zA-Z]/;
    if (inputtxt.value.match(regx1)){
        return true
        
    }
    else{
        alert("Invalid text");
        return false
    }
}
function validate2(inputtxt){
    var regx2 = /^([a-zA-Z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2-8})(.[a-z]{2,8})?$/;
    if (inputtxt.value.match(regx2)){
        return true
    }
    else{
        alert("Invalid email");
        return false
    }
}

function palindrome(){
    var a = document.getElementById("text1").value;
    var c=a.length;
    var b = ""
    while(c>=0){
        b = b+a.charAt(c);
        c=c-1;
    }
    if(a==b){
        alert("Its a palindrome");
    }
    else{
        alert("Not a palindrome");
    }
}

//var x = document.getElementById("text2").value;
//var y = document.getElementById("text3").value;
// function anagram(str1, str2){
//     if(str1.length !== str2.length){
//         alert("not an anagram");
//     }
//     var lookup = {}
//     for (var i=0;i<str1.length;i++){
//         var char=str1[i]
//         lookup[char] ? lookup[char]+=1: lookup[char]=1
//     }
//     for (var i=0; i<str2.length; i++){
//         var char = str2[i]
//         if(!lookup[char]){
//             alert("not an anagram");
//         }
//         else{
//             lookup[char] -= 1
//         }
//     }
//     alert("anagram");
// }
function isAnagram(s,t){
    var counts = {};
    for(var i=0;i<s.length;i++){
        var c = s.charAt(i);
        if(!counts[c]){
            counts[c]=0;
        }
        counts[c]++;
    }
    for(var i=0; i<t.length; i++){
        var c= t.charAt(i);
        if(!counts[c]){
            return false;
        }
        counts[c]--;
        if(counts[c]){
            delete counts[c];
        }
    }
    for (var k in counts){
        if(counts[k]){
            return false;
        }
    }
    return true;
};